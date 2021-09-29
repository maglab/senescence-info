<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav toggleable="sm" vertical id="navbar">
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('funding')">Funding</b-nav-item>
              <b-nav-item @click="goto('support')">Public Support</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
        <h2>How to Help Fight Aging</h2>

        <blockquote>
          <p align="justify">If you are convinced of the <router-link href="/death-and-ageing-fears">importance and urgency</router-link> of research on aging, of how <router-link to="/future-grandparents">aging may be curable</router-link> one day, and how this should be <router-link to="/physical-immortality-myths">one of society's priorities</router-link>, there are many ways you can contribute. This brief essay offers advice on how you can help accelerate the pace of discovery on aging and life-extension.</p>

          <p align="justify"><em>Keywords:</em> ageing, activism, anti-aging science, biogerontology, blue skies research, blue sky science, donating, fundraising, longevity science, philanthropy, volunteer</p></blockquote>

        <hr width="80%" size="1">
        </div>
        <div ref="funding">
          <h2>Funding</h2>
        <p align="justify">Research on aging, like scientific and medical research in general, depends on having researchers with adequate funding to carry out innovative science. One obvious way to contribute to gerontology is to <router-link to="/biogerontology-career">become a researcher</router-link> or at least a professional in a research institution. I have an essay on <router-link to="/biogerontology-career">how to become a biogerontologist</router-link>, as well as another essay on <a href="http://jp.senescence.info/thoughts/science_career.html">how to become a scientist</a>, that provide guidance and advice on this topic.</p>

        <p align="justify">Even if you do not wish to have a career in science or are at an early stage of your career but wish to contribute to research, most labs welcome volunteers and interns. No matter your level of experience and skills, there are always ways in which can help. If you wish to be involved in <a href="http://pcwww.liv.ac.uk/~aging/">our lab's work</a>, even in a small way, that is always helpful and please feel free to <router-link href="http://pcwww.liv.ac.uk/~aging/contact.html">contact me</router-link>.</p>

        <p align="justify">Not everyone is cut to do research, however. Many people interested in aging that <A href="http://jp.senescence.info/contact.php">contact me</a>, in fact, already have careers in completely different areas. But even if you cannot become a researcher there are many other ways you can help. Provided you have the means, of course, another straightforward way to help is by funding research on aging via charitable donations or venture capital investments. A word on how scientific funding works may be in order...</p>

        <p align="justify">While government funding exists to support scientific research, including research on aging, this is largely inadequate. To put things in perspective, the US government spends twice more money on defence R&D than on biomedical research and its defence budget is >15x the total budget for biological and biomedical research (NIH, NSF, etc.); other countries are similar and the UK government spends >10x more on defence than on research. The problem is not only that funding is not sufficient to allow progress at a sufficient pace, but government funding is often misdirected. (And I acknowledge this having received substantial government funding to support <a href="http://pcwww.liv.ac.uk/~aging/">my lab</a>, so this is not just a case of sour grapes.) The problem with government funding is that, because of the way funding is typically allocated via <a href="http://jp.senescence.info/thoughts/peer_review.html">peer-review</a>, it is a conservative process which rewards incremental advances but discourages out-of-the-box, innovative projects. Therefore, while projects that follow-up on established paradigms, such as <router-link to="/caloric-restriction">caloric restriction</router-link>, have a chance of being funded, radical projects like those inspired by <router-link to="/sens">SENS</router-link> have no chance. (This is not to say we should cut funding from <router-link to="/caloric-restriction">caloric restriction</router-link> and provide funding for <router-link to="/sens">SENS</router-link>, but merely illustrates the point that high-risk, high-reward projects have little or no chance of receiving government funding.)</p>

        <p align="justify">Another major source of R&D funding are private companies, and important scientific advances have been driven by industry. Very few breakthroughs in the field of aging have emerged from private companies, however. One key reason is that, since companies are driven by profit, they need to invest in projects that will provide a product in the short-term. Therefore, most companies are by and large reluctant to fund projects that will take a long time to yield a return for their investment. Some <a href="http://whoswho.senescence.info/companies.php">companies indeed focus on aging</a>, but these often focus on specific short-term applications--again applications derived from <router-link to="/caloric-restriction">caloric restriction</router-link> research are one example--not normally on the long-term goal of curing aging.</p>

        <p align="justify">Given the above problems with science funding, the current situation is one in which progress is being impeded by the lack of funding (and money is very tight at the moment) and the imperfect allocation of existing resources. So if you have the means to donate to the science of aging then this is extremely valuable to researchers. A success story in this context is that of Oracle founder Larry Ellison whose <router-link href="http://www.ellisonfoundation.org/">Ellison Medical Foundation</router-link> is now a key supporter of research on aging, including of <router-link href="http://pcwww.liv.ac.uk/~aging/">my lab</router-link>. Of course few people have the wealth to create a foundation, but even small contributions to labs or initiatives related to aging research are valuable as they allow researchers to explore ideas that would not be supported by traditional funding sources. Needless to say that I would be delighted if you wished to support <a href="http://pcwww.liv.ac.uk/~aging/">my lab</a>:</p>

        <center><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="K682HP6PHF7SC">
          <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal � The safer, easier way to pay online.">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
        </form></center>
        <br>
        </div>
        <div ref="support">
          <h2>Support</h2>
        <p align="justify">Another important way you can contribute to accelerate progress in gerontology is by advocating research on aging and life-extension (and even biomedical research in general). This does not require great funds or any particular expertise, though I guess becoming familiar with <router-link to="/gerontology-tutorials">major findings in biogerontology</router-link> may help. Public support and appreciation is essential for research on aging to progress faster and for government funding and private investment to increase. Legislation aimed at hindering scientific research, for example in <router-link href="http://jp.senescence.info/thoughts/cloning.html">stem cell research</router-link>, will slow progress and must be opposed. Likewise, the potential of studying the science of aging must be understood and many of the <router-link href="/physical-immortality-myths">misconceptions surrounding it</router-link> must be put to rest. This is, in fact, one of the reasons I created <strong>senescence.info</strong>. By helping spread the message that aging is a problem that can and should be tackled, by raising awareness to the idea that aging itself can be cured, you will help move us closer to a cure of aging. "Big ideas, small steps."</p>
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
