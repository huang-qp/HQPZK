import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage/homePageIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: homePage
    }
  ]
})
