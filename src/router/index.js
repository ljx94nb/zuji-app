import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Found from '@/views/Found'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: './home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/found',
      name: 'Found',
      component: Found
    }, {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
