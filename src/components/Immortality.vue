<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card-body class="text-center">
            <b-card-title>Page Navigation</b-card-title>
            <b-link @click="goto('intro')">Introduction</b-link><br>
            <b-link @click="goto('availability')">Availability</b-link><br>
            <b-link @click="goto('challenges')">Challenges</b-link><br>
          </b-card-body>
        </div>
      </b-col>

      <b-col>
        <div ref="intro">
        <h2>Immortality and Society</h2>

        <b-card border-variant="light" class="text-center" >
          <p>"Aging is a barbaric phenomenon that shouldn't be tolerated in polite society."</p>
          <footer class="blockquote-footer">
            Aubrey de Grey
          </footer>

        </b-card>
        <p align="justify">In May 25, 1961, Kennedy promised to land a man on the moon even though the US did not even have a space program yet. On July 20, 1969, Neil Armstrong fulfilled that promise. I think the critical step in curing aging is to make human civilization aim in that direction. If curing aging becomes a goal of society, we will cure it. In fact, when a given technology appears imminent, we discover it. It is human instinct to take the final step. I do not think we are close to developing the technology to cure aging, but I have no doubt that <router-link to="/ageing-cure">aging is curable</router-link>. And when we are close, when there is a "Sputnik" in aging research, we will cure aging independently of its detractors and <router-link to="/physical-immortality-myths">concerns</router-link>.</P>

        <p align="justify">Although I am sure aging can be cured, when can we expect such a breakthrough? As detailed <router-link to="sens.html">elsewhere</router-link>, some advocate that aging can be cured within a few decades, though this assumes the development of a variety of technologies. It may also entail reaching what Aubrey de Grey calls &quot;anti-aging escape velocity,&quot; when successive medical advances postpone aging and extend lifespan faster than the passage of time (de Grey et al., 2002b). Discussing future developments is incredibly hard and many in the past who attempted to predict future trends failed miserably. That said, based on my <router-link to="sens.html">discussion of de Grey's ideas </router-link>and my <router-link to="/ageing-cure">views on curing aging</router-link>, my guess is that aging is unlikely to be cured within the next few decades, though I cannot completely exclude it. I do think we have a chance, albeit small, of radically increasing our life expectancy within this century and perhaps reaching the &quot;anti-aging escape velocity.&quot; Barring some global catastrophe, I am sure we will cure aging in the future, even if it takes centuries.</P>
        </div>
        <div ref="availability">
          <h2>Availability</h2>
        <p align="justify">Just like for most medical breakthroughs, a cure for aging would initially be available to only a few. Although it is difficult to foresee the costs of a hypothetical cure for aging, this is the most likely scenario in biomedical research and many other medical treatments and technologies are initially too expensive for everyone to benefit, as also discussed <router-link to="/physical-immortality-myths">elsewhere</router-link>. It is likely that given the widespread appeal of curing aging, governments would intervene to make the aging cure available to the public in general (Lucke et al., 2009). Therefore, the most likely scenario, at least judging from other medical breakthroughs like antibiotics, is that there will be a first phase where only the rich will be able to acquire it, followed by a mass dissemination of the cure for aging. It is likely that in a matter of time everyone would be able to benefit from the cure of aging, at least in industrialized nations. Moreover, the assumption that the cure for aging will emerge as a single breakthrough, like an anti-aging pill, is likely incorrect. A more realistic scenario, as it has been the case in the fight against AIDS and cancer, is for multiple incremental breakthroughs from different labs and companies to occur and gradually increase human lifespan while becoming part of standard medical treatments.</p>

        <p align="justify">There are two possibilities for curing aging: 1) curing aging at early developmental stages using germline interventions; this means newborns would be aging-free but adults would still age, making us the last mortal generation; 2) curing aging in adults via a <router-link to="engineering_aging.html">combination of therapies</router-link>, meaning newborns would still be programmed to age, despite having the possibility of avoiding aging once as adults (Stock, 2004). In addition, it is possible that we witness a combination of these two possibilities; for example, a case where aging is eliminated by germline interventions but some age-related diseases still prevail and have to be tackled by medicine in adults. Whatever the scenario, non-aging humans would soon prevail. I have no doubt that if a cure for aging is available it will be of widespread appeal. A few people, however, might still age either for personal beliefs, ignorance, or lack of resources; because these would die sooner than non-aging individuals, over decades the percentage of aging humans would gradually decrease until, barring limitations in resources, the entire human population would be composed of non-aging individuals.</p>
        </div>
        <div ref="challenges">
          <h2>Challenges</h2>
        <p align="justify">Assuming we cure aging and all age-related pathologies, including cancer, heart disease, and neurodegeneration, our average lifespan would increase considerably. The average lifespan (t<sub>0.5</sub>) of a non-aging population is given by the equation (Finch, 1990, p. 29):</p>

        <blockquote><p>t<sub>0.5</sub> = -ln 0.5/IMR</p></blockquote>

        <p align="justify">Assuming the initial mortality rate, the <router-link to="/ageing-definition">IMR</router-link>, of a typical population in an industrialized nation (0.0005/year) we have t<sub>0.5</sub> = 1,200 years. Using a lower IMR of 0.0002/year--see previous <router-link to="/ageing-definition">calculations</router-link>--gives t<sub>0.5</sub> = 3,500 years. Of course this assumes a constant IMR, which may not be the case if there are wars or pests that increase the IMR or, conversely, advances in other areas like transportation that decrease the IMR. Even so, this is at least a 15-fold increase in average lifespan. Maximum lifespan would be over 20,000 years, though again this is extraordinarily hard to predict given the radical changes in society, technology, lifestyle, etc. that may occur over a period spanning thousands of years.</p>

        <p align="justify">A society mostly composed of non-aging individuals living on average more than 1,000 years would face many challenges. For instance, prison sentences would have to be reviewed to address these issues. As argued by others (Haigh and Bagaric, 2002), a prison term of a few years makes a small deterrent for someone who expects to live over 1,000 years. Life sentences would also have to be reviewed. Could the state afford to keep criminals in prison for hundreds of years? It is doubtful and other solutions had to be devised.</p>

        <p align="justify">Similarly, retirement would have to be changed if not abolished and many adjustments would have to be made to  social institutions. For example, just like people are entitled to a certain amount of vacations every year, maybe we would also be entitled to several years of vacations every century or so. Given the foreseeable problems in healthcare due to the increasing percentage of people over 65 in industrialized nations (Schneider, 1999), curing aging would be highly beneficial from an economic perspective.</p>

        <div align="center"><p><img src="../assets/overpopulation.jpg" alt="Overpopulation" width="622" height="379" border="1"></p></div>

        <blockquote><p align="justify"><strong>Figure 1:</strong> Overpopulation is already a problem in some countries. Source: unknown.</P></blockquote>

        <p align="justify">Overpopulation is another problem one instinctively foresees if we were to cure aging (Fig. 1); indeed, population aging is an issue already in some countries with overpopulation problems. As  discussed <router-link to="/physical-immortality-myths">elsewhere</router-link>, an end of aging would lead to a faster population growth and eventually aggravate overpopulation problems in some regions of the world like in Southeast Asia. However, this process would take decades. Besides, even if curing aging does aggravate overpopulation issues, forcing people to die of age-related diseases (i.e., denying treatment) is ethically unacceptable and practically impossible (Davis, 2005). On the other hand, if we can conquer aging then no doubt this would be paralleled by advances in other areas, just like during the last century in which population growth was accompanied by many other advances that increased, for example, food production. Controlling birth rates may be an option.</p>

        <p align="justify">For me, probably the greatest problem with curing aging is not overpopulation but the cultural or intellectual stagnation of humankind. Nobel physicist Max Plank wrote:</p>

        <blockquote>"A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with the idea from the beginning."</blockquote>

        <p align="justify">Curing aging would mean the current human culture would be predominant because older persons would never retire, probably would hardly change their ideas, and would block the way to the younger, fresh ideologies. Culturally, or memetically, humankind has been evolving at an astonishing pace. If we compare human society 1,000 years ago with our society now we see an extraordinary cultural evolution in various concepts and even in ethics (e.g., slavery and racism were widely accepted not too long ago in human history). In spice of the fact that someone brilliant at his/her job would be able to continue at it forever, to have a generation of men and women without cultural progress could be a catastrophe for humankind.</p>

        <p align="justify">Maybe brain implants and other alterations of the mind might change us, but the problem remains that the persons might not be interested in this. It is highly speculative to talk about the psychology and cultural evolution of non-aging humans; perhaps if neurons divide in great numbers we might change our way of thinking more easily. Most of the cognitive and ideological changes in humans, however, happen during childhood, not adulthood. It is therefore my opinion that an end of aging in a near future would not be helpful for humankind's culture. There is still too much prejudice, ignorance and attachment in the world for this to become a generation that is eternal. An end to genetic evolution can be obviated with genetic engineering; it is the end of the cultural evolution that concerns me the most.</p>

        <p align="justify">Overall, I study aging for what can be considered <router-link to="/death-and-ageing-fears">selfish reasons</router-link>. Still, aging will be the greatest cause of suffering affecting the ones I love. My ultimate objective is to the extend healthy lifespan of humans and I hope others can profit from my work. Overall, just like last century's roughly 50% life-extension was extremely beneficial and is now cherished, I think a further life-extension of the human species, even a cure for aging, will be beneficial. No doubt it will raise new challenges and problems, but these will always be better than the ravages of aging and age-related diseases like cancer, heart disease and Alzheimer's disease.</p>

        <p align="justify">One last interesting question people have asked me is: what will I do when I--or someone else; it's not really important--cure aging? Well, apart from eradicating aging I want to improve myself in other directions in accordance with my <a to="http://jp.senescence.info/thoughts/transhumanism.html"> transhuman philosophy</a>. Perhaps then I would try to solve humankind's problems like hunger, war, and suffering. "To wipe every tear from every eye" like Abraham Lincoln said. Finally, after becoming all I could be and finding peace and harmony in my existence, I would follow my true passion: discovering the secrets of the universe.</P>
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
