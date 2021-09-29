<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
                  <b-nav toggleable="sm" vertical id="navbar">
                    <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
                    <b-nav-item @click="goto('prol')">Prologue</b-nav-item>
                    <b-nav-item @click="goto('vist')">Visitor Resources</b-nav-item>
                    <b-nav-item @click="goto('geron')">Gerontology Information</b-nav-item>
                    <b-nav-item @click="goto('genomics')">Genomics of Ageing</b-nav-item>
                    <b-nav-item @click="goto('sphere')">The Global Sphere</b-nav-item>
                  </b-nav>
        </b-card>
        </div>
      </b-col>
      <b-col>

        <b-card border-variant="light" class="text-center" >
            <p>"The knowledge that every ambition is doomed to frustration at the hands of a skeleton have never
              prevented the majority of human beings from behaving as though death were no more than an unfounded
              rumor."</p>
            <footer class="blockquote-footer">
              Aldous Huxley
            </footer>

        </b-card>



        <br>
        <div class="div" ref="intro">
          <h2>Introduction</h2>
          <p align="justify"><router-link to="/ageing-definition">Aging</router-link>, or senescence, is the major cause of <router-link 
              to="/death-and-ageing-fears">suffering, disease, and death</router-link> in modern times. With the worldwide
            graying of the population, we are now aging for a longer period of time than ever before. <router-link 
                to="/gerontology">Gerontology</router-link>, and its sub-field biogerontology in particular, is the science
            that studies the aging process to prevent age-related disease and degeneration, preserve health, and prolong
            human life. <strong>senescence.info</strong> aims to highlight the <router-link to="/gerontology-tutorials">importance
              of research on aging</router-link> and give an overview of current knowledge on the <router-link to="/gerontology">biology
              and genetics of aging</router-link>, including <router-link to="/anti-ageing-medicine">anti-aging therapies</router-link>, <router-link
                to="/ageing-models">models</router-link> and <router-link to="/ageing-theories">theories of aging</router-link>. The most
            ambitious, even if distant, goal of gerontological research is to make aging optional, to develop a <router-link 
                to="/ageing-cure">cure for aging</router-link>, and the social implications of a radical increase in human
            lifespan due to scientific breakthroughs are also <router-link to="/immortality-society">discussed</router-link>.</P>

          <p align="justify"><strong>senescence.info</strong> is aimed at a vast audience and includes <router-link 
              to="/gerontology-tutorials">tutorials</router-link> for the non-specialist. Though of course my personal
            points of view are more prevalent, I try to mention different perspectives, even if I do not agree with
            them. Although <strong>senescence.info</strong> is not peer-reviewed, it is used as a reference by
            scientists and students in the field and recognized as a major knowledge and information website on the
            aging process; as evidence of its academic standing, <strong>senescence.info</strong> has been highlighted
            in <em>Science</em> (<strong>307</strong>:187), <em>Aging Cell</em> (<strong>8</strong>:65) and <em>Nucleic
              Acids Research</em> (<strong>41</strong>:D1027).</P>
        </div>
        <div class="div" ref="prol">
          <h2>Prologue</h2>
          <blockquote>
            <p align="justify">Why I study aging, what is on offer at <strong>senescence.info</strong>, my goals for
              this website, and how best to use its resources.</p>
            <ul>

              <li><p align="justify"><router-link to="/death-and-ageing-fears">A Vision for senescence.info</router-link> is an
                introduction to the problematic of aging that explains why I decided to dedicate my life to the study of
                aging.</p></li>
              <li><p align="justify"><a  to="http://jp.senescence.info">Author Information</a>; for more about me.</p>
              </li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><a  to="http://pcwww.liv.ac.uk/~aging/">Integrative Genomics of Ageing Group</a>;
                  describes our lab's work.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="/disclaimer">Disclaimer, Copyright and Citation</router-link>; it is boring but
                please read the legal stuff prior to accessing any information.</p></li>
            </ul>
          </blockquote>
        </div>
        <div ref="vist">
          <h2>Visitor's Resources</h2>
          <blockquote>
            <p align="justify">An introduction to work done in the biology of aging, its importance, potential
              implications and career advice.</p>
            <ul>
              <li><p align="justify"><router-link to="/future-grandparents">The Grandparents of Tomorrow</router-link> is an
                introduction essay on aging and the ongoing efforts to cure aging, originally published in <a 
                    to="http://www.wfs.org/futurist.htm">The Futurist</a>.</p></li>
              <li><p align="justify"><router-link to="/wine-chocolate-long-life">Here's to Wine, Chocolate and a Long
                Healthy Life</router-link> is another introduction essay on aging and genetics, originally published in <a 
                  to="https://theconversation.com/heres-to-wine-chocolate-and-a-long-healthy-life-31587">The
                Conversation</a>.</p></li>
              <li><p align="justify"><router-link to="/anti-ageing-medicine">Anti-Aging Medicine</router-link> presents and discusses the
                most popular life-extension and anti-aging treatments.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><router-link to="/caloric-restriction">Caloric Restriction</router-link> reviews and discusses
                  CR facts and products trying to mimic its effects.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="/physical-immortality-myths">Should We Cure Aging?</router-link> debates several
                myths about aging and whether we should aim to cure aging.</p></li>
              <li><p align="justify"><router-link to="/biogerontology-career">How to Become a Biogerontologist</router-link> offers
                career advice for students.</p></li>
              <li><p align="justify"><router-link to="/books">Biology of Aging Books</router-link>; book suggestions and reviews for
                students and researchers.</p></li>
            </ul>
          </blockquote>
        </div>
        <div class="div" ref="geron">
          <h2>Gerontology Information</h2>
          <blockquote>
            <p align="justify">An overview of current research on the biology of human aging featuring key observations,
              concepts, and theories. Thanks to David Bahry, available is also a <router-link to="gerontology.pdf">printer-friendly
                version</router-link> <router-link to="gerontology.pdf"><img src="pdf.gif" width="18" height="18" border="0"></router-link> (last
              updated in August 2013).</p>
            <ul>
              <li><p align="justify"><router-link to="/ageing-definition">What Is Aging?</router-link> defines the basic concepts in
                the study of longevity and aging.</p></li>
              <li><p align="justify"><router-link to="/ageing-animals">Some Animals Age, Others May Not</router-link>; a look at the
                diverse lifespans and aging phenotypes found in nature.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><router-link to="/comparative-biology">Comparative Biology of Aging</router-link> presents
                  trends found in comparative studies of aging.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="/evolution-of-ageing">The Evolutionary Theory of Aging</router-link> debates the
                models and hypotheses put forward to explain how aging evolved.</p></li>
              <li><p align="justify"><router-link to="/ageing-models">Human Aging Model Systems</router-link> introduces and discusses
                the different model organisms used to study human aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><router-link to="/cell-ageing">Cellular Senescence</router-link>; cellular models of aging and
                  the rationale behind them.</p></li>
              </ul>
              <blockquote>
                <ul>
                  <li><p align="justify"><router-link to="/telomeres-telomerase">Telomeres and Telomerase</router-link> presents the
                    telomeres, their maintenance mechanisms, and their relation to human aging.</p></li>
                </ul>
              </blockquote>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="/genetics-of-ageing">Is Aging Genetic or Is It Wear and Tear?</router-link>
                discusses the genetic basis of human aging.</p></li>
              <li><p align="justify"><router-link to="/ageing-theories">Why Do We Age?</router-link> offers an overview of the
                predominant causal theories of aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><router-link to="causes_of_aging.html">Damage-Based Theories of Aging</router-link> introduces and
                  discusses theories of aging based on damage accumulation.</p></li>
                <li><p align="justify"><router-link to="programmed_aging.html">Programmed Theories of Aging</router-link> introduces and
                  discusses theories of aging based on programmed events.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="/ageing-cure">Curing Aging and the Science of Immortality</router-link> presents
                possible approaches to retard and reverse human aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><router-link to="sens.html">Strategies for Engineered Negligible Senescence</router-link> or SENS
                  is a proposal to cure aging which is appraised here.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><router-link to="engineering_aging.html">Godseed</router-link> speculates how we will be able to
                change ourselves onto non-aging organisms.</p></li>
            </ul>
          </blockquote>
        </div>
        <div ref="genomics">
          <h2>Genomics of Aging</h2>

          <blockquote><p align="justify">I am the principal investigator of the <a
              to="http://pcwww.liv.ac.uk/~aging/">Integrative
            Genomics of Ageing Group</a> at the <router-link to="http://www.liv.ac.uk">University of Liverpool</router-link> in the UK.
            Amongst other <a to="http://pcwww.liv.ac.uk/~aging/research.html">projects</a>, we maintain the <a
                to="http://genomics.senescence.info">Human Ageing Genomic Resources</a>, a series of tools and
            databases
            aimed at understanding the genetic basis of human aging.</p>

            <ul>
              <li><p align="justify"><a to="http://genomics.senescence.info/genes/">GenAge</a> is a curated database
                of
                genes related to aging in humans and in model organisms.</p></li>
              <li><p align="justify"><a to="http://genomics.senescence.info/diet/">GenDR</a> is the first database of
                dietary restriction-associated genes.</p></li>
              <li><p align="justify"><a to="http://genomics.senescence.info/longevity/">LongevityMap</a> is the first
                database of human genetic variants associated with longevity.</p></li>
              <li><p align="justify"><a to="http://genomics.senescence.info/species/">AnAge</a> is an aging-oriented
                animal database featuring over 4,000 species.</p></li>
              <li><p align="justify"><a to="http://human.ageing-map.org/">The Digital Ageing Atlas</a> is the first
                centralized collection of aging changes and pathologies.</p></li>
            </ul>
          </blockquote>
        </div>

        <div ref="sphere">
          <h2>The Global Sphere</h2>
          <blockquote>
            <p align="justify">Cooperation and networking are keys to success.</p>
            <ul>
              <li><p align="justify"><router-link to="help_fight_aging.html">How to Help Fight Aging</router-link> offers ideas and
                suggestions on how to contribute to progress in gerontology.</p></li>
              <li><p align="justify"><router-link to="/immortality-society">Immortality and Society</router-link> paints a picture of a
                world without aging and debates the consequences of a future cure for aging.</p></li>
              <li><p align="justify"><router-link to="glossary.html">Glossary</router-link></p></li>
              <li><p align="justify"><router-link to="bibliography.html">Bibliography</router-link>; all the roughly 1,000 references
                cited
                in <strong>senescence.info</strong>.</p></li>
              <li><p align="justify"><router-link to="/ageing-links">Links on Aging</router-link></p></li>
              <li><p align="justify"><a to="http://whoswho.senescence.info">Who's Who in Gerontology</a> is a list of
                individuals and companies working on aging, longevity and related fields.</p></li>
              <li><p align="justify">For the latest news, findings and papers on the biology of aging:
                <div class="fb-like" data-to="https://www.facebook.com/BiologyAgingNews/" data-layout="button_count"
                     data-action="like" data-show-faces="false" data-share="false"></div>
                <a to="https://twitter.com/AgingBiology" class="twitter-follow-button" data-show-count="false">Follow
                  @AgingBiology</a></li>

            </ul>
          </blockquote>
        </div>
      </b-col>
      <b-col cols="3">
        <TwitterFeed data-tweet-limit="4" src="https://twitter.com/jpsenescence"></TwitterFeed>
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
