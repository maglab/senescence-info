<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('roadmap')">Cure Roadmap</b-nav-item>
              <b-nav-item @click="goto('process')">Understanding the Process of Aging</b-nav-item>
              <b-nav-item @click="goto('gen')">Genomics and Digital Biology</b-nav-item>
              <b-nav-item @click="goto('fight')">Fighting Aging: The Road Ahead</b-nav-item>
              <b-nav-item @click="goto('gen')">Genomics and Digital Biology</b-nav-item>
              <b-nav-item @click="goto('brain')">The Brain and Anti-Aging</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
        <h2>Curing Aging and the Science of Immortality</h2>

        <blockquote><p align="justify"><a href="antiaging_science.html">Previously</a>, I argued how real anti-aging medicine does not yet exist. In this speculative essay, I debate how gerontology may progress with the aim of developing true anti-aging therapies that not only considerably extend lifespan and delay human aging but may eventually cure aging.</P>

          <p><em>Keywords:</em> ageing, biogerontology, biomedical gerontology, ending aging, functional genomics, immortalism, life-extension, neurodegeneration, neuroscience, pharmacogenomics, rejuvenation, translational science</p></blockquote>

        <hr width="80%" size="1">
        </div>
        <div ref="roadmap">
        <blockquote><H2>A Roadmap to Developing a Cure for Aging</H2></blockquote>

        <blockquote><p align="justify">"No problem can stand the assault of sustained thinking."</p>
          <p><i>Voltaire</i></P></blockquote>

        <p align="justify">As <a href="death_and_aging_fears.html">previously mentioned</a>, I care about understanding the aging process for human benefit, to develop biomedical interventions that can delay aging in people and improve their health. No doubt curing aging is an Herculean task. The major age-related diseases like cancer, heart disease and neurodegenerative diseases are still incurable and everyone becomes frail with age. It is possible that known aging-related genes and life-extending interventions, such as <a href="caloric_restriction.html">CR</a>, can be used to develop anti-aging therapies, as <a href="antiaging_science.html">debated</a> before. The prospects for drug discovery in the field of aging are extremely promising (reviewed in de Magalhaes et al., 2012). However, even in the best case scenario that we can develop therapies that mimic CR and the <a href="genetics_of_aging.html">effects of genes on aging</a> observed in model organisms, such therapies will not cure aging and will not radically improve our lifespan. For example, in rodents, extending lifespan is possible up to 50%, as discussed <a href="genetics_of_aging.html">elsewhere</a>, which would be extraordinary if applicable to humans but still far from an aging cure. Therefore, while we can manipulate aging in <a href="aging_models.html">model systems</a>, including mammals, there is still a long road ahead. Driven by technology, however, we may be on the verge of a biotechnology and medical revolution in which we shift from observers of Nature to architects. So what scientific approaches are more suited to cure aging? Is it even possible to cure aging?</P>

        <p align="justify">Given the <a href="aging_definition.html">complexity of aging</a>, many have questioned whether curing aging is even realistic (Warner et al., 2005; Olshansky et al., 2006; Holliday, 2009). There is no scientific reason, however, to think that aging cannot be cured (reviewed in de Magalhaes, 2014a). After all, curing aging does not violate any law of physics. There are even reasons to be optimistic, like the fact we can reverse some forms of cellular aging in vitro, including in human cells via <a href="telomeres_telomerase.html">telomerase</a>. It is also possible to rejuvenate yeast by expressing one single transcription factor (Unal et al., 2011). Importantly, some species live much longer than humans do, and some even <a href="aging_animals.html">appear not to age</a>. If Nature can solve the problem of aging, there is no reason to think we cannot do the same thing. This is akin to developing heavier than air flying machines which was in fact partly inspired by birds. As detailed <a href="future_grandparents.html">elsewhere</a>, the process of aging is surprisingly plastic and can be manipulated by <a href="genetics_of_aging.html">genetic</a> and environmental interventions. Stopping or reversing aging is no doubt much harder than slowing aging, but it is not impossible. How difficult it is exactly? I am hopeful we can find out in the coming decades.</P>

        <p align="justify">Unfortunately, the development of true <a href="antiaging_science.html">anti-aging interventions</a> is hindered by the little we know about the <a href="aging_theories.html">mechanisms of aging</a>. Others have argued that we do not need to learn how a car works in order to drive it, and so maybe we do not need to learn everything about aging in order to cure it (de Grey, 2003). As discussed <a href="sens.html">elsewhere</a>, I am less optimistic as I think a better analogy is: when a car breaks down we need to know a lot about how it works in order to fix it. As detailed below, I think we need to increase our knowledge not only of aging, but of life itself in order to decisively intervene on aging. But what exactly do we need to know?</P>

        <p align="justify">With curing aging as the ultimate goal, and based on the <a href="aging_models.html">model systems</a> available, I believe there are three general areas we must tackle:</P>

        <ol>
          <li>Increase our knowledge of the <a href="aging_theories.html">mechanisms of aging</a></li>
          <li>Develop a deeper understanding of biology, and specifically of the machines of life and their interactions (which can be seen as a broader goal of the above point)</li>
          <li>Develop new methods to modify biological processes in vivo</li>
        </ol>
        </div>
        <div ref="process">
        <blockquote><H2>Understanding the Process of Aging</H2></blockquote>

        <p align="justify">Opinions diverge, and many different strategies can be employed to study aging, yet I feel that the two most important questions in gerontology are: 1) What controls the rate of aging among mammals? This can refer to <a href="genetics_of_aging.html">genetic differences</a> between individuals (i.e., different people) but the major question to is: Why does a mouse age 30 times faster than a human being? 2) What changes in a person from age 30 to age 70 to increase the chance of dying by roughly 30-fold? Addressing these two questions would give us the basic knowledge to start thinking about therapies against the aging process as a whole. By knowing which mechanisms control the pace of age-related debilitation we will know which pathways we need to target to delay aging. Likewise, by identifying the differences between young and old persons that so markedly increase the mortality we may find mechanisms that we can target through therapies, even if discriminating between causes and effects of aging will continue to prove troublesome.</P>

        <p align="justify">At present, we know very little about both 1) and  2). The little we know about the changes people endure as they age come from studies at the level of tissues and organs, as <a href="aging_definition.html">described before</a>. That is, we know of specific age-related changes and functional declines but we do not know why those happen, what are the underlying mechanisms causing those events or how changes at different biological levels (i.e., molecular, cellular, tissue, etc.) influence each other. At a <a href="cell_aging.html">cellular</a> and <a href="genetics_of_aging.html">genetic</a> level, our knowledge of the aging process has grown in recent decades but it still limited and controversial. For example, our knowledge of the role of <a href="cell_aging.html">cellular changes in aging</a> remains a subject of controversy. Related to 1) progress has been made in <a href="aging_models.html">model organisms</a> in understanding the genetic regulators of aging within species. Hundreds of genes have been shown to modulate aging in model systems in recent years, though much work remains to understand how they interact with each other, how they work as a whole to influence the aging phenotype. To facilitate such studies <a href="http://pcwww.liv.ac.uk/~aging/">our lab</a> has developed the <a href="http://genomics.senescence.info/genes/">GenAge database</a> of aging-related genes (reviewed in de Magalhaes et al., 2009b). However, the effects of these aging-related genes are modest when compared to species differences in aging of which we know almost nothing about in terms of  mechanisms. Some evidence from <a href="comparative_biology.html">comparative genomics</a> actually suggest that genes regulating aging within species, such as the <a href="programmed_aging.html">GH/IGF-1 axis</a>, are highly evolutionary conserved and are unlikely to determine species in aging (de Magalhaes and Church, 2007). Not surprisingly, the focus of <a href="http://pcwww.liv.ac.uk/~aging/">my lab</a> has been largely on 1) and 2). For example, to help address 2) we developed the <a href="http://human.ageing-map.org/">Digital Ageing Atlas</a>. Overall, I think gerontologists must first begin to answer these questions before we can start devising more powerful anti-aging therapies (Fig. 1). </P>

        <div align="center"><p><img src="human_aging_studies.gif" alt="Studying human aging" width="791" height="458" border="0"></p></div>

        <blockquote>
          <p align="justify"><strong>Figure 1:</strong> Methodologies for studying human aging. Variation is the basis for studying any phenomena and aging is no exception. On one hand we may use a <a href="comparative_biology.html">comparative biology approach</a> to understand why different species  age at different paces (and to a lesser degree study differences in longevity between individuals of the same species). In parallel, we may study the changes people, or animals, endure while they age (de Magalhaes and Toussaint, 2004b). Facilitating such studies are a variety of  high-throughput -omics technologies (reviewed in de Magalhaes, 2009). With next-generation sequencing we can sequence hundreds of genomes as well as study the expression of thousands of genes as humans, or animals, age (reviewed in de Magalhaes et al., 2010). Notice how the area of the circles decreases as we study species progressively more distant to humans, since it is expected that species evolutionary more distant from humans are less likely to share mechanisms of aging that are relevant in humans.</P></blockquote>

        <p align="justify">One crucial aspect of research on aging, which is sometimes overlooked by researchers including myself, is that our work should deal with human aging. Aging in <a href="aging_models.html">model organisms</a> is irrelevant if it is not applicable to humans. Some mechanisms of aging identified in model organisms may be relevant to human aging while others may not, but discriminating between the two is often impossible, <a href="aging_models.html">as argued elsewhere</a>. As such, and while no doubt model systems will continue to be of paramount importance for research on aging, it is imperative we keep a skeptical mind when analyzing data from model organisms, particularly non-mammalian models (de Magalhaes and Toussaint, 2002 & 2004b; de Magalhaes, 2014b).</P>

        <p align="justify">Once we know more about which mechanisms to target for therapeutic purposes, we can consider the development of therapies that delay, stop or reverse the aging process (Fig. 2). It may be seen as speculative to consider such ambitious anti-aging therapies at present, since we know little about what interventions will be necessary, but a few ideas are given below and <a href="engineering_aging.html">elsewhere</a>. I am optimistic that as researchers address the two questions mentioned above, this will open the door to the development of true anti-aging therapies capable of radically extending lifespan. As detailed below, however, these advances must be put in context with other advances in the life sciences.</P>

        <div align="center"><p><img src="gerontology_strategy.gif" alt="Strategy for studying aging" width="550" height="409" border="0"></p></div>

        <blockquote>
          <p align="justify"><strong>Figure 2:</strong> Steps necessary to gain enough information about aging to start developing a cure. On one hand, we must identify therapeutic targets by studying why we become frailer with age and/or why we age slower than most other mammals. Then we must develop technologies capable of targeting the molecules, cells, or tissues necessary to revert aging, as detailed <a href="engineering_aging.html">ahead</a>.</P></blockquote>
        </div>
        <div ref="gen">
        <blockquote><H2>Genomics and the Promise of Digital Biology</H2></blockquote>

        <blockquote><p align="justify">". . . the general who wins a battle makes many calculations . . ."</p>
          <p><i>Sun Tzu in "The Art of War"</i></P></blockquote>

        <p align="justify">One of the major problems of biology is that it is highly unpredictable. For example, the rate of success of drugs in clinical trials is only 20% (DiMasi et al., 2010). The reason for this is that biology is intrinsically complex and thus, even with promising pre-clinical results from <a href="aging_models.html">cells and model organisms</a>, most drugs tested in humans do not behave the way scientists and clinicians predict--and often have unpredictable negative side-effects. Likewise, engineering biology, even in lower organisms, is still very limited, mostly due to our incomplete knowledge of biological systems (Heinemann and Panke, 2006). Therefore, a much deeper understanding of biology is necessary in order to develop interventions on aging as well as other diseases and processes. Fortunately, some emerging technologies may allow us to tackle the complexity of life.</P>

        <p align="justify">In a sense, the human genome has all the information we need to know about aging, and we may have the secret of immortality in the genomes of <a href="aging_animals.html">animals that appear not to age</a>. The problem is that the secret is encrypted and many facets of the genome remain a mystery. For example, at present almost half of  the ~20,000 human genes have been poorly studied. In addition, emerging layers of gene regulation, like microRNAs, remain largely unexplored. The ongoing genomic revolution and in particular the development of next-generation sequencing technologies, however, has the promise to turn biology into a mathematical problem and decipher the human genome (de Magalhaes et al., 2010). Our capacity to generate data in a genome-wide fashion is increasing at an astonishing pace, even faster than computers increase in power. This leads to the emerging paradigm of digital biology in which biological systems are treated as information systems that can be studied by a combination of bioinformatic and mathematical approaches. Large-scale consortia are surveying phenotypes at a genome-wide basis and, for example, ongoing efforts aim to develop and characterize mouse mutants of all protein-coding genes (Collins et al., 2007; Morgan et al., 2010). Other large-scale efforts, such as ENCODE which aims to identify all functional elements in the human genome (Birney et al., 2007), will no doubt further our understanding of the genome. These combined efforts hold great promise to increase our predictive power in medicine and thus lead a more precise targeting of biological systems to preserve health and fight disease.</P>

        <p align="justify">I am convinced that genomics and bioinformatics will play a major role in deciphering the process of aging and perhaps the secret of immortality (reviewed in de Magalhaes, 2014b). Of course that major hurdles will need to be overcome. The genomes of certain viruses have been sequenced years ago and we still cannot cure the diseases associated with them, as <a href="engineering_aging.html">discussed ahead</a>. Besides, the genetic differences that determine rate of aging across and within species are likely very subtle. For instance, humans and chimpanzees have about the same set of genes and it is thought that subtle differences in proteins or in transcriptional regions determine the differences between chimpanzees and humans (Carroll, 2003; Olson and Varki, 2003; de Magalhaes and Church, 2007). Consequently, subtle genetic differences are also expected to determine rate of aging, and finding these in the billions of base pairs that make up a genome will be a monumental task (de Magalhaes, 2003; de Magalhaes and Toussaint, 2004b). Eventually, however, the genome holds all answers; all we need to do is generate the data to ask the right questions (Fig. 3).</P>

        <div align="center"><p><img src="comparative_lifespan.gif" alt="Comparative genomics of aging" width="681" height="197" border="0"></p></div>

        <blockquote>
          <p align="justify"><strong>Figure 3:</strong> If we can understand the genetic factors that determine the rate of aging among similar species, like primates, then it may be possible to develop interventions that extend the human lifespan even further. To quote Leslie Orgel: "Evolution is cleverer than you are," so identifying the tricks evolution uses to extend lifespan may have biomedical applications. Figure rendered using the animal fonts by Alan Carr.</P></blockquote>
        </div>
        <div ref="fight">
        <blockquote><H2>Fighting Aging: The Road Ahead</H2></blockquote>

        <blockquote><p align="justify">"By the year 2030, we will have (1) developed a complete model of all human cell types, obviating the need for many laboratory experiments [by doing computer simulations instead]; (2) lowered the cost of doing a complete genomic sequence for an human individual to less than $1,000 each; and (3) catalogued all the genes involved in aging. Therefore, human clinical trials to extend lifespan could already be underway by this date."</p>
          <p><i>Francis Collins</i></P></blockquote>

        <p align="justify">In silico studies will be one of the major approaches for determining the causes of aging and developing interventions. Some immortalists argue that the key to solve human aging is in computers and artificial intelligence, not in biology; i.e., building computers smarter than us capable of solving the problems we cannot solve. I am not so enthusiastic but agree that solving aging will be partly based on computational biology (de Magalhaes and Toussaint, 2004b). If genomics and bioinformatics lead to the deeper understanding of biology described above then we will be able to build computer models of human cells and better develop interventions. The emerging field of systems biology, which combines modelling, large-scale -omics technologies, bioinformatics and experiments holds great promise, even if much work remains to make truly predictive models (Kitano, 2002; de Magalhaes, 2009; Cevenini et al., 2010). Ultimately, the aim is to build models of biological systems, including aging, that are accurate enough to make predictions about manipulations of components of the system (e.g., which gene target is more promising for drug development), predictions about spatio-temporal changes in the system and how these can be modulated by drugs and other interventions, etc. At present, systems and synthetic biology are still at a very early stage and restricted to very simple models and gene circuits, but when looking decades ahead the potential to model the whole aging process and identify how it can be retarded, stopped and even reversed certainly exist.</P>

        <blockquote><p align="justify">"I'll live forever or die trying."</p> <p><i>Anonymous</i></P></blockquote>

        <p align="justify">There is considerable evidence that aging is not irreversible. At the molecular and cellular level this certainly appears to be the case. In stem cells, self-renewal can be reinstated by suppression of certain factors (Wang et al., 2011). The fact a number of aging changes seem to be due to signaling pathways is encouraging because it means these may be reversible. For example, senescence in T cells appears to be regulated by signaling pathways that are reversible (Di Mitri et al., 2011). Moreover,
          forced expression in mice of a single transcription factor can induce regeneration of the thymus (Bredenkamp et al., 2014). As detailed <a href="engineering_aging.html">elsewhere</a>, with four factors it is possible to rejuvenate cells from centenarians and induce pluripotency (Lapasset et al., 2011). A single factor (Nanog) is sufficient to reverse the effects of aging on some types of stem cells (Han et al., 2012). Rejuvenating hematopoietic stem cells in mice is also possible with induced pluripotency (Wahlestedt et al., 2013), and such studies demonstrate that the aging clock can be reset (Rando and Chang, 2012). Similarly, there is evidence that systemic factors are important in aging (Conboy et al., 2005; Katsimpardi et al., 2014; Sinha et al., 2014; Villeda et al., 2014), though long-term effects (e.g., on longevity) of reversing systemic factors in mice are unknown. Transplanting young ovaries to old mice slightly extends lifespan (Mason et al., 2009). One study using blood proteomics revealed a specific factor that reverses age-related cardiac hypertrophy in mice (Loffredo et al., 2013). Factors both intrinsic and extrinsic to cells affect muscle regeneration (Carlson et al., 2008). Blood levels of a chemokine can also negatively regulate neurogenesis (Villeda et al., 2011). Taken together, these results argue that with the right information aging may be reversable in many tissues. It should also be mentioned that, for example, while signaling pathways drive senescence in T cells, these are likely triggered by upstream factors harder to control like DNA damage (Lanna et al., 2014).</P>

        <p align="justify">No doubt I am optimistic about the prospect of radically increasing our lifespan, but I am also aware of the numerous problems involved. While I think that there are <a href="genetics_of_aging.html">genetic factors</a> that make up a unifying core of human aging, it is impossible to say how many genes are involved. The fact that no human (or mammal) can avoid aging completely or even live much longer (e.g., a human living to 200 years) than average shows that curing aging cannot be achieved by changing one or a few genes. It is possible that some age-related changes are largely independent of the aging process, as <a href="genetics_of_aging.html">mentioned elsewhere</a>. Maybe some age-related pathologies are the result of late-acting genes. In fact, if late-acting deleterious genes do exist, then it is possible that there are deleterious genes affecting humans after our maximum lifespan--say, after 300 years. These could result in a disease or even in some form of mechanical senescence. I call these genes whose effects are deleterious after our present maximum lifespan post-mortem lethal genes (Magalhaes, 1999). Take as an example the diseases that result from the levels of a given defective protein passing a certain threshold, like mad cow disease or familial amyloidotic polyneuropathy, which can be the result of a long-term accumulation of a defective protein or a slow-acting infectious agent. Maybe if we increase our maximum lifespan we will also increase the number of people affected by this kind of diseases.</P>

        <p align="justify">Overall, understanding the mechanisms of aging and deciphering the genome will be monumental tasks. Still, I am confident that, thanks to emerging technologies, we will be able to elucidate all the genetic mechanisms that drive aging within my own lifetime via the combination of approaches mentioned earlier (Figs. 1 and 2). I am equally confident that an in-depth characterization of biology will be possible in the coming decades which will lead to computer models of all the players involved and their interactions which can then be used to make predictions about interventions. This is why the focus of <a href="http://pcwww.liv.ac.uk/~aging/">my lab</a> is on increasing our knowledge of aging in particular using genomic approaches. A crucial issue, however, is that even if we can predict which genes to manipulate to avoid aging we will still have to &quot;order&quot; our cells not to age. This is a key hurdle in my opinion and how to manipulate aging in vivo is the subject of my <a href="engineering_aging.html">next essay</A>.</P>

        <blockquote><p align="justify">"We, alone on earth, can revolt against the selfish replicators"</p>
          <p><i>Richard Dawkins</i></P></blockquote>
        </div>
        <div ref="brain">
        <blockquote><H2>The Importance of the Brain in Anti-Aging Research</H2></blockquote>

        <p align="justify">One topic I should emphasize is brain aging. Theoretically, the only organ that cannot be replaced is the brain; lifespan is equivalent to brainspan. Following an <a href="aging_theories.html">earlier discussion</a>, it is open to debate whether aging is caused by factors that do not have their origin in the brain. Perhaps our brain just ages because the other organs in the body can no longer support it (but see below). If we could change the body at regular intervals to keep it always young, it might happen that our brain would never age. (As a side note, there has been some work in developing techniques to transplant entire bodies. Robert White performed body transplants in animals: separating the head from the body and then &quot;attaching&quot; the head into a new body (White et al., 1996). Notice the fact that I call it "body transplants" and not "brain" or "head transplants" because size does not matter here; the brain is us and can never be changed, yet the body can, and therefore it is the body that is transplanted. Of course, body transplants, are a difficult, expensive, even far-fetched technique that at the moment remains in the realms of science fiction.)</P>

        <p align="justify">It is also possible, though speculative, that future developments in cybernetics, artificial organs and therapeutic cloning will make it possible to replace all other organs besides the brain. But even if we could develop replacement organs for our most vital organs, this appears to be a difficult, dangerous, and unpredictable approach. Also, many <a href="aging_theories.html">theories</a> center aging on post-mitotic tissues such as neurons, so the idea that we could avoid brain aging by replacing or rejuvenating the rest of the body may not be correct. One study found that centenarians, when compared to elderly non-centenarian subjects, exhibit a lower prevalence of cancer but actually a higher prevalence of cerebro-degenerative pathologies (Motta et al., 2010). For now, we must focus on trying to discover a way to stop aging in all the body, having, of course, the brain as top priority. Although intervening in the brain is harder than in most organs, in part because of the blood-brain barrier, there is some cause for optimism. For example, in mice transplanted neurons have been shown to reconstitute complex neuronal circuitry (Czupryn et al., 2011).</P>

        <p align="justify">Short-term memory loss, personality and cognitive changes with age, dementia, general decline of the nervous system and senses, and many other changes are likely to occur with aging (Craik and Salthouse, 1992; Hayflick, 1994, pp. 161-166; Zec, 1995). Until recently, it was thought that neuronal loss, due to the accumulation of damage--such as oxidative damage--was the main cause of brain aging. Nowadays, it appears that neurons can remain relatively healthy through life, except in pathological states (Morrison and Hof, 1997). Some evidence also suggests that neurons can emerge in adult brains, perhaps originating from neural stem cells (Alvarez-Buylla and Garcia-Verdugo, 2002). The idea of replicating neurons dates back many years; Joseph Altman reported replicating neurons in rats decades ago (Altman and Das, 1965), and Fernando Nottebohm reported brain rejuvenation in birds (Nottebohm, 1989). Some evidence suggests that new neurons can appear in adult monkeys, in an area of the brain called hippocampus which is used for long-term memory (Gould et al., 1999). Similar results have been reported in humans (Eriksson et al., 1998). Overall, instead of seeing brain aging as a mere consequence of the death of neurons, it appears that, even without neuronal death, biochemical and structural changes compromise neuron function (Teter and Finch, 2004). With age, what changes is the wiring, the complex network of connections between cells (Gopnik et al., 2000). It has even been suggested that brain aging is an extension of brain development (de Magalhaes and Sandberg, 2005), in line with a linkage between <a href="programmed_aging.html">development and aging</a>. The <a href="aging_theories.html">debate</a> of whether aging is a result of <a href="causes_of_aging.html">damage accumulation</a> or of <a href="programmed_aging.html">programmed events</a> also extends to brain aging, though given the relevance of the brain, understanding its mechanisms of aging are of prime importance.</p>
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
