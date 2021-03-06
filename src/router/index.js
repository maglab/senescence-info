import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import DeathFears from "../components/DeathFears";
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
import DamageBased from "../components/DamageBased";
import ProgrammedTheories from "../components/ProgrammedTheories";
import CuringAgeing from "../components/CuringAgeing"
import FightAgeing from "../components/FightAgeing";
import Immortality from "../components/Immortality";
import Glossary from "../components/Glossary";
import Links from "../components/Links";
import Bibliography from "../components/Bibliography";
import Gerontology from "../components/Gerontology";
import GerontologyTutorials from "../components/GerontologyTutorials";
import WineChocolate from "../components/WineChocolate";
import CalorieRestriction from "../components/CalorieRestriction";
import SENS from "../components/SENS";
import EngineeringAgeing from "../components/EngineeringAgeing";
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
      path: '/death-and-ageing-fears',
      name: 'DeathFears',
      component: DeathFears
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
      path: '/future-grandparents',
      name: 'Grandparents',
      component: GrandParents

    },
    {
      path: '/anti-ageing-medicine',
      name: 'AntiAgeing',
      component: AntiAgeing
    },
    {
      path: '/physical-immortality-myths',
      name: 'CureAgeing',
      component: CureAgeing
    },
    {
      path:'/biogerontology-career',
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
    {
      path: '/causes-of-ageing',
      name: 'DamageBased',
      component: DamageBased
    },
    {
      path: '/programmed-ageing',
      name: 'ProgrammedAgeing',
      component: ProgrammedTheories
    },
    {
      path: '/ageing-cure',
      name: 'CuringAgeing',
      component: CuringAgeing
    },
    {
      path: '/help-fight-ageing',
      name: 'FightAgeing',
      component: FightAgeing
    },
    {
      path: '/immortality-society',
      name: 'ImmortalitySociety',
      component: Immortality
    },
    {
      path: '/ageing-glossary',
      name: 'Glossary',
      component: Glossary
    },
    {
      path: '/ageing-links',
      name: 'Links',
      component: Links
    },
    {
      path: '/bibliography',
      name: 'Bibliography',
      component: Bibliography
    },
    {
      path: '/gerontology',
      name: 'Gerontology',
      component: Gerontology
    },
    {
      path: '/gerontology-tutorials',
      name: 'GerontologyTutorials',
      component: GerontologyTutorials
    },
    {
     path: '/wine-chocolate-long-life',
     name: 'WineChocolate',
     component: WineChocolate
    },
    {
      path: '/caloric-restriction',
      name: 'CalorieRestriction',
      component: CalorieRestriction
    },
    {
      path: '/sens',
      name: 'SENS',
      component: SENS
    },
    {
      path: '/engineering-ageing',
      name: 'Godseed',
      component: EngineeringAgeing
    },
    { path: '*', redirect: '/home' }
  ]
})
