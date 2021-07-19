import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
