// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// 导入字体图标
import './assets/fonts/iconfont.css'


Vue.use(ElementUI)
// 配置请求的根路径

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 全局使用axios
Vue.prototype.$http = axios;
// Vue.prototype.$message=Message;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
