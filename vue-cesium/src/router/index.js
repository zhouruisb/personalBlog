import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cesiumDemo from '@/components/cesiumDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cesiumDemo',
      component: cesiumDemo
    }
  ]
})
