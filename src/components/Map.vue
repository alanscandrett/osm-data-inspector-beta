<template>
  <div style="height: 80vh">
    <LMap :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      zoom: 15,
      center: [35.67319515681665, 139.74308967590332],
      bounds: null
    };
  }
};
</script>
