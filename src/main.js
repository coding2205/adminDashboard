import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Charts from 'chart.js';
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)


Vue.config.productionTip = true

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
