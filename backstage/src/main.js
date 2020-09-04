// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入阿里矢量图
import '@/assets/icon/iconfont.css';
import '@/assets/icon/iconfont.js';
// 左边目录滚动条修改
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
//读取JSON
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(ElementUI).use(vuescroll).use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
