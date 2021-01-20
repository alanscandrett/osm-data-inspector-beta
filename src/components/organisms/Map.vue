<template>
  <div class="MapView">
    <LMap ref="LeafletMap" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LFeatureGroup ref="SketchLayer" @ready="addControls()" />
      <MapButton
        ><StatisticsPanel
          :buildingsCount="buildingStatistics.buildingsCount"
          :buildingsLandUse="buildingStatistics.buildingsLandUse"
      /></MapButton>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LFeatureGroup } from "vue2-leaflet";
import query from "../../controllers/queryController";
import MapButton from "../molecules/MapButton";
import StatisticsPanel from "../atoms/StatisticsPanel";
// Spatial Libs
import L from "leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import * as turf from "@turf/turf";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LFeatureGroup,
    MapButton,
    StatisticsPanel,
  },
  data() {
    return {
      url: "https://cdn.lima-labs.com/{z}/{x}/{y}.png?free", // Romanization of local language labels
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332], // Tokyo
      bounds: null,
      buildingLayers: [],
      queryPolygonLayers: [],
      buildingFootprintArea: undefined,
      queryPolygonArea: undefined,
    };
  },
  computed: {
    map() {
      return this.$refs.LeafletMap.mapObject;
    },
    sketchLayer() {
      return this.$refs.SketchLayer;
    },
    buildingStatistics() {
      let statistics = {
        buildingsCount: undefined,
        buildingsLandUse: undefined,
      };
      if (this.buildingFootprintArea && this.queryPolygonArea) {
        // Total amount of structures
        statistics.buildingsCount = Object.keys(
          this.buildingLayers[0]._layers
        ).length;
        // Landuse relative to structures
        statistics.buildingsLandUse =
          (this.buildingFootprintArea / this.queryPolygonArea) * 100;
      }
      //console.log(this.buildingFootprintArea, this.queryPolygonArea);
      return statistics;
    },
  },
  mounted() {
    // Event listeners
    // Inject OSM geometry into map on draw complete.
    this.map.on("draw:created", (e) => {
      // Standard layer accessors do not work, so we manage them internally.
      // Thus we keep track of sketch layers ourselves, and remove them as needed.
      const oldLayer = this.queryPolygonLayers.pop();
      if (oldLayer) oldLayer.remove();
      // Add the newest sketch layer to the map.
      this.queryPolygonLayers.push(e.layer);
      this.map.addLayer(e.layer);
      this.buildingFootprintArea = 0;
      this.queryPolygonArea = 0;
      this.getGeometry();
    });
  },
  methods: {
    getArea(geoJson) {
      const polygon = turf.polygon(geoJson); // m2 default units
      return turf.area(polygon);
    },
    addControls() {
      // Leaflet Draw Tools
      const drawControl = new L.Control.Draw({
        draw: {
          polyline: false,
          circle: false,
          circlemarker: false,
          marker: false,
        },
        edit: {
          featureGroup: this.$refs.SketchLayer.mapObject,
          edit: false,
          remove: false,
        },
      });
      this.map.addControl(drawControl);
    },
    getGeometry() {
      const geoJson = this.queryPolygonLayers[0].toGeoJSON();
      this.queryPolygonArea = this.getArea(geoJson.geometry.coordinates);
      this.spatialQueryOSM(geoJson.geometry.coordinates);
    },
    addGeoJSONtoMap(error, layer) {
      if (this.buildingLayers.length) this.buildingLayers.pop().remove();
      const buildingLayer = L.geoJson(layer, { pmIgnore: true });
      this.buildingLayers.push(buildingLayer);
      buildingLayer.addTo(this.map);
      this.calculateBuildingFootprintArea();
    },
    spatialQueryOSM(geometryCoordinates) {
      let latlon = "";
      geometryCoordinates[0].forEach((coordinatePair) => {
        latlon += " " + coordinatePair[1] + " " + coordinatePair[0];
      });
      // query, callback, options
      query.osm(
        `[out:json];
        way[building](poly:"${latlon}");
        (._;>;);
        out;`,
        this.addGeoJSONtoMap,
        { flatProperties: true }
      );
    },
    async calculateBuildingFootprintArea() {
      var totalArea = 0;
      const layerList = this.buildingLayers[0].getLayers();
      layerList.forEach((layer) => {
        let area = this.getArea(layer.feature.geometry.coordinates);
        totalArea += area;
      });
      this.buildingFootprintArea = parseFloat(totalArea.toFixed(2));
    },
  },
};
</script>

<style lang="scss" scoped>
.MapView {
  height: 100vh;
}
</style>
