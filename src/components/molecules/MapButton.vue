<template>
  <l-control :class="cssClassName">
    <div @click="toggleOpen">
      <slot v-if="isOpen" />
      <div class="iconChart" v-else>&#128480;</div>
    </div>
  </l-control>
</template>

<script>
import { LControl } from "vue2-leaflet";
export default {
  name: "MapButton",
  components: {
    LControl
  },
  props: { cssClassName: { type: String, default: "example-custom-control" } },
  data() {
    return {
      isOpen: true
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
.iconChart {
  font-size: 4em;
  padding-right: 0.3em;
  height: 0.7em;
  width: 0.7em;
  line-height: 0.6em;
}

/* Backup CSS for development purposes */
.example-custom-control {
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
</style>
