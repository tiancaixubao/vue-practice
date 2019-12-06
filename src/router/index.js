import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from'../components/Welcome'
import Users from'../components/User/Users'



Vue.use(Router);

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/Login', component: Login},
    {path: '/home', component: Home,
      redirect:'/wlcome',
      children:[{path:'/wlcome',component:Welcome},
                {path:'/users',component: Users}
      ]
    }
  ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将访问路径
  // from从哪跳转
  // next函数放行 next('/login')强制跳转
  if (to.path == '/login') return next();
// 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next()
});
export default router
