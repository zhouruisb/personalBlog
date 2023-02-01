// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.`
import Vue from 'vue'
import App from './App'
import router from './router'

//1.74版本引入方式
import * as Cesium from 'cesium/Cesium'
import * as widget from "cesium/Widgets/widgets.css";


Vue.prototype.Cesium = Cesium
Vue.prototype.widget = widget


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
