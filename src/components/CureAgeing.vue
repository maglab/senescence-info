<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('1')">Aging is natural</b-nav-item>
              <b-nav-item @click="goto('2')">What is the point?</b-nav-item>
              <b-nav-item @click="goto('3')">Finite lifespan</b-nav-item>
              <b-nav-item @click="goto('4')">Why should death be better than life?</b-nav-item>
              <b-nav-item @click="goto('5')">Not everyone would benefit</b-nav-item>
              <b-nav-item @click="goto('6')">Economic disaster</b-nav-item>
              <b-nav-item @click="goto('7')">Overpopulation</b-nav-item>
              <b-nav-item @click="goto('8')">Dangers of Human Trials</b-nav-item>
              <b-nav-item @click="goto('9')">Humankind would change</b-nav-item>
              <b-nav-item @click="goto('10')">Priorities</b-nav-item>
              <b-nav-item @click="goto('11')">Ethics</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>

        <h2>Should We Cure Aging?</h2>

        <blockquote>
          <p align="justify">Aging fosters sickness and disability, increases human suffering, and makes us more likely to die. <router-link to="/death-and-ageing-fears">Previously</router-link>, I argued that curing aging must be a top priority for society, yet there are also a number of possible objections to this endeavor. Most of these are unfounded myths that can be disproved while others raise relevant social, philosophical and ethical issues. This essay draws on my own lectures, and publications (Sethe and de Magalhaes, 2013), on this subject and attempts to answer the most commonly raised questions and concerns about the work of gerontologists and a possible cure for aging.</p>

          <p align="justify"><em>Keywords:</em> ageing, anti-aging medicine, biogerontology, biomedical gerontology, eternal youth,  immortalism, life-extension, rejuvenation</p></blockquote>

        <hr width="80%" size="1">
        <div ref="1">
        <blockquote><h2>Myth #1: Aging is natural and so we should not fight it</h2></blockquote>

        <p align="justify">First of all, and contrary to popular belief, aging is not universal. A number of complex species, such as lobsters, rockfishes, and tortoises, <router-link to="/ageing-animals">do not show signs of aging</router-link>. Therefore, aging is not a prerequisite to life. Aging is neither inevitable nor universal.</p>

        <p align="justify">Secondly, humankind is, in a sense, a struggle against Nature. We have antibiotics and vaccines because we do not want to be sick, which would be the <em>natural</em> outcome in most cases. Cancer, AIDS, pneumonia, the flu and many other diseases are a part of Nature we try to fight as much as possible. Smallpox, one of the greatest killers in human history, was thankfully eliminated by modern technology. Yet some people who drive cars, take medicines, wear glasses, receive e-mail, watch television, and do not have to kill their own dinner argue that life-extension is unnatural. No doubt life-extension can be perceived as unnatural but this applies both to taking antibiotics and to fighting aging. Slowing and eventually curing aging is a technological adaptation of humans and one that, like many others before, will make us live longer, healthier, happier lives.</p>

        <p align="justify">Lastly, very few seem to oppose fighting the individual <router-link to="/ageing-definition">features of aging</router-link>. In other words, aging entails a number of pathologies, like cancer, heart disease, stroke and neurodegenerative diseases, whose cure is widely seen as desirable. Similarly, aging involves increased frailty and debilitation as well as functional declines of many types (e.g., declines in senses like audition and vision, and cognitive decline); research into how to delay and stop these is no doubt seen as positive. Therefore, it seems that fighting the individual <router-link to="/ageing-definition">components of aging</router-link> raises little opposition yet fighting them all together raises discording voices and is seen as unnatural.  As <router-link to="/genetics-of-ageing">discussed elsewhere</router-link>, targeting the aging process as a whole makes more sense than targeting age-related diseases and changes one by one (de Magalhaes, 2014a). But the end result will be the same whether we cure aging by curing it as a whole or by targeting its features one by one. And it will still be an unnatural outcome.</p>
        </div>
        <div ref="2">
        <blockquote><h2>Myth #2: What is the point of extending life if we are old?</h2></blockquote>

        <p align="justify">This is a common misconception about research on aging known as the Tithonus Error: In Greek mythology, Tithonus was a mortal who was granted immortality by Zeus but was not granted eternal youth. As a result, Tithonus became increasingly debilitated and demented as he aged. To make it clear: extending life without quality is not what I aim to do. The ultimate goal of my work and that of many biogerontologists is to preserve and extend health, well-being, and life, not age-related debilitation. We aim not just to make elderly people live longer but--by improving their health--diminish, not extend, their suffering (see de Grey et al., 2002a). In other words, what we want is to find ways to extend healthy lifespan by postponing disease and degeneration. Ultimately, we would like to find a cure for aging, an intervention that permits us to avoid aging and all pathologies associated with it, such as Alzheimer's and Parkinson's disease, heart disease and cancer. More than improving the quality of life of the elderly, we want to avoid having elderly people in the first place or at the very least minimize the suffering caused by age-related diseases.</p>

        <p align="justify">Numerous studies have shown that extending healthspan is possible in model organisms, for example via <router-link to="/caloric-restriction">caloric restriction</router-link>. There are also reasons to believe that healthy lifespan can be manipulated in humans. For example, studies have shown that the older an individual gets, the healthier he/she has been. Centenarians, for instance, are more independent and suffer from fewer ailments than normal people do (Perls, 2006). While lifestyle and environment are important, there is ample evidence that genetic factors play a key role in longevity, as <router-link to="/genetics-of-ageing">detailed elsewhere</router-link>, and in centenarians living as long as they do (Atzmon et al., 2004). Therefore, identifying and understanding the genes and pathways underlying healthy aging in humans may permit us to develop interventions, including drugs, that preserve health and extend life (de Magalhaes et al., 2012). In the long-term, though more speculative, we may be able to cure aging using a variety of biotechnology approaches, as <router-link to="/ageing-cure">discussed elsewhere</router-link>.</p>

        <p align="justify">According to <router-link to="/immortality-society">my calculations</router-link>, if we were to cure aging this would result in an average lifespan of at least 1,200 years in industrial countries. This assumes one would be forever young in body and mind. People would still die from accidents, infectious diseases, etc. After all, children and teenagers die too even though they are not yet aged.</p>
        </div>
        <div ref="3">
        <blockquote><h2>Myth #3: A finite lifespan is best enjoyed</h2></blockquote>

        <p align="justify">The ancient Greeks had an average longevity of 19 years and I am pretty sure we are happier than them. In fact, longevity increased 50% in the past century and in spite of that quality of life has clearly improved. Entertainment evolves and social adjustments occur. A cure for aging would not mean an eternal life for one could still die. It would mean an average lifespan of 1,200 years, but life would still be finite. In addition, people would always have a choice to end their lives--or avoid anti-aging treatments for that matter. I am a strong believer in personal freedom and choice and would never think of forcing an anti-aging treatment unto others. At present we do not have a choice of living past 122 years, which is the longest anyone has ever lived so far. With a cure for aging each of us would have a choice to live 100, 200, 1,000 or even more years (as I estimate <router-link to="/immortality-society">elsewhere</router-link>, maximum lifesan if we were to cure aging would be over 20,000 years).</p>
        </div>
        <div ref="4">
        <blockquote><h2>Myth #4: Why should death be better than life?</h2></blockquote>

        <p align="justify">This is actually an interesting philosophical question. Many societies, including Western societies, valor death in some circumstances--e.g., death in combat, death to save other lives, etc. Other societies are even more extreme and you can always argue that I do not know what is it like to be dead. As an <router-link to="http://jp.senescence.info/thoughts/index.html">atheist</router-link>, I do not think there is anything in death: it is merely eternal oblivion, as I mention <router-link to="/death-and-ageing-fears">elsewhere</router-link>. So clearly I favor life to death. It is true I will not feel death. But if I compare death to its opposite, I always choose life. For those who disagree suicide is always a solution--as above, I support and respect individual freedom of choice. </p>

        <p align="justify">Is curing aging against God or religion? Being <router-link to="http://jp.senescence.info/thoughts/index.html">atheist</router-link>, I am not sure I am the right person to comment on the theological aspects of research on aging, but I do think the goal of medicine, and to some extent of modern society, is to diminish suffering and improve health which I do not see how it can clash with religion.</p>
        </div>
        <div ref="5">
        <blockquote><h2>Myth #5: Not everyone would benefit from a cure for aging</h2></blockquote>

        <p align="justify">The issue of justice and equity is commonly raised when arguing against life-extension (Davis, 2004; Pijnenburg and Leget, 2007). Of course it is impossible to predict the price a fictitious cure for aging would have. From experience, we know that a number of medical breakthroughs are not immediately available to everyone. The early antibiotics were available only to an elite and a number of present technologies, such as CAT scans and heart transplants, are not available to everyone. That is not a reason for us to ban pacemakers or regenerative medicine. We do not deny heart transplants just because they are not accessible to everyone. We cannot deny health and life just because some people lack healthcare (Sethe and de Magalhaes, 2013). Besides, even if curing aging is initially expensive, with mass production one can speculate that it will eventually be available to everyone at affordable prices, at least in industrialized nations. This at least is the general trend in other medical breakthroughs of widespread appeal (Lucke et al., 2009). In this context, it is important to mention that age-related diseases are now becoming the leading causes of death in Third World countries, so aging is not a problem limited to wealthy nations. It is also important to keep in mind that curing aging will likely also be incremental rather than a single breakthrough, as discussed <router-link to="/immortality-society">elsewhere</router-link>.</p>

        <p align="justify">When Vasco da Gama and Christopher Columbus explored the world they left death and injustice on the shores of Europe. Neil Armstrong walked on the moon without world peace and Tim Berners-Lee did not wait for an end of poverty to invent the World Wide Web. Yet  the discoveries and endeavors of these men benefited their societies and arguably humankind in general. There are no ideal circumstances. Setting new limits and making new discoveries eventually improves the lives of everyone.</p>
        </div>
        <div ref="6">
        <blockquote><h2>Myth #6: Economic disaster would result with the collapse of healthcare</h2></blockquote>

        <p align="justify">No, of course not. In fact, curing aging and extending healthy lifespan would be profitable for nations. The economic value of increased longevity from   1970 to 2000 was estimated at $3.2 trillion per year for the US alone through  greater productivity and lower healthcare costs; economic benefits from future health improvements have also been estimated to be large (Murphy and Topel, 2006). Presently, the greatest burden on healthcare comes from the elderly and the trend is for expenses with old age to increase as the percentage of people over 65 years-old rises worldwide (<router-link to="http://www.un.org/esa/socdev/ageing/">UN Programme on Ageing</router-link>). If aging is not tackled, societies in the 21<sup>st</sup> will consist of a large proportion of frail, elderly people, which will result in a serious financial burden (Schneider, 1999). Therefore, curing aging would be economically sound. People would live longer but also work longer and thus be more productive. Without the declining years of old age, healthcare and the economy would benefit significantly from a cure for aging.</p>

        <p align="justify">One  book debating the economic impact of extreme life extension for those interested in further reading is:</p>

        <blockquote><p align="justify">"Coping with Methuselah: The Impact of Molecular Biology on Medicine and Society" edited by the Aaron, HJ and Schwartz, WB (2004). Brookings Institution Press, Washington.</p></blockquote>
        </div>
        <div ref="7">
        <blockquote><h2>Myth #7: Overpopulation would lead to a global catastrophe</h2></blockquote>

        <p align="justify">When thinking about life-extension it is intuitive to consider overpopulation as a major problem. In the 1970s there was a current of thought known as the <em>Malthusianism</em> that predicted major problems due to overpopulation by the year 2000. These predictions failed miserably because their proponents did not take into account technological progress made in agriculture, transportation, etc. (Trewavas, 2002). Therefore, we cannot see breakthroughs in aging research as isolated events but rather consider these in the overall evolution of human societies. The world's population increased almost four-fold in the past century, we live longer than ever before and yet today we have a life quality unparalleled in human history. Besides, many industrialized countries, like Japan and several European countries, are facing problems of underpopulation and population aging. It is also important to point out that population growth with a cure for aging should still be slower than during the "baby boom" of last century; it will take decades for the demographic consequences of a cure for aging to be significant, meaning we will have plenty of time to adapt (Sethe and de Magalhaes, 2013).</p>

        <p align="justify">Although overpopulation issues are often overrated, no doubt curing aging can lead to new challenges due to faster population growth. Overpopulation in some regions of the world, such as Southeast Asia, may be aggravated by a cure for aging. The ecological consequences of human activity and negative impact on biodiversity may be augmented if we cure aging, even assuming technological progress in other areas. But then what is the solution? Controlling birth rates, even perhaps regulating reproduction as it happens in China's &quot;one-child policy&quot;, may be necessary, though that poses other social and ethical problems. Crucially, letting people die to control overpopulation is morally repugnant (Davis, 2005). If we cure aging and overpopulation becomes a problem in some regions, then we must find other solutions besides letting people die by refusing medical treatment. Likewise, clearly some of the earth's resources are limited, but if our species is using limited resources in a non-sustainable manner then this must be addressed whether aging is cured or not.</p>

        <p align="justify">Overall, catastrophic overpopulation concerns due to a cure for aging are exaggerated. Curing aging may aggravate overpopulation issues in some regions of the world, but this will take decades and must be considered together with technological advances in other areas that are impossible to predict. Fears of overpopulation are not a valid reason to reject curing aging, or any other medical breakthrough that extends lifespan for that matter.</p>
        </div>
        <div ref="8">
        <blockquote><h2>Myth #8: Human trials of an &quot;anti-aging pill&quot; would be dangerous</h2></blockquote>

        <p align="justify">This problem occurs with any other medical breakthrough. Besides, typically for any drug or treatment, animal tests are performed first followed by human trials in a few patients. Only after the security and quality of the product being tested is assured can the company test it in a larger group of patients and then, if no problems are detected, commercialize it. Certain products can escape these regulations using a variety of legal stratagems, but that is a general problem in the biomedical and biotech industry, not specific of anti-aging research.</p>
        </div>
        <div ref="9">
        <blockquote><h2>Myth #9: Humankind as we know it would change</h2></blockquote>

        <p align="justify"><router-link to="/immortality-society">Certainly</router-link>, but that is not necessarily a negative outcome. Humankind changed considerably since the Roman Empire and yet those changes now allow us to live longer, happier lives. A cure for aging would reshape society but nothing suggests such changes would be negative for humankind. People do not exist to serve society. Society exists to serve people, to make people happier and fight solitude (e.g., see Thomas Hobbes's <em>Leviathan</em>). In the same way the world is a better place to live in due to the many changes that occurred in the past centuries, a cure for aging would make it an even better place thanks to the decrease in suffering and an increase in health. Aging consists of pain, disability, disease and death. It is not enjoyable. Although no-one can foresee the long-term consequences of a cure for aging, and there are <router-link to="/immortality-society">potential problems</router-link> such as intergenerational differences in wealth and status as well as cultural stagnation issues, society could profit. And people would certainly profit.</p>
        </div>
        <div ref="10">
        <blockquote><h2>Myth #10: We should have other priorities on earth</h2></blockquote>

        <p align="justify">Clearly, there are many problems and injustices in our world. Many nations face war, hunger, poverty, and epidemics. Yet, as mentioned in regard to the justice issue on myth #5, this does not mean industrialized nations must abandon expensive medicines. Besides, more often than not the problems of third world countries are political, not technological. For example, hunger is usually caused not by a lack of food per se but rather by the inability to deliver food due to war, anarchy, tyranny, etc. Moreover, as mentioned above on myth #5, age-related diseases are already amongst the leading causes of death in Third World countries, so aging is not just a problem of industrialized nations.</p>

        <p align="justify">Aging is the major problem we face in modern society. It is or will be the <router-link to="/death-and-ageing-fears">major cause of suffering</router-link> and pain for me and the ones I love. This holds true for most nations nowadays and that is why fighting aging must be a top priority.</p>
        </div>
        <div ref="11">
        <blockquote><h2>Myth #11: Overall, curing aging is ethically wrong</h2></blockquote>

        <p align="justify">Not so. According to the principles of bioethics, like the principle of beneficence, since curing aging would benefit people, not harm them, it is not ethically wrong. Anti-aging therapies would lead to the amelioration of the many diseases for which old age is the major susceptibility factor. On the contrary, having a cure for aging and refusing to make it available to patients would result in pain and injury, clearly in contradiction with the principle of nonmaleficence. Even if we cure aging, individuals will still be able to choose whether they wanted to age or not, in accordance with the principle of respect for autonomy. If someone wants to continue aging despite a cure for aging being available, no-one can force him or her not to age and, as mentioned above, I am a strong advocate of personal freedom. Likewise, if a cure for aging is proven safe and efficient then it should be available to all of those who wish to benefit from it.</p>

        <p align="justify">Some bioethicists, such as Leon Kass and Francis Fukuyama, argue life-extension is immoral. Of course, since longevity increased 50% in the past century, we may already be living immoral lives just for opposing bacteria and viruses when they would normally kill us if we allowed Nature to run its course. As I hope I made it clear above, curing aging is ethically the right thing to do, even if no doubt problems could emerge from it (Sethe and de Magalhaes, 2013).</p>

        <p align="justify">A number of other authors have recently argued on ethical and moral aspects of extreme life-extension (Harris, 2004; Post, 2004; Caplan, 2005; Pijnenburg and Leget, 2007; Farrelly, 2010; Gems, 2011). Apart from our own publications (Sethe and de Magalhaes, 2013), two books on the subject for those interested in further reading:</p>
        </div>
        <blockquote><p align="justify">"The Fountain of Youth: Cultural, Scientific, and Ethical Perspectives on a Biomedical Goal" edited by Post, SG and Binstock, RH (2004). Oxford University Press, New York.</p>

          <p align="justify">"The Scientific Conquest of Death: Essays on Infinite Lifespans" edited by the Immortality Institute (2004). Libros En Red, Buenos Aires. A book to which I contributed <router-link to="engineering_aging.html">a chapter</router-link>.</p></blockquote>

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
