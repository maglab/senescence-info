import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Vision from '../components/Vision.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'
import Author from '../components/Author'
import Disclaimer from '../components/Disclaimer'
import ExtLinks from '../components/ExtLinks'
import GrandParents from '../components/GrandParents'
import AntiAgeing from '../components/AntiAgeing'
import CureAgeing from '../components/CureAgeing'
import HowTo from "../components/HowTo";
import Books from "../components/Books";
import AgeingDef from "../components/AgeingDef";
import AgingAnimals from "../components/AgingAnimals";
import ComparativeBiology from "../components/ComparativeBiology";
import EvolutionAgeing from "../components/EvolutionAgeing";
import AgeingModels from "../components/AgeingModels";
import CellAgeing from "../components/CellAgeing";
import TelomeresTelomerase from "../components/TelomeresTelomerase";
import AgeingGenetics from "../components/AgeingGenetics";
import AgeingTheories from "../components/AgeingTheories";
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
    {
      path: '/external-links',
      name: 'Links',
      component: ExtLinks
    },
    {
      path: '/grandparents',
      name: 'Grandparents',
      component: GrandParents

    },
    {
      path: '/anti-ageing-medicine',
      name: 'AntiAgeing',
      component: AntiAgeing
    },
    {
      path: '/cure-ageing',
      name: 'CureAgeing',
      component: CureAgeing
    },
    {
      path:'/how-to',
      name:'HowTo',
      component: HowTo
    },
    {
      path:'/books',
      name: 'Books',
      component: Books
    },
    {
      path:'/ageing-definition',
      name: 'AgeingDef',
      component: AgeingDef
    },
    {
      path:'/ageing-animals',
      name: 'AgeingAnimals',
      component: AgingAnimals
    },
    {
      path:'/comparative-biology',
      name: 'ComparativeBiology',
      component: ComparativeBiology
    },
    {
      path:'/evolution-of-ageing',
      name: 'EvolutionAgeing',
      component: EvolutionAgeing
    },
    {
      path:'/ageing-models',
      name: 'AgeingModels',
      component: AgeingModels
    },
    {
      path: '/cell-ageing',
      name: 'CellAgeing',
      component: CellAgeing
    },
    {
      path: '/telomeres-telomerase',
      name: 'TelomeresTelomerase',
      component: TelomeresTelomerase
    },
    {
      path: '/genetics-of-ageing',
      name: 'AgeingGenetics',
      component: AgeingGenetics
    },
    {
     path: '/ageing-theories',
     name: 'AgeingTheories',
     component: AgeingTheories
    },
    { path: '*', redirect: '/home' }
  ]
})
