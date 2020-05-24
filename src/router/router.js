import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('../views/Serve.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/ProductInfo.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes
})

export default router