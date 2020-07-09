import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Row, Col } from 'element-ui'
import echarts from 'echarts'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Row)
Vue.use(Col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
