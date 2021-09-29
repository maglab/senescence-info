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

        <h2>Gerontology Information</h2>

        <blockquote>
          <p align="justify">"Aging and death do seem to be what Nature has planned for us. But what if we have other plans?"</p>
          <p><i>Bernard Strehler</i></P></blockquote>

        <p align="justify">This section consists of a series of scientific essays on the biology of aging, also called biogerontology. They provide an overview of the science, methods, challenges and discoveries from research on aging and offer a summary of our current understanding of human aging. Although essays for the non-specialist are available <router-link to="/gerontology">elsewhere</router-link> on <strong>senescence.info</strong>, I tried to make this section generally accessible to anyone with some basic background in biology, including undergraduates. Some essays are more detailed than others, however, and there is the occasional discussion that can be quite technical. A <router-link to="/ageing-glossary">glossary</router-link> is  available to help readers. Since these essays review the most important aspects of the biology of aging, they could also be useful for researchers. (I use them myself as a reference and recommend them to my students.) These essays were also the basis of a review of mine that serves as an introduction to the biology of aging and may be useful to readers seeking a briefer overview of gerontology (de Magalhaes, 2011). A few individual essays have also served as basis for <router-link to="http://pcwww.liv.ac.uk/~aging/publications.html">my own publications</router-link> and obviously inform and are informed extensively by my papers.</p>

        <p align="justify">I start this section with some <router-link to="/ageing-definition">definitions of basic terms and concepts</router-link> and an overview of what is human aging, which I recommend that you read in order to better understand the other essays. In fact, the essays follow a logical sequence which I recommend that you follow, particularly if you are unfamiliar with the biology of aging. Of course, many readers access just one essay of interest, and cross-links between essays help readers navigate through different topics. Still, readers familiar with general observations related to the <router-link to="/ageing-models">model systems</router-link> used in aging research and the <router-link to="/ageing-genetics">genetics of aging</router-link> will find it easier to understand the entire section, so I recommend at least reading those two essays--plus the <router-link to="/ageing-definition">basic definitions</router-link>--if you are unfamiliar with the field.</p>

        <p align="justify">Some of these essays are based on my <router-link to="http://pcwww.liv.ac.uk/~aging/publications.html">academic publications</router-link>. I tend to cite my papers often for the simple reason that I am more familiar with them, but I try to provide a general perspective on various findings and theories even if I do not agree with them. Further references (about 1,000 of them) are cited in the <router-link to="/bibliography">bibliography</router-link> in case you want further details concerning the experiments described or ideas presented. Thanks to David Bahry, available is also a <router-link to="gerontology.pdf">printer-friendly version</router-link> (last updated in August 2013) of this entire section <router-link to="/gerontology.pdf"><img src="../assets/pdf.gif" width="18" height="18" border="0"></router-link>.</p>

        <hr width="80%" size="1">
        <br>

        <blockquote>

          <p align="justify"><router-link to="/ageing-definition">What Is Aging?</router-link> defines the basic concepts in the biology of aging.</p>
          <p align="justify"><router-link to="/ageing-animals">Some Animals Age, Others May Not</router-link>; a look at the diverse aging phenotypes found in nature.</p>
          <blockquote><p align="justify"><router-link to="/comparative-biology">Comparative Biology of Aging</router-link> presents trends found in comparative studies of aging.</p></blockquote>
          <p align="justify"><router-link to="/evolution-of-ageing">The Evolutionary Theory of Aging</router-link> debates the models and hypotheses put forward to explain how aging evolved.</p>
          <p align="justify"><router-link to="/ageing-models">Human Aging Model Systems</router-link> introduces and discusses the different model organisms used to study human aging.</p>
          <blockquote><p align="justify"><router-link to="/cell-ageing">Cellular Senescence</router-link>; cellular models of aging and the rationale behind them.</p>
            <blockquote><p align="justify"><router-link to="/telomeres-telomerase">Telomeres and Telomerase</router-link> presents the telomeres, their mechanisms, and their relation to human aging.</p></blockquote></blockquote>
          <p align="justify"><router-link to="/genetics-of-ageing">Is Aging Genetic or Is It Wear and Tear?</router-link> discusses the genetic basis of human aging.</p>
          <p align="justify"><router-link to="/ageing-theories">Why Do We Age?</router-link> offers an overview of the predominant causal theories of aging.</p>
          <blockquote><p align="justify"><router-link to="/causes-of-ageing">Damage-Based Theories of Aging</router-link> introduces and discusses theories of aging based on damage accumulation.</p>
            <p align="justify"><router-link to="/programmed-ageing">Programmed Theories of Aging</router-link> introduces and discusses theories of aging based on programmed events.</p></blockquote>
          <p align="justify"><router-link to="/ageing-cure">Curing Aging and the Science of Immortality</router-link> presents future strategies to delay and reverse human aging.</p>
          <blockquote><p align="justify"><router-link to="/sens">Strategies for Engineered Negligible Senescence</router-link> or SENS is a proposal to cure aging which is appraised here.</p></blockquote>
          <p align="justify"><router-link to="/engineering-ageing">Godseed</router-link> speculates how we will be able to change ourselves onto non-aging organisms.</p>

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
