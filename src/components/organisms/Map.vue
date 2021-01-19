<template>
  <div class="MapView">
    <LMap ref="LeafletMap" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <MapButton><StatisticsPanel /></MapButton>
    </LMap>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import query from "../../controllers/queryController";
import MapButton from "../molecules/MapButton";
import StatisticsPanel from "../atoms/StatisticsPanel";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    MapButton,
    StatisticsPanel
  },
  data() {
    return {
      url: "https://cdn.lima-labs.com/{z}/{x}/{y}.png?free",
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332],
      bounds: null,
      buildingLayer: undefined
    };
  },
  computed: {
    map() {
      return this.$refs.LeafletMap.mapObject;
    }
  },
  mounted() {
    // add leaflet-geoman controls with some options to the map
    this.addControls();
    // Event listener to inject OSM geometry into map on draw complete.
    this.map.on("pm:drawend", () => {
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
        oneBlock: true
      });
    },
    getGeometry() {
      const geoJson = this.map.pm.getGeomanDrawLayers(true).toGeoJSON();
      // Remove existing geometry and previous drawn geometry
      //if(this.buildingLayer) this.map.removeLayer(this.buildingLayer);
      this.map.eachLayer(function(layer) {
        if (!layer._url) layer.remove();
      });
      this.spatialQueryOSM(geoJson);
    },
    addGeoJSONtoMap(error, layer) {
      this.buildingLayer = L.geoJson(layer, { pmIgnore: true });
      this.buildingLayer.addTo(this.map);
    },
    spatialQueryOSM(geoJson) {
      let latlon = "";
      geoJson.features[0].geometry.coordinates[0].pop();
      geoJson.features[0].geometry.coordinates[0].forEach(coordPair => {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.MapView {
  height: 100vh;
}
</style>
