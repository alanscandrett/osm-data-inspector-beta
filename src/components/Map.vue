<template>
  <div style="height: 80vh">
    <LMap ref="LeafletMap" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      url:
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332],
      bounds: null
    };
  },
  mounted() {
    // add leaflet-geoman controls with some options to the map
    const map = this.$refs.LeafletMap.mapObject;
    map.pm.addControls({
      position: "topleft",
      drawPolyline: false,
      drawCircleMarker: false,
      drawMarker: false,
      cutPolygon: false,
      oneBlock: true
    });

    map.on('pm:drawend', e => {  
      console.log(e);  
    });  

  }
};
</script>
