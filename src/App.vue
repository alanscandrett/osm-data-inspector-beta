<template>
  <div id="app">
    <Map />
    <!-- <Interface /> -->
  </div>
</template>

<script>
import Map from "./components/organisms/Map";
// import Interface from "./components/Interface"

export default {
  name: "App",
  components: {
    Map
    // Interface
  }
};
</script>

<style lang="scss">
@import "styles/_cssReset.scss";
#app {
  overflow: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
