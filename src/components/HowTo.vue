<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('study')">What and Where to Study</b-nav-item>
              <b-nav-item @click="goto('challenges')">Challenges</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
        <h2>How to Become a Biogerontologist</h2>

        <blockquote>
          <p align="justify">Biogerontologists study the biological process of aging at different levels and using different techniques and <router-link to="/ageing-models">models</router-link>. If you would like to do <router-link to="/gerontology">research on the biology of aging</router-link> and/or you are a student thinking about pursuing a career in biogerontology then this brief essay is for you.</p>

          <p align="justify"><em>Keywords:</em> age-related diseases, gerontology, gerontologists, jobs</p></blockquote>

        <hr width="80%" size="1">

        <p align="justify">By and large, biogerontologists work at research institutions, typically universities and laboratories, though some also work in the biotechnology industry--and a few <a to="http://whoswho.senescence.info/companies.php">companies research aging</a>. The vast majority of biogerontologists have a PhD (or sometimes an MD or both), so if you want to become a biogerontologist you should be prepared to go to graduate and/or medical school. While it is possible to study aging in a private company or as a staff member of a research institution, the majority of influential biogerontologists have their own research group, like <router-link to="http://pcwww.liv.ac.uk/~aging/">mine</router-link>, at a research institution. Again, you can certainly <router-link to="help_fight_aging.html">contribute to research on aging</router-link> in a variety of ways and even without making of it your main job, yet if you are serious about becoming a biogerontologist and doing independent research at the highest level then this usually implies developing an academic career. </p>

        <p align="justify">If you have an entrepreneurial spirit you could create, or help build up, a  biotech company with some focus on aging. You could then do research, usually with translation to humans as a shorter-term aim than in academia, that has commercial value. Although there are a few <router-link to="http://whoswho.senescence.info/people.php">people working on aging</router-link> who followed this path, they are a minority and I know very little about entrepreneurship so cannot offer much advice on this--but wish you good luck. As such, this essay focuses on academia.</p>

        <p align="justify">How to develop a career in science is the subject of <router-link to="http://jp.senescence.info/thoughts/science_career.html">another essay</router-link> of mine. Briefly, an academic career is highly competitive and usually entails having good grades in high school (in particular in science classes), getting a bachelor's degree with honors and later a doctoral degree (and maybe a master's degree in between, though I normally do not recommend it as top students can often enter a doctoral program without a masters), obtaining strong recommendation letters from advisors, and eventually developing a publication record, securing grants, and doing some teaching. If you are a student, you should have a counselor at your institution that can guide you through the process and there are also many resources on pursuing an academic career on the Internet.</p>
        </div>
        <div ref="study">
        <h2>What and Where to Study</h2>
        <p align="justify">One major doubt of students is which topics they should study to prepare themselves for a career in biogerontology. Because aging is a biological process I would suggest that you include biology courses in your education. With the sequencing of the human genome and recent progress in the <router-link to="http://www.senescence.info/genetics.html">genetics of aging and longevity</router-link>, I would also recommend some knowledge of genetics. Nevertheless, do not overestimate the importance of choosing the right courses and university. It does not make such a big difference because many different techniques and skills can be employed to study aging. There are physicists, physicians, engineers, biologists, geneticists, computer scientists, mathematicians, and many other different professionals studying aging right now. Therefore, my advice is for you to learn different skills, understand the <router-link to="http://www.senescence.info//gerontology">science of aging</router-link>, and focus on the area you find more exciting or more adequate to your personal situation. (As a side note, I would also recommend you develop good communication skills, both written and oral, as these are crucial not only in academia but in many other careers as well.) In the end, remember that who you are is more important than what you learn. To quote Einstein: "Creativity is more important than knowledge."</p>

        <p align="justify">Even though my opinion might be biased, I definitely think my <router-link to="http://www.senescence.info//gerontology">essays on the biology of aging</router-link> are an excellent introduction to anyone wishing to pursue a career in biogerontology. A briefer overview of gerontology is available as one of my papers (de Magalhaes, 2011). Nonetheless, I also suggest you take a look at my <router-link to="/books">book recommendations</router-link> since there may be other sources that better fit your personal taste. Lastly, there are occasional intensive courses on the biology of aging, such as the <a to="http://www.mbl.edu/education/courses/special_topics/bag.html">Molecular Biology of Aging</a> course in Woods Hole, MA, USA.</p>

        <p align="justify">As an undergraduate, I would recommend you gain some research experience. This might also help you decide whether doing research is the career for you. For example, you can do an internship in a research group, like <router-link to="http://pcwww.liv.ac.uk/~aging/">ours</router-link>, and often your mentor or counselor will help you arrange this. I should note that I am always glad to help students aspiring to develop a career in aging research so if you wish to visit our lab or even spend some time here to see what we do just <a to="http://jp.senescence.info/contact.php">let me know</a>.</p>

        <p align="justify">Once you become more familiar with research in general you will need to start reading academic papers. The main bibliographical database in the biomedical sciences is <router-link to="http://www.ncbi.nlm.nih.gov/sites/entrez?cmd=search&db=pubmed">PubMed</router-link> and you will need to become familiar with it at some point in your career, possibly in high school or the latest in college.</p>

        <p align="justify">At some point before going to graduate school, I would advise students to start identifying those researchers in the field whose work they most admire and sub-fields of particular interest. This can be done through publications, though often it is difficult for beginners to make sense of the massive archive of publications. Therefore, I would also advise you to look at the list I maintain of <a to="http://whoswho.senescence.info/people.php">researchers working on aging</a>, which includes links to the researchers' websites (if available) and links to <a to="http://www.ncbi.nlm.nih.gov/sites/entrez?cmd=search&db=pubmed">PubMed</a> that allow you to more quickly find relevant publications by each of the researchers.</p>
        </div>

        <p align="justify">Similar to the point made above about how there is no right topic to study, there is no right school or even degree. Assuming your priority is research on aging then having a PhD has advantages over having an MD since it is difficult to balance research and clinical work, but more often than not this is a personal choice and many people enjoy clinical work. Regarding the choice of countries, this is certainly influenced by the mobility of each individual but a few points may be worth considering. The US and European systems are different in regard to graduate and medical schools. For example, graduate students in the US usually take longer to receive their PhDs. Mostly because of this, and please have in mind that I am an European, I normally would not recommend for an European to get his/her PhD in the US, but like many other suggestions in this essay this is often a personal decision. It is also possible to get a PhD from an European institution but do part or even most of the work in the US. Likewise, many people carry out most of their doctoral work in Europe or in the US but then receive their PhDs from institutions in other countries, often their native countries.</p>
        <div ref="challenges">
        <h2>Challenges</h2>
        <p align="justify">Overall, working on aging has its challenges, such as the lack of adequate <router-link to="/ageing-models">models of human aging</router-link> and a lack of funding when compared to other biomedical disciplines. Salary-wise, in fact, working in academia is not the best career choice. Scientists usually do research because they love it, not because they want to become millionaires, though some scientists are also associated with industry which brings in extra income. Working in academia does have its advantages, such as schedule flexibility and creative freedom. Besides, since the field of aging is still largely mysterious with many unanswered questions, bright young minds have an extraordinary opportunity to make important contributions to science by studying aging. I hope you will be one of those minds.</p>

        <p align="justify">Please feel free to <a to="http://jp.senescence.info/contact.php">contact me</a> if you have questions not covered in this essay or need any advice.</p>
        </div>
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
