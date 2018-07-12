// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 引入mockjs
import './mock/hello-mock.js'

// axios是不能在其他组件中使用的，所以将axios改写为vue的原型属性
// 组件进行数据请求时可以用this.$axios.get().then()来实现
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
