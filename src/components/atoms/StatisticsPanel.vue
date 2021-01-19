<template>
  <div class="PanelParent">
    <div>
      <h1>Structure Statistics</h1>
    </div>
    <div>
      <table>
        <tr>
          <th>Building Quantity</th>
          <th>Unique Building Count</th>
          <th>Land Use</th>
        </tr>
        <tr>
          <td>{{ buildingsQuantity }}</td>
          <td>{{ buildingsUniqueCount }}</td>
          <td>{{ buildingsLandUse }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsPanel",
  components: {},
  props: {
    buildingsQuantity: { type: Number, default: 0 },
    buildingsUniqueCount: { type: Number, default: 0 },
    buildingsLandUse: { type: Number, default: 0 }
  }
};
</script>

<style lang="scss" scoped>
/* Backup CSS for development purposes */
.PanelParent {
  padding: 0.5em;
  border: 1px solid grey;
  border-radius: 0.1em;
}

table,
th,
td {
  border: 1px solid black;
}

th {
  padding: 0.3em;
}
</style>
