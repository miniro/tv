<template>
  <div class="world-button">
    <div>
      <div style="text-align: center;font-family: 'Helvetica Neue';font-size: 20px">国家选择</div>
      <div class="btn"><el-button style="background:#0c4e00;color: #ffffff;">美国</el-button></div>
      <div class="btn"><el-button style="background:#799800;color: #ffffff;">中国</el-button></div>
      <div class="btn"><el-button style="background:#457200;color: #ffffff;">日本</el-button></div>
      <div class="btn"><el-button style="background:#296000;color: #ffffff;">英国</el-button></div>
      <div class="btn"><el-button style="background:#91ab00;color: #ffffff;">韩国</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AWorldButton'
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
