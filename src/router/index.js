import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router);

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/Login', component: Login},
    {path: '/home', component: Home}
  ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将访问路径
  // from从哪跳转
  // next函数放行 next('/login')强制跳转
  if (to.path == '/login') return next();
// 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
