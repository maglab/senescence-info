<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card border-variant="light">
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
          <p align="justify"><a href="aging_definition.html">Aging</a>, or senescence, is the major cause of <a
              href="death_and_aging_fears.html">suffering, disease, and death</a> in modern times. With the worldwide
            graying of the population, we are now aging for a longer period of time than ever before. <a
                href="gerontology.html">Gerontology</a>, and its sub-field biogerontology in particular, is the science
            that studies the aging process to prevent age-related disease and degeneration, preserve health, and prolong
            human life. <strong>senescence.info</strong> aims to highlight the <a href="gerontology_tutorials.html">importance
              of research on aging</a> and give an overview of current knowledge on the <a href="gerontology.html">biology
              and genetics of aging</a>, including <a href="antiaging_science.html">anti-aging therapies</a>, <a
                href="aging_models.html">models</a> and <a href="aging_theories.html">theories of aging</a>. The most
            ambitious, even if distant, goal of gerontological research is to make aging optional, to develop a <a
                href="aging_cure.html">cure for aging</a>, and the social implications of a radical increase in human
            lifespan due to scientific breakthroughs are also <a href="immortal_society.html">discussed</a>.</P>

          <p align="justify"><strong>senescence.info</strong> is aimed at a vast audience and includes <a
              href="gerontology_tutorials.html">tutorials</a> for the non-specialist. Though of course my personal
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

              <li><p align="justify"><A href="death_and_aging_fears.html">A Vision for senescence.info</A> is an
                introduction to the problematic of aging that explains why I decided to dedicate my life to the study of
                aging.</p></li>
              <li><p align="justify"><A href="http://jp.senescence.info">Author Information</A>; for more about me.</p>
              </li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="http://pcwww.liv.ac.uk/~aging/">Integrative Genomics of Ageing Group</A>;
                  describes our lab's work.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="disclaimer.html">Disclaimer, Copyright and Citation</A>; it is boring but
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
              <li><p align="justify"><a href="future_grandparents.html">The Grandparents of Tomorrow</a> is an
                introduction essay on aging and the ongoing efforts to cure aging, originally published in <a
                    href="http://www.wfs.org/futurist.htm">The Futurist</a>.</p></li>
              <li><p align="justify"><a href="wine_chocolate_long_life.html">Here's to Wine, Chocolate and a Long
                Healthy Life</a> is another introduction essay on aging and genetics, originally published in <a
                  href="https://theconversation.com/heres-to-wine-chocolate-and-a-long-healthy-life-31587">The
                Conversation</a>.</p></li>
              <li><p align="justify"><A href="antiaging_science.html">Anti-Aging Medicine</A> presents and discusses the
                most popular life-extension and anti-aging treatments.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="caloric_restriction.html">Caloric Restriction</A> reviews and discusses
                  CR facts and products trying to mimic its effects.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="physical_immortality_myths.html">Should We Cure Aging?</A> debates several
                myths about aging and whether we should aim to cure aging.</p></li>
              <li><p align="justify"><A href="biogerontology_career.html">How to Become a Biogerontologist</A> offers
                career advice for students.</p></li>
              <li><p align="justify"><A href="books.html">Biology of Aging Books</A>; book suggestions and reviews for
                students and researchers.</p></li>
            </ul>
          </blockquote>
        </div>
        <div class="div" ref="geron">
          <h2>Gerontology Information</h2>
          <blockquote>
            <p align="justify">An overview of current research on the biology of human aging featuring key observations,
              concepts, and theories. Thanks to David Bahry, available is also a <A href="gerontology.pdf">printer-friendly
                version</A> <A href="gerontology.pdf"><img src="pdf.gif" width="18" height="18" border="0"></A> (last
              updated in August 2013).</p>
            <ul>
              <li><p align="justify"><A href="aging_definition.html">What Is Aging?</A> defines the basic concepts in
                the study of longevity and aging.</p></li>
              <li><p align="justify"><A href="aging_animals.html">Some Animals Age, Others May Not</A>; a look at the
                diverse lifespans and aging phenotypes found in nature.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="comparative_biology.html">Comparative Biology of Aging</A> presents
                  trends found in comparative studies of aging.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="evolution_of_aging.html">The Evolutionary Theory of Aging</A> debates the
                models and hypotheses put forward to explain how aging evolved.</p></li>
              <li><p align="justify"><A href="aging_models.html">Human Aging Model Systems</A> introduces and discusses
                the different model organisms used to study human aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="cell_aging.html">Cellular Senescence</A>; cellular models of aging and
                  the rationale behind them.</p></li>
              </ul>
              <blockquote>
                <ul>
                  <li><p align="justify"><A href="telomeres_telomerase.html">Telomeres and Telomerase</A> presents the
                    telomeres, their maintenance mechanisms, and their relation to human aging.</p></li>
                </ul>
              </blockquote>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="genetics_of_aging.html">Is Aging Genetic or Is It Wear and Tear?</A>
                discusses the genetic basis of human aging.</p></li>
              <li><p align="justify"><A href="aging_theories.html">Why Do We Age?</A> offers an overview of the
                predominant causal theories of aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="causes_of_aging.html">Damage-Based Theories of Aging</A> introduces and
                  discusses theories of aging based on damage accumulation.</p></li>
                <li><p align="justify"><A href="programmed_aging.html">Programmed Theories of Aging</A> introduces and
                  discusses theories of aging based on programmed events.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="aging_cure.html">Curing Aging and the Science of Immortality</A> presents
                possible approaches to retard and reverse human aging.</p></li>
            </ul>
            <blockquote>
              <ul type="circle">
                <li><p align="justify"><A href="sens.html">Strategies for Engineered Negligible Senescence</A> or SENS
                  is a proposal to cure aging which is appraised here.</p></li>
              </ul>
            </blockquote>
            <ul>
              <li><p align="justify"><A href="engineering_aging.html">Godseed</A> speculates how we will be able to
                change ourselves onto non-aging organisms.</p></li>
            </ul>
          </blockquote>
        </div>
        <div ref="genomics">
          <h2>Genomics of Aging</h2>

          <blockquote><p align="justify">I am the principal investigator of the <a
              href="http://pcwww.liv.ac.uk/~aging/">Integrative
            Genomics of Ageing Group</a> at the <a href="http://www.liv.ac.uk">University of Liverpool</a> in the UK.
            Amongst other <a href="http://pcwww.liv.ac.uk/~aging/research.html">projects</a>, we maintain the <A
                href="http://genomics.senescence.info">Human Ageing Genomic Resources</A>, a series of tools and
            databases
            aimed at understanding the genetic basis of human aging.</p>

            <ul>
              <li><p align="justify"><A href="http://genomics.senescence.info/genes/">GenAge</A> is a curated database
                of
                genes related to aging in humans and in model organisms.</p></li>
              <li><p align="justify"><a href="http://genomics.senescence.info/diet/">GenDR</a> is the first database of
                dietary restriction-associated genes.</p></li>
              <li><p align="justify"><a href="http://genomics.senescence.info/longevity/">LongevityMap</a> is the first
                database of human genetic variants associated with longevity.</p></li>
              <li><p align="justify"><a href="http://genomics.senescence.info/species/">AnAge</a> is an aging-oriented
                animal database featuring over 4,000 species.</p></li>
              <li><p align="justify"><a href="http://human.ageing-map.org/">The Digital Ageing Atlas</a> is the first
                centralized collection of aging changes and pathologies.</p></li>
            </ul>
          </blockquote>
        </div>

        <div ref="sphere">
          <h2>The Global Sphere</h2>
          <blockquote>
            <p align="justify">Cooperation and networking are keys to success.</p>
            <ul>
              <li><p align="justify"><A href="help_fight_aging.html">How to Help Fight Aging</A> offers ideas and
                suggestions on how to contribute to progress in gerontology.</p></li>
              <li><p align="justify"><A href="immortal_society.html">Immortality and Society</A> paints a picture of a
                world without aging and debates the consequences of a future cure for aging.</p></li>
              <li><p align="justify"><a href="glossary.html">Glossary</a></p></li>
              <li><p align="justify"><A href="bibliography.html">Bibliography</A>; all the roughly 1,000 references
                cited
                in <strong>senescence.info</strong>.</p></li>
              <li><p align="justify"><a href="links.html">Links on Aging</a></p></li>
              <li><p align="justify"><A href="http://whoswho.senescence.info">Who's Who in Gerontology</A> is a list of
                individuals and companies working on aging, longevity and related fields.</p></li>
              <li><p align="justify">For the latest news, findings and papers on the biology of aging:
                <div class="fb-like" data-href="https://www.facebook.com/BiologyAgingNews/" data-layout="button_count"
                     data-action="like" data-show-faces="false" data-share="false"></div>
                <a href="https://twitter.com/AgingBiology" class="twitter-follow-button" data-show-count="false">Follow
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
