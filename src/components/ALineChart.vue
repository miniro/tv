<template>
  <div class="line-chart">
    <LineChart/>
  </div>
</template>>

<script>
import LineChart from '@/components/Echarts/LineChart'

export default {
  name: 'ALineChart',
  components: {
    LineChart
  }
}
</script>

<style>
  .line-chart {
    height: 300px;
    padding: 100px;
    border: 1px solid;
    padding: 20px;
    text-align: center;
  }
</style>
