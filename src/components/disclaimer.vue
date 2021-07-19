<template>
  <b-container >
    <b-row class="text-left">
      <b-col cols="2">
        <b-nav vertical class="w-25">
          <b-nav-item @click="goto('citation')">Conditions of Use and Citation</b-nav-item>
          <b-nav-item @click="goto('copyright')">Copyright</b-nav-item>
          <b-nav-item @click="goto('disclaimer')">Disclaimer</b-nav-item>
          <b-nav-item @click="goto('privacy')">Privacy Statement</b-nav-item>
        </b-nav>
        <!--        <TwitterFeed data-tweet-limit="3" src="https://twitter.com/jpsenescence"></TwitterFeed>-->
      </b-col>
      <b-col>
        <blockquote>
          <p align="justify">Please read below the usage conditions, suggested citation, copyright notice, disclaimer and privacy statement associated with <strong>senescence.info</strong>. By using this site it is implied you understand and agree with these conditions.</p>

        </blockquote>
        <div ref="citation">
        <blockquote><H2>Conditions of Use and Citation</H2></blockquote>

        <p align="justify"><b>senescence.info</b> is an informational, non-commercial website. You may use its contents for non-commercial purposes that classify as "fair use," such as personal, educational, and research purposes, provided you cite <b>senescence.info</b> in subsequent presentations, publications, etc. To cite <b>senescence.info</b>:</p>

        <blockquote>
          <p>de Magalhaes, J. P., 1997-2014, senescence.info: http://www.senescence.info</p></blockquote>

        <p align="justify">Although some of the essays in <b>senescence.info</b> have been published in academic journals, <b>senescence.info</b> is not a peer-reviewed website. In the case of essays based on academic papers, please cite them by quoting the journal where they were originally published rather than citing <b>senescence.info</b>. PDF reprints of most papers are available on my <a href="http://pcwww.liv.ac.uk/~aging/publications.html">lab's website</a> and <A HREF="http://jp.senescence.info/contact.php">on request</a>. For a general citation on the biology of aging please cite my primer on the biology of aging chapter which is largely based on, but more succinct than, <b>senescence.info</b>:</p>

        <blockquote>
          <p>de Magalhaes, J. P. (2011). "The Biology of Ageing: A Primer." In: <em>An Introduction to Gerontology</em>, Stuart-Hamilton, I. (ed.). Cambridge University Press, Cambridge, UK, 21-47. <a href="http://pcwww.liv.ac.uk/~aging/cup11_wnote.pdf"><img src="pdf.gif" width="18" height="18" border="0"></a></p></blockquote>

        <p align="justify">In no event shall you, the user, commercialize contents or information from <b>senescence.info</b> without prior written consent from <A HREF="http://jp.senescence.info">Jo&#227o Pedro de Magalh&#227es</a>, the copyright holder</a>.</p>

        <p align="justify">Misuse of <b>senescence.info</b> by, for example, hacking or attempting to generate spam, will result in your IP being blocked and, depending on the gravity of the infringement, may result in legal action against you.</p>

        <p align="justify">Usage of <b>senescence.info</b> implies that you have read, understood, and accepted these terms and conditions and will abide by them. Please visit this page often as terms and conditions may change without prior notice.</p>

        <p align="justify">These terms and conditions apply to <b>senescence.info</b>, the <a href="http://whoswho.senescence.info">WhosAge database</a>, and <A HREF="http://jp.senescence.info">Jo&#227o Pedro de Magalh&#227es's personal website</a>. They do not apply to the <a href="http://genomics.senescence.info">Human Ageing Genomic Resources</a>. For using the <a href="http://genomics.senescence.info">Human Ageing Genomic Resources</a>, please read <a href="http://genomics.senescence.info/legal.html">its conditions of use</a>. Some additional conditions and restrictions also apply to the <a href="http://music.senescence.info/songs.html">MP3 files</a> in <a href="http://music.senescence.info">my music section</a>, as detailed <a href="http://music.senescence.info/about.html">elsewhere</a>. Lastly, additional conditions may apply to reprints or adapted versions of my published papers, figures and pictures for which I am not the copyright owner.</p>
        </div>
        <div ref="copyright">
        <blockquote><H2>Copyright</H2></blockquote>

        <p align="justify"><b>senescence.info</b> is copyrighted and, with the exception of "fair use" noted above, may not be copied, sold, or distributed without the <a href="http://jp.senescence.info">author</a>'s prior authorization. Copyright &#169 1997 - 2015, 2018 by <A HREF="http://jp.senescence.info">Jo&#227o Pedro de Magalh&#227es</a>. All rights reserved. If you wish to use copyrighted material present in <b>senescence.info</b> for purposes that go beyond "fair use," you must obtain permission from the <a href="http://jp.senescence.info">copyright owner</a>.</p>

        <p align="justify">I take great care to ensure that the content of <b>senescence.info</b> does not infringe copyright laws--or any other laws, for that matter--nor that I take credit for the work of others. <b>senescence.info</b> does contain copyrighted material, the use of which has not always been specifically authorised by the copyright owner. Since all content within <b>senescence.info</b>, including my <a href="http://jp.senescence.info">personal website</a> and the <a href="http://genomics.senescence.info">Human Ageing Genomic Resources</a>, is non-commercial, being either personal or educational, I believe this constitutes a "fair use" of any copyrighted material. Whereas possible I cite the author or copyright owner when using the work of others. In fact, the images on the top logo were taken from <a href="http://commons.wikimedia.org">Wikimedia Commons</a>, including a photograph of Ruben's old man by David Monniaux; <strong>senescence.info</strong>'s logo is a picture of <em>Amaranthus tricolor</em> (amaranth is a symbol of immortality) by Kurt Stuber. Nonetheless, if you or your company believe you own the copyright of any part of <b>senescence.info</b> and do not wish to have your work--e.g., photographs--be part of <b>senescence.info</b> then please <A HREF="http://jp.senescence.info/contact.php">contact me</a>.</p>
</div>
        <div ref="disclaimer">
        <blockquote><H2>Disclaimer</H2></blockquote>

        <p align="justify">By using this site, its content, information, and software you agree to assume all risks associated with your use or transfer of information and/or software. You agree to hold the author, <A HREF="http://jp.senescence.info">Jo&#227o Pedro de Magalh&#227es</a>, and <b>senescence.info</b> harmless from any claims relating to the use of this site. <b>senescence.info</b> comes without warranty of any kind. I do not warrant that the site will operate correctly or that the site or its server is free of computer viruses or other harmful devices. Use at your own risk. In no event shall I be liable for any use of the <b>senescence.info</b> website or information derived thereof. I do not assume any legal liability or responsibility for the accuracy, completeness, or usefulness of any information disclosed in <b>senescence.info</b>. </p>

        <p align="justify">I am not responsible for the links presented in <b>senescence.info</b> and do not assume any responsibility for the accuracy or functioning of these. References to products or publications do not imply endorsement of that product or publication.</p>

        <p align="justify">Although I provide information regarding certain diseases such information does not serve as medical advice. If you believe you or someone you know suffer from one of such diseases you should contact a qualified physician. I accept no responsibility or liability for any loss, cost, claim or expense arising from any reliance on such content or information.</p>
        </div>

        <div ref="privacy">
        <blockquote><H2>Privacy Statement</H2></blockquote>

        <p align="justify">If you <A HREF="http://jp.senescence.info/contact.php">contact me</a>, your e-mail will not be sold or given to anyone. It will be used solely by me to reply to your e-mail or messages related to the topic of your message. If your e-mail address is publicly available, I may post it in my <a href="http://whoswho.senescence.info">WhosAge database</a>. Please <A HREF="http://jp.senescence.info/contact.php">contact me</a> if you wish to have your contact information removed.</p>

        <p align="justify">Your IP is recorded when you access <b>senescence.info</b> for security reasons and to obtain user statistics. <b>senescence.info</b> does not use cookies.</p>
        </div>
        <hr>
      </b-col>
    </b-row>


  </b-container>

</template>

<script>
export default {
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


</style>
