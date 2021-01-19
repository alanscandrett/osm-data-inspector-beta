<template>
  <div class="MapView">
    <LMap ref="LeafletMap" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <MapButton
        ><StatisticsPanel
          :buildingsCount="buildingStatistics.buildingsCount"
          :buildingsLandUse="buildingStatistics.buildingsLandUse"
      /></MapButton>
    </LMap>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import "leaflet-draw";
import query from "../../controllers/queryController";
import MapButton from "../molecules/MapButton";
import StatisticsPanel from "../atoms/StatisticsPanel";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    MapButton,
    StatisticsPanel,
  },
  data() {
    return {
      url: "https://cdn.lima-labs.com/{z}/{x}/{y}.png?free",
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332],
      bounds: null,
      buildingLayer: undefined,
      buildingFootprintArea: undefined,
      queryPolygonArea: undefined,
    };
  },
  computed: {
    map() {
      return this.$refs.LeafletMap.mapObject;
    },
    buildingStatistics() {
      let statistics = {
        buildingsCount: undefined,
        buildingsLandUse: undefined,
      };
      if (this.buildingLayer && this.buildingFootprintArea && this.queryPolygonArea) {
        // Total amount of structures
        statistics.buildingsCount = Object.keys(
          this.buildingLayer._layers
        ).length;
        // Landuse relative to structures
        statistics.buildingsLandUse = this.buildingFootprintArea / this.queryPolygonArea * 100
      }
      console.log(this.buildingFootprintArea, this.queryPolygonArea)
      return statistics;
    },
  },
  mounted() {
    // add leaflet-geoman controls with some options to the map
    this.addControls();
    // Event listener to inject OSM geometry into map on draw complete.
    this.map.on("pm:drawend", () => {
      this.buildingFootprintArea = 0;
      this.queryPolygonArea = 0;
      this.getGeometry();
    });
  },
  methods: {
    addControls() {
      // Geoman Draw Tools
      this.map.pm.addControls({
        position: "topleft",
        drawPolyline: false,
        drawCircle: false,
        drawCircleMarker: false,
        drawMarker: false,
        cutPolygon: false,
        removalMode: false,
        editMode: false,
        oneBlock: true,
      });
    },
    getGeometry() {
      const geoJson = this.map.pm.getGeomanDrawLayers(true).toGeoJSON();
      // Area in Meters Squared
      this.queryPolygonArea = L.GeometryUtil.geodesicArea(
        this.map.pm.getGeomanDrawLayers(true).getLayers()[0].getLatLngs()[0]
      );
      // Remove existing geometry and previous drawn geometry
      //if(this.buildingLayer) this.map.removeLayer(this.buildingLayer);
      this.map.eachLayer(function (layer) {
        if (!layer._url) layer.remove();
      });
      this.spatialQueryOSM(geoJson);
    },
    addGeoJSONtoMap(error, layer) {
      this.buildingLayer = L.geoJson(layer, { pmIgnore: true });
      this.buildingLayer.addTo(this.map);
      this.calculateBuildingFootprintArea();
    },
    spatialQueryOSM(geoJson) {
      let latlon = "";
      geoJson.features[0].geometry.coordinates[0].pop();
      geoJson.features[0].geometry.coordinates[0].forEach((coordPair) => {
        latlon += " " + coordPair[1] + " " + coordPair[0];
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
      console.log(this.buildingLayer);
      const layerList = this.buildingLayer.getLayers();
      layerList.forEach(layer => {
        let area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
        console.log(area)
        totalArea += area
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
