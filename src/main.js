import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Index from './views/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(axios)



Vue.prototype.axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
