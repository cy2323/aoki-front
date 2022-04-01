import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import {postRequest} from "./utils/api"
import {getRequest} from "./utils/api"
import {deleteRequest} from "./utils/api"

Vue.use(ElementUI)
Vue.use(VueCookies)
// 插件方式全局配置api请求
Vue.prototype.postRequest = postRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest

// 设定浏览器的代码模式中是否提示信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
