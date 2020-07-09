<template>
  <div class="world-map">
    <WorldMap/>
  </div>
</template>

<script>
import WorldMap from '@/components/Echarts/WorldMap'

export default {
  name: 'AWorldMap',
  components: {
    WorldMap
  }
}
</script>

<style>
  .world-map {
    height: 400px;
    margin-top: 100px;
    border: 1px solid;
    padding: 20px;
  }
</style>
