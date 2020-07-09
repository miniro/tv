<template>
  <div class="world-button">
    <div>
      <div style="text-align: center;font-family: 'Helvetica Neue';font-size: 20px">国家选择</div>
      <div class="btn"><el-button style="background:#0c4e00;color: #ffffff;" @click="getCountry('America')">美国</el-button></div>
      <div class="btn"><el-button style="background:#799800;color: #ffffff;" @click="getCountry('China')">中国</el-button></div>
      <div class="btn"><el-button style="background:#457200;color: #ffffff;" @click="getCountry('Japan')">日本</el-button></div>
      <div class="btn"><el-button style="background:#296000;color: #ffffff;" @click="getCountry('English')">英国</el-button></div>
      <div class="btn"><el-button style="background:#91ab00;color: #ffffff;" @click="getCountry('Korea')">韩国</el-button></div>
    </div>
    <p>{{ countryName }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AWorldButton',
  computed: {
    ...mapState({
      countryName: state => state.countryName
    })
  },
  methods: {
    ...mapMutations([
      'modifyCountry'
    ]),
    getCountry (newCountry) {
      this.modifyCountry(newCountry)
    }
  }
}
</script>

<style>
.world-button {
  height: 400px;
  margin-top: 100px;
  border: 1px solid;
  padding: 20px;
}
.btn {
  margin-top: 25px;
  text-align: center;
}
</style>
