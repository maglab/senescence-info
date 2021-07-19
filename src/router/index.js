import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Vision from '../components/Vision.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'
import Author from '../components/author'
import Disclaimer from '../components/disclaimer'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/vision',
      name: 'Vision',
      component: Vision
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/author',
      name: 'Author',
      component: Author

    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    { path: '*', redirect: '/home' }
  ]
})
