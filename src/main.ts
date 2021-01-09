import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'

// 加载全局样式
import './styles/index.scss'

Vue.filter('dateFormat', function (value: any, format = 'YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})

Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
