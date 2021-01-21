<template>
  <l-control  position="topleft" :class="cssClassName">
    <div @click="toggleOpen">
      <!-- @slot Use this slot for populating the button's expanded window -->
      <slot v-if="isOpen" />
      <div class="icon" v-else>{{ unicodeSymbol }}</div>
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
  props: {
    cssClassName: { type: String, default: "example-custom-control" },
    unicodeSymbol: { type: String, default: "\u2639" }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 1.8em;
}

/* Backup CSS for development purposes */
.example-custom-control {
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
</style>
