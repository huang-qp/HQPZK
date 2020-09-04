import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePageIndex'
import Login from '@/components/home/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
