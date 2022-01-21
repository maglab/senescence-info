import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import TwitterFeed from "vuejs-twitter-feed";
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed)
Vue.use(TwitterFeed);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const ReferenceBuilder = () => {
  /**
   * Find all essay paragraphs
   */
  if (!document.getElementsByClassName("col")[0]) return;
  const paragraphs = document.getElementsByClassName("col")[0].querySelectorAll("p");
  /**
   * Get bibliography list
   * @type {HTMLElement}
   */
  const references = document.getElementById("references");
  let referenceList;
  if (references) referenceList = document.getElementById("references").querySelectorAll("p");
  /**
   * Function to replace reference text with links
   * @param paragraph
   * @returns {*}
   */
  const setRefLinks = (paragraph) => {
    /**
     * RegEx to find reference pattern
     * @type {RegExp}
     */
    const refMatch = /[^(; ][^(;)]*,[^(;)]\d{4}[A-Za-z0-9 -.]*?(?=\))|[^(; ]([^(;),]*,[^(;),]\d{4}[A-Za-z0-9 -.]*?)(?=;)/g;
    /**
     * Find all references via pattern
     */
    const referenceText = paragraph.replace(refMatch, '<a href="/bibliography" class="biblio-link" target="_blank">$&</a>');
    /**
     * Return newly built HTML
     */
    return referenceText;
  }
  /**
   * Loop through paragraphs to set reference links
   */
  for (let i = 0; i <= paragraphs.length; i++) {
    /**
     * Ensure paragraph exists and has inner HTML
     */
    if (paragraphs[i] && paragraphs[i].innerHTML) {
      /**
       * Set all reference links
       * @type {*}
       */
      paragraphs[i].innerHTML = setRefLinks(paragraphs[i].innerHTML);
    }
  }
  /**
   * Loop through links to set dynamic bibliography URLs
   */
  const links = document.getElementsByClassName('biblio-link');
  Array.from(links).forEach((a) => {
    if (a && a.innerText) {
      /**
       * Blacklist of words to avoid when filtering
       */
      const blacklist = ['reviewed', 'pubmed', 'instance', 'arguments', 'overview', 'adapted', 'from'];
      /**
       * Break link text into array
       * Remove symbols and separate by spaces
       * @type {string[]}
       */
      let matchArray = a.innerText
        .replace(/[^a-zA-Z0-9\s]/g, ' ').split(' ');
      /**
       * Remove words under 3 letters in length & check blacklist
       */
      matchArray = matchArray.filter((match) => match.length > 3 && !blacklist.includes(match.toLowerCase()));
      /**
       * Search through references to find possible matches
       */
      Array.from(referenceList).forEach((ref, x) => {
        if (ref && ref.innerText) {
          /**
           * Break reference text into array
           * Remove symbols and separate by spaces
           * @type {string[]}
           */
          let referenceArray = ref.innerText
            .replace(/[^a-zA-Z0-9\s]/g, ' ').split(' ');
          /**
           * Remove words under 3 letters in length & check blacklist
           */
          referenceArray = referenceArray.filter((match) => match.length > 3 && !blacklist.includes(match.toLowerCase()));
          /**
           * Returns whether or not the *entire* matchArray
           * is included inside of the referenceArray
           * @param arr
           * @param target
           * @returns {*}
           */
          const checker = (arr, target) => target.every(v => arr.includes(v));
          /**
           * Set link to the correct reference if true
           */
          if (checker(referenceArray, matchArray)) {
            a.href = `/bibliography#ref-${x + 1}`
          }
        }
      });
    }
  });
}

new Vue({
  render: h => h(App),
  router,
  watch: {
    $route() {
      this.$nextTick(this.routeLoaded);
    }
  },
  data() {
    return {};
  },
  methods: {
    routeLoaded() {
      ReferenceBuilder();
    }
  },
  mounted: () => {
    ReferenceBuilder();
  }
}).$mount('#app')
