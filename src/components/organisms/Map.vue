<template>
  <div class="MapView">
    <LMap ref="LeafletMap" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <LFeatureGroup ref="SketchLayer" @ready="addControls()" />
      <MapButton :unicodeSymbol="chartIcon">
        <StatisticsPanel
          :buildingsCount="buildingStatistics.buildingsCount"
          :buildingsLandUse="buildingStatistics.buildingsLandUse"
      /></MapButton>
    </LMap>
  </div>
</template>

<script>
/**
 * Component for rendering the Leaflet map.
 * @displayName Map View Component
 */
import { LMap, LTileLayer, LFeatureGroup } from "vue2-leaflet";
import query from "../../controllers/queryController";
import MapButton from "../molecules/MapButton";
import StatisticsPanel from "../atoms/StatisticsPanel";
// Spatial Libraries
import L from "leaflet";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import * as turf from "@turf/turf";
import * as clip from "turf-clip";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LFeatureGroup,
    MapButton,
    StatisticsPanel
  },
  data() {
    return {
      chartIcon: "\uD83D\uDCCA",
      url: "https://cdn.lima-labs.com/{z}/{x}/{y}.png?free", // Includes romanization of local language labels
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332], // Tokyo
      buildingLayers: [],
      queryPolygonLayers: [],
      buildingFootprintArea: undefined,
      queryPolygonArea: undefined
    };
  },
  computed: {
    map() {
      return this.$refs.LeafletMap.mapObject;
    },
    sketchLayer() {
      return this.$refs.SketchLayer; // Does not return .mapObject correctly
    },
    buildingStatistics() {
      let statistics = {
        buildingsCount: undefined,
        buildingsLandUse: undefined
      };
      if (this.buildingFootprintArea && this.queryPolygonArea) {
        // Amount of unique buildings
        statistics.buildingsCount = Object.keys(
          this.buildingLayers[0]._layers
        ).length;
        // % of space used by buildings in the query region.
        statistics.buildingsLandUse =
          (this.buildingFootprintArea / this.queryPolygonArea) * 100;
      }
      return statistics;
    }
  },
  mounted() {
    // Event listeners
    // Inject OSM geometry into map on draw complete.
    this.map.on("draw:created", e => {
      // Standard layer accessors do not work, so we manage them internally.
      // Thus we keep track of sketch layers ourselves, and remove them as needed.
      const oldLayer = this.queryPolygonLayers.pop();
      if (oldLayer) oldLayer.remove();
      // Add the newest sketch layer to the map.
      this.queryPolygonLayers.push(e.layer);
      this.map.addLayer(e.layer);
      // Reset statistics
      this.buildingFootprintArea = 0;
      this.queryPolygonArea = 0;
      this.getGeometry();
    });
  },
  methods: {
    getArea(geoJson) {
      const polygon = turf.polygon(geoJson); // m2 are the default units
      return turf.area(polygon);
    },
    addControls() {
      // Leaflet Draw Tool Configuration
      const drawControl = new L.Control.Draw({
        draw: {
          polyline: false,
          circle: false,
          circlemarker: false,
          marker: false
        },
        edit: {
          featureGroup: this.$refs.SketchLayer.mapObject,
          edit: false,
          remove: false
        }
      });
      this.map.addControl(drawControl);
    },
    /**
     * Extracts coordinates array required by the OSM Overpass API's spatial query.
     */
    getGeometry() {
      const geoJson = this.queryPolygonLayers[0].toGeoJSON();
      this.queryPolygonArea = this.getArea(geoJson.geometry.coordinates);
      this.spatialQueryOSM(geoJson.geometry.coordinates);
    },
    /**
     * Adds buildings and clips their geometry based on the query extent.
     */
    addGeoJSONtoMap(error, featureCollection) {
      // Remove the last set of results
      if (this.buildingLayers.length) this.buildingLayers.pop().remove();
      // Convert and clip
      featureCollection.features = featureCollection.features.map(feature => {
        // Despite defining 'way' as the return type other geometry types seems to be returned too.
        if (feature.geometry.type === "Polygon") {
          let newFeatureCollection = clip(feature, this.queryPolygonLayers[0].toGeoJSON()); // Feature is turned into FeatureCollection by turf clip.
          // Properties stripped too, we add them back here.
          newFeatureCollection.features[0].properties = feature.properties;
          newFeatureCollection.features[0].id = feature.id;
          return newFeatureCollection;
        }
      });
      // Remove undefined entries (non-polygon results)
      featureCollection.features = featureCollection.features.filter(
        feature => feature != undefined
      );
      const buildingLayer = L.geoJson(featureCollection);
      this.buildingLayers.push(buildingLayer);
      buildingLayer.addTo(this.map);
      this.calculateBuildingFootprintArea();
    },
    /**
     * Queries the OSM Overpass API.
     */
    spatialQueryOSM(geometryCoordinates) {
      let latlon = "";
      geometryCoordinates[0].forEach(coordinatePair => {
        latlon += " " + coordinatePair[1] + " " + coordinatePair[0];
      });
      // Query: Output json results for all 'ways' of type building within the following polygon.
      const queryString = `[out:json];
        way[building](poly:"${latlon}");
        (._;>;);
        out;`;
      query.osm(queryString, this.addGeoJSONtoMap, { flatProperties: true });
    },
    async calculateBuildingFootprintArea() {
      var totalArea = 0;
      const layerList = this.buildingLayers[0].getLayers();
      layerList.forEach(layer => {
        if (layer.feature.geometry.type === "Polygon") {
          let area = this.getArea(layer.feature.geometry.coordinates);
          totalArea += area;
        }
      });
      this.buildingFootprintArea = parseFloat(totalArea.toFixed(2));
    }
  }
};
</script>

<style lang="scss" scoped>
.MapView {
  height: 100vh;
}
</style>
