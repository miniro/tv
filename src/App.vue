<template>
  <div>
    <Abar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Abar from './components/Abar'

export default {
  name: 'app',
  components: {
    Abar
  },
  mounted: function () {
    // 测试
    this.$router.push('/bmain/la')
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
