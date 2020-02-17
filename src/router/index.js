import Vue from 'vue'
import VueRouter from 'vue-router'

import signup from '@/views/signup.vue'
import dashboard from '@/views/dashboard.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/signup',
    component: signup,
    name:'signup'
    
  },
  {
    path: '/dashboard',
    component: dashboard,
    name:'dashboard'
  },
  {
    path:'/Home',
    component: Home,
    name:'Home'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
