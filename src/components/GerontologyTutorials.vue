<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav toggleable="sm" vertical id="navbar">
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>

        <h1>Visitor's Resources</h1>

        <blockquote><p align="justify">"Knowledge is the eye of desire and can become the pilot of the soul."</p><p><i>Will Durant</i></P></blockquote>

        <p align="justify">The process of aging affects not only those who are experts in this area, it affects everyone. Age-related diseases like cancer, heart disease and neurodegenerative diseases are still incurable and everyone becomes frail with age. Not surprisingly, a large proportion of people looking for information on aging are curious laymen who start to feel the weight of the years and want to fight this debilitating process, as well as many students curious by the mysteries of why we age. The primary objective of this section is to provide an introduction to the field of aging, its importance, and its potential, aimed at the non-specialist.</p>

        <p align="justify">Throughout the years I have noticed that the public is misinformed about aging and about the research conducted to understand this process. In truth, the science of aging is a difficult topic even for specialists. I hope these essays will serve to clarify the public about the work we, gerontologists, develop and its importance to society. These essays are not written in a scholarly style as they are aimed at a wide audience. One essay, previously published in <a href="http://www.wfs.org/futurist.htm">The Futurist</a>, offers <router-link to="/future-grandparents">an overview of aging research</router-link> and its potential. Another essay also previously published, this time in <a href="https://theconversation.com/heres-to-wine-chocolate-and-a-long-healthy-life-31587">The Conversation</a>, focuses on genetics and longevity. A more detailed essay focuses on <a href="/anti-ageing-medicine">anti-aging therapies</a>, such as <router-link to="/caloric-restriction">caloric restriction</router-link>, a popular but contentious topic. Noteworthy is also my <router-link to="/physical-immortality-myths">debate on whether we should cure aging</router-link> that clarifies and debunks a number of myths about life-extension and aging.</p>

        <hr width="80%" size="1">

        <blockquote>

          <p align="justify"><router-link to="/future-grandparents">The Grandparents of Tomorrow</router-link> is an introduction essay on aging and the ongoing efforts to cure aging originally published in <a href="http://www.wfs.org/futurist.htm">The Futurist</a>.</p>
          <p align="justify"><router-link to="/wine-chocolate-long-life">Here's to Wine, Chocolate and a Long Healthy Life</router-link> is another introduction essay on aging and genetics, originally published in <a href="https://theconversation.com/heres-to-wine-chocolate-and-a-long-healthy-life-31587">The Conversation</a>.</p>
          <p align="justify"><router-link to="/anti-ageing-medicine">Anti-Aging Medicine</router-link> presents and discusses the most popular anti-aging treatments.</p>
          <blockquote><p align="justify"><router-link to="/caloric-restriction">Caloric Restriction</router-link> reviews and discusses CR facts and products trying to mimic its effects.</p></blockquote>
          <p align="justify"><router-link to="/physical-immortality-myths">Should We Cure Aging?</router-link> debates several myths about aging and whether we should aim to cure aging.</p>
          <p align="justify"><router-link to="/biogerontology-career">How to Become a Biogerontologist</router-link> offers career advice for students.</p>
          <p align="justify"><router-link to="/books">Biology of Aging Books</router-link>; book suggestions and reviews for students and researchers.</p>

        </blockquote>
      </b-col>
    </b-row>
  </b-container>


</template>


<!--<script type="text/javascript">-->

<!--  export default {-->
<!--    name: 'Login',-->
<!--    data () {-->
<!--      return {-->
<!--        user: {-->
<!--          email: '',-->
<!--          password: ''-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      login: function () {-->
<!--        if (!this.user.email || !this.user.password) {-->
<!--          return 0-->
<!--        }-->
<!--  -->
<!--      }-->
<!--    },-->
<!--      goto: function(refName) {-->
<!--        var element = this.$refs[refName];-->
<!--        var top = element.offsetTop;-->

<!--      window.scrollTo(0, top);-->
<!--    }-->
<!--  }-->
<!--</script>-->
<script>
import Footer from "./AppFooter";
export default {
  components: {Footer},
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};

// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
</script>
<style>
h2 {
  padding-top: 30px;
}
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 3%;
}

</style>
