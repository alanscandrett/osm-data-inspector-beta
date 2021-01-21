<template>
  <div class="PanelParent">
    <div>
      <h1>Structure Statistics</h1>
    </div>
    <!-- Chart -->
    <div>
      <canvas ref="chart" class="chartClass" />
    </div>
    <!-- Table Statistics -->
    <div>
      <table>
        <tr>
          <th>Building Count</th>
          <th>Building Area %</th>
        </tr>
        <tr>
          <td>{{ buildingsCount }}</td>
          <td>{{ buildingsLandUse }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
// Basic barchart config
import chartConfig from "../../config/chartConfig.json";
export default {
  name: "StatisticsPanel",
  data() {
    return {
      chartObject: undefined
    };
  },
  props: {
    buildingsCount: { type: Number, default: 0 },
    buildingsLandUse: { type: Number, default: 0 },
    chartData: {
      type: Object,
      default: () => {
        return { data: [], labels: [] };
      }
    }
  },
  mounted() {
    this.chartObject = new Chart(this.$refs.chart, chartConfig);
  },
  watch: {
    chartData(newValue) {
      // For now we only expect hardcoded changes to the bar, just a POC.
      this.chartObject.data.datasets[0].data = newValue.data;
      this.chartObject.data.labels = newValue.labels;
      this.chartObject.update();
    }
  }
};
</script>

<style lang="scss" scoped>
.PanelParent {
  padding: 0.5em;
  border: 1px solid grey;
  border-radius: 0.1em;
}

// Table
table,
th,
td {
  border: 1px solid black;
  padding: 0 1em;
}

table {
  margin-left: auto;
  margin-right: auto;
}

th {
  font-weight: bold;
  padding: 0.3em;
}

// Chart
.chartClass {
  width: 400px;
}
</style>
