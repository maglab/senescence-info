<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('not')">Aging Is Not Wear and Tear</b-nav-item>
              <b-nav-item @click="goto('multiple')">Multiple versus Unifying Mechanisms of Aging</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
        <h2>Is Aging Genetic or Is It Wear and Tear?</h2>

        <blockquote>
          <p align="justify">Aging has been compared to the natural decay of materials and objects. In this essay, I debate the essence of the aging process and hope to demonstrate that, despite any initial appearances, human aging is not simply wear and tear. The second law of thermodynamics is not applicable to aging. Genes can regulate the aging process, even though the environment is also important.</p>

          <p><em>Keywords:</em> ageing, aging genes, biogerontology, genotype, heritability, longevity genes</p></blockquote>

        <hr width="80%" size="1">
        </div>
        <div ref="not">
        <blockquote><H2>Aging Is Not Wear and Tear</H2></blockquote>

        <p align="justify">Tooth erosion is a frequent hallmark of aging among different organisms, particularly in mammals (Finch, 1990, pp. 196-202). At a first glance, it would appear that tooth erosion, like many other age-related changes like skin aging, bone aging, etc., is a mere result of wear and tear, similar to the deterioration of materials and objects. However, to quote George Williams (Williams, 1957): "The senescence of human teeth consists not of their wearing out but of their lack of replacement when worn out." The same argument can be made of menopause and female reproductive senescence in general. In mammals, females reach reproductive senescence ultimately because of their lack of oogenesis as adults. Hence aging is not merely a consequence of wear and tear, but rather a consequence of a lack of replacement of the parts. All molecules and cells that compose our body can individually age, but it is the inefficient or lack of replacement of these building blocks that leads to aging.</P>

        <p align="justify">As <router-link to="/ageing-animals">detailed before</router-link>, the teeth of sharks also suffer from wear and tear, but they evolved a mechanism to cope with this problem: they can replace their teeth throughout life, and many other species  possess this ability. In some mammals, like rabbits and many rodents, the teeth grow continuously, as an attempt to mitigate the increased wear and tear from their food habits that involve chewing, but this is not a viable long-term solution. Long-lived mammals like elephants have more than the two sets of teeth. So while wear and tear do contribute to the erosion of individual teeth, the ultimate cause of tooth erosion is in the genetic program of animals that determines their body plan and its inherited limitations. From this perspective, aging is ultimately genetic. In fact, through genetic and tissue engineering scientists are trying to create new teeth in the gums of patients (Chai and Slavkin, 2003). Moreover, and unlike objects, higher organisms endure an extraordinary period of development in which their abilities, functions and capacity to maintain homeostasis are greatly increased. To quote George Williams again: &quot;It is indeed remarkable  that after a seemingly miraculous feat of morphogenesis a complex metazoan  should be unable to perform the much simpler task of merely maintaining what is  already formed.&quot;</P>
        <p align="justify">In summary, it is now largely recognized that, contrary to the wear and tear of inanimate  objects, aging in higher organisms is not  primarily the result of damage to irreplaceable body parts. Certainly, molecules and cells can suffer from damage akin to wear and tear. Unlike objects, however, animals   can replace most of their cells and molecules, and often have a high turnover of components exposed to environmental insults. In other words, complex biological systems are dynamic and have the ability to repair and regenerate their damaged components. Even for components that cannot be replaced, like mammalian teeth, their degeneration can be seen not just as <router-link to="/ageing-animals">mechanical senescence</router-link> but as limitations of the genetic program. I should note that there are differences in interpretation of aging changes which influence the way different researchers interpret the essence of aging; as <router-link to="/ageing-theories">discussed elsewhere</router-link>, some authors see  aging as genetic in nature while others see it as a build-up of damage  counteracted by genetically-regulated mechanisms. Nonetheless, as detailed below, it is clear now that aging has a strong genetic component and it is not merely wear and tear.</P>
        </div>
        <div ref="multiple">
          <blockquote><H2>Multiple versus Unifying Mechanisms of Aging</H2></blockquote>

        <p align="justify">Some have argued that aging has multiple origins and is a mere combination of age-related changes and diseases each timed by independent clocks (Olson, 1987). For instance, some experts have defended that aging derives from the failure of multiple maintenance mechanisms and that there is no basic aging process at all (Holliday, 1995; Peto and Doll, 1997). On the other hand, some defend that aging is genetically programmed (e.g., Longo et al., 2005). Clearly, some species age due to a precise, uniform genetic clock (Prinzinger, 2005). Semelparous species such as the salmon are such an example, as <router-link to="/ageing-animals">described before</router-link>. In these organisms, aging and death follow a very specific, well-timed program analogous to development (Austad, 2004). But <router-link to="/ageing-definition">humans show a gradual aging process</router-link>, not sudden death, so the mechanisms of aging in semelparous species may not be similar to what happens in humans.</P>

        <p align="justify">Although the MRDT is only an approximation of the rate of aging, as <router-link to="/ageing-definition">described before</router-link>, it varies widely among similar species (Table 1). Even the pace and/or onset of age-related changes can be remarkably different between similar species, as <router-link to="/ageing-animals">described elsewhere</router-link>. On the other hand, the MRDT is relatively constant among human populations, even under different environmental conditions (Finch, 1990). This robustness of the aging process suggests a strong genetic component. Independently of environmental conditions, a mouse will age 25-30 times faster than a human being. Why does a mouse age in a few years while humans take over a decade just to reach maturity? The reasons why species age at different paces must be located in the genome. Even though nutrition and exercise can make you live longer and attenuate certain age-related diseases, as <router-link to="/anti-ageing-medicine">discussed elsewhere</router-link>, you will not be able to live as along as a Galapagos tortoise because humans are genetically determined to age within a given blueprint. That is not to say that aging evolved for an evolutionary purpose, a topic <router-link to="/evolution-of-ageing">debated elsewhere</router-link>, just like cancer has a strong genetic basis but it did not evolve for a purpose. What it means is that there are genetic factors determining the pace of aging of different species. In other words, aging is programmed in our genes. Possibly, there is a molecular clock--or processes akin to a clock--regulating the aging process (de Magalhaes, 2003). This is further supported by the synchronization of life events among mammals (Finch, 1990, pp. 150-202 & 619; de Magalhaes and Church, 2005). In fact, the aging process of mammals often appears as the same process only timed at different rates.</P>

        <div align="center"><table border="0" cellspacing="5" cellpadding="2">
          <tr>
            <td><strong>Species (estimated last common ancestral)</strong></td>
            <td><strong>MRDT in years</strong></td>
            <td><strong>Observations</strong></td>
          </tr>
          <tr>
            <td><hr></td>
            <td><hr></td>
            <td><hr></td>
          </tr>
          <tr>
            <td>Humans</td>
            <td>7.6-8.9</td>
            <td></td>
          </tr>
          <tr>
            <td>Chimpanzees (5.4 Mya)</td>
            <td>Similar to humans</td>
            <td>Our closest relatives, whose onset of aging occurs considerably earlier than in humans</td>
          </tr>
          <tr>
            <td>Old world monkeys (23 Mya)</td>
            <td>3.5-4.8 (baboons), 15 (rhesus macaques)</td>
            <td>Some primates appear to age about twice as fast as humans</td>
          </tr>
          <tr>
            <td>Other non-primates like marmosets, tarsiers, and dwarf and mouse lemurs (60 Mya)</td>
            <td></td>
            <td>Age considerably faster than humans, showing signs of aging in their second decade of life</td>
          </tr>
          <tr>
            <td>Mice and rats (91 Mya)</td>
            <td>0.3</td>
            <td>Two of the fastest aging mammals</td>
          </tr>
          <tr>
            <td>Some common mammals from farm to domestic animals (92 Mya)</td>
            <td>3 (dog), 4 (horse), 1.5 (sheep)</td>
            <td></td>
          </tr>
          <tr>
            <td>Long-lived mammals such as elephants and whales (92 Mya)  </td>
            <td>8 (elephants)</td>
            <td></td>
          </tr>
          <tr>
            <td>Slowly aging reptiles (200 Mya)</td>
            <td>Often no MRDT detected</td>
            <td>Some reptiles appear <router-link to="/ageing-animals">not to age</router-link></td>
          </tr>
        </table></div>

        <blockquote>
          <p align="justify"><strong>Table 1:</strong> Last common ancestral represents estimates--often still under debate--of when a species and humans split, in millions of years ago (Mya). (See Finch, 1990; Hill et al., 2001; Bronikowski et al., 2002; de Magalhaes and Toussaint, 2002; Hedges, 2002; de Magalhaes, 2006.)</P></blockquote>

        <p align="justify">Some gerontologists that defend multifactorial causes of aging previously argued against a molecular clock regulating cellular senescence (e.g., Holliday, 1995). Now we know that indeed such a clock exists, as detailed in <router-link to="/ageing-cure">another essay</router-link>. A complex cascade of events such as cellular senescence can be regulated by a few genes such as telomerase (Bodnar et al., 1998; Wright and Shay, 2001; de Magalhaes, 2004), as <router-link to="/ageing-cure">described elsewhere</router-link>. While no doubt organismal aging is more complex and under the regulation of more genes than cellular senescence, the point is that aging is not merely random deterioration but must entail mechanisms under the regulation of the genome; whether these mechanisms actively cause aging, like certain mechanisms <router-link to="/cell-ageing">cause cell senescence</router-link>, or merely regulate systems, such as repair processes, that end up modulating aging is <router-link to="/ageing-theories">discussed elsewhere</router-link>.  Like for other continuous traits--phenotypes  that can be measured on a quantitative scale--, aging is multifactorial in the sense that it is influenced by many genes interacting  with the environment. Indeed, it has been long acknowledged that extrinsic factors are important in aging (Rowe and Kahn, 1987). What has surprised scientists in recent years is the  extent and number of genes that can influence aging, as detailed below.</P>

        <blockquote><H2>How Genes Can Regulate the Aging Process</H2></blockquote>

        <p align="justify">The greatest evidence in favor of seeing aging as having a unifying core is the way single genes can modulate the aging process. According to the <router-link to="http://genomics.senescence.info/genes/">GenAge database</router-link>, we know of >1,500 genes that when individually manipulated can alter aging and/or lifespan have been identified in <router-link to="/ageing-models">model organisms</router-link>. The plasticity of lifespans in invertebrates shows how one or a few genes can regulate the entire aging process (Lin et al., 1998; Vanfleteren and Braeckman, 1999; Benard and Hekimi, 2002; Johnson, 2002; Kenyon, 2010). For example, in worms, single gene mutations can extend lifespan by almost 10-fold (Ayyadevara et al., 2008). In mice, there are several examples of single genes that can extend longevity, in some cases by around 50%, increase the MRDT, and delay the onset of multiple age-related changes and diseases (Liang et al., 2003; de Magalhaes et al., 2005). These results clearly argue that genetic mechanisms can, up to a certain degree, regulate aging in mammals. (These genes and their mechanisms are further detailed <router-link to="causes_of_aging.html">elsewhere</router-link>.) Human studies have shown a significant degree of heritability of longevity, in particular at later ages (Hjelmborg et al., 2006). Studies in centenarians, in fact, have shown that the offspring of long-lived parents are protected against age-related diseases (for example see Atzmon et al., 2004). Genetic variants (alleles) in human homologs of genes shown to regulate aging in <router-link to="/ageing-models">model organisms</router-link> have also been associated with human longevity (Bonafe et al., 2003; Suh et al., 2008), albeit effects as marked as those observed in model organisms have not been observed in humans. In fact, and in spite of individually having a small effect, dozens of genetic variants have been associated with human longevity, as compiled in our <router-link to="http://genomics.senescence.info/longevity/">LongevityMap database</router-link> (Budovsky et al., 2013). Lastly, it has been argued that the rapid evolution of longevity in the human lineage indicates that maybe a small number of genes are able to regulate the pace of aging (Cutler, 1975).</P>

        <p align="justify">One of the most intriguing phenotypes in the biology of aging is the accelerated aging witnessed in humans and animals as a result of certain mutations. Progeroid syndromes, as they are called, are rare genetic diseases that originate a phenotype that resembles accelerated aging. The three most studied such syndromes are Werner's (WS), Cockayne, and Hutchinson-Gilford's syndrome (Martin, 1978; Martin and Oshima, 2000). Though patients with Down syndrome or trisomy 21 often also exhibit progeroid features (Martin, 1978; Raji and Rao, 1998), this disease has not gathered as much attention from the perspective of aging research as the other three syndromes named above. In particular patients with WS exhibit striking features resembling accelerated aging and show an early onset--compared to normal aging--of multiple <router-link to="/ageing-definition">age-related diseases</router-link> like diabetes, cataracts, osteoporosis, baldness, and atherosclerosis (Goto, 1997; Fig. 1). Though differences exist in terms of pathology, what most markedly distinguishes these syndromes is age of onset with Hutchinson-Gilford's and Cockayne syndrome almost exclusively affecting children while WS patients normally reach adulthood. There are also five reported cases of a neonatal form of progeria called Wiedemann-Rautenstrauch syndrome, in which babies appear to be born old, but further research is needed to confirm or dismiss such cases as accelerated aging (Rodriguez et al., 1999; Arboleda et al., 2007).</P>
        <p align="justify">George Martin suggested that WS mimics about 50% of aging characteristics: early cataracts, old skin, gray hair, etc., but not brain aging (Martin, 1982; Gosden, 1996, p. 126). This is a high proportion since it is not clear that these diseases are indeed accelerated aging. Moreover, the WS phenotype tends to affect tissues where <em>WRN</em>, the gene in which mutations result in WS (Yu et al., 1997), is expressed (Motonaga et al., 2002), so it makes sense that not all organs display signs of accelerated aging in WS. Such diseases demonstrate the hierarchical essence of aging in which a single gene can regulate a vast array of complex age-related changes. (Further details concerning the underlying molecular mechanisms of these diseases are presented in <router-link to="causes_of_aging.html">another essay</router-link>.)</P>

        <div align="center"><p><img src="WS.jpg" alt="Werner's syndrome" width="453" height="352" border="0"></p></div>

        <blockquote><p align="justify"><strong>Figure 1:</strong> A Werner syndrome patient. Source: the <router-link to="http://www.pathology.washington.edu/research/werner/">University of Washington Werner syndrome Home Page</router-link>.</P></blockquote>

        <p align="justify">One key discovery in the biology of aging was made in 1935, following earlier findings (Osborne et al., 1917), by veterinary nutritionist Clive McCay and colleagues. As <router-link to="/anti-ageing-medicine">previously mentioned</router-link>, they discovered they could slow aging in laboratory rats just by making them eat less calories while maintaining normal levels of proteins, vitamins, and minerals (McCay et al., 1935). This process became known as <router-link to="/caloric-restriction">caloric restriction</router-link> (CR) and appears to work in many animals; it has been particularly well-studied in mice. From mice, we know that CR not only increases longevity by up to 50% but it also postpones or diminishes the incidence of most age-related diseases, decreases the rate of aging (de Magalhaes et al., 2005), and delays development (reviewed in Weindruch and Walford, 1988). Doubts have for long existed on whether CR results from some technical artifact. Even so, CR remains the most impressive way to delay aging in mammals, particularly since it derives from a quite simple intervention. Like WS, CR demonstrates how it is possible to delay the aging process as a whole, suggesting that aging has a unifying clock. (The mechanisms of CR are still under debate but are further discussed in <router-link to="/ageing-theories">another essay</router-link>.)</p>

        <p align="justify">Recent large-scale gene expression studies have revealed a degree of coordination in age-related changes in gene expression; in mice different tissues age in a coordinated fashion so that a given mouse may exhibit rapid aging while another ages slowly across multiple tissues (Zahn et al., 2007). This suggest the existence of common or synchronizing mechanisms, or at least systemic factors, in the aging phenotype. On the other hand, individual organs have some unique gene expression changes with age (Zahn et al., 2007; de Magalhaes et al., 2009b). Besides, only a small percentage of genes (<5%) are expressed in all tissues (Su et al., 2004) which suggests that aging may have multiple modulators in individual tissues. For example, even if one particular type of damage (e.g., <router-link to="causes_of_aging.html">DNA damage</router-link>) is the underlying cause of aging different tissues will respond differently and be affected in different ways.</P>

        <p align="justify">Like many others (Miller, 1999), I think there is a fundamental process that gives rise to aging.  There is a uniform, unifying genetic-based core that synchronizes most <router-link to="/ageing-definition">facets of aging</router-link>. Nonetheless, it is plausible--even likely--that some age-related changes and diseases are independent of this core process; causes of disease and causes of aging can be different. For example, Machado-Joseph is a neurodegenerative genetic disease with a typical adult onset that results from a single gene defect that appears to result in a toxic form of the protein (Sequeiros et al., 1994). Similarly, many genes can influence individual age-related changes (Martin, 1982). Furthermore, there is a great variability in age-related changes among individuals, suggesting that lifestyle can influence aging to some degree (Finch, 1990, pp. 317-352). Nonetheless, it is interesting to note that, in worms, retarding aging also reduces aberrant protein aggregation as observed in  neurodegenerative diseases like Alzheimer's disease (Morley et al., 2002; Cohen et al., 2006). Even for diseases that involve a toxic gain of function, the length of time until the disease develops  often correlates with the organism's lifespan, possibly because such diseases are rarely the result of a single defect and thus can be influenced by a number of processes and additional insults (Morimoto, 2006). In conclusion, all the hundreds of genes identified to regulate aging provide strong evidence that aging has a strong genetic basis and that indeed a basic aging process exists. It is clear now that aging is not just a passive, random process. There may even be a single mechanistic clock, though this is not yet proven and considered by many to be unlikely. Nonetheless, age-related changes in individual organs may be subject to unique constraints, both environmental and genetic.</P>

        <p align="justify">Although the broad aim of <router-link to="http://pcwww.liv.ac.uk/~aging/">my work</router-link> is to unravel the aging process, I believe that focusing on these fundamental causes of aging, the genetic basis for differences in rate of aging between similar species and between individuals, is the most appropriate strategy (de Magalhaes, 2003), an idea long defended by many others (Comfort, 1968). The proportion of diseases that are independent of--or largely unaffected by--the fundamental cause(s) of aging seem low, but I cannot exclude that the impact of such fundamental mechanism(s) is overestimated. Besides, no doubt independent causes and risk factors (including environmental factors) contribute to the development of age-related diseases, even if influenced by unifying aging mechanisms. Of course, humans do not appear to have death genes like the salmon, so no doubt many genes interacting with each other are involved in aging; yet elucidating the genes and mechanisms controlling aging is paramount to develop interventions that delay aging and ultimately to <router-link to="/ageing-cure">cure aging</router-link>. Candidate mechanisms of aging are discussed <router-link to="/ageing-theories">elsewhere</router-link>.</P>

        <p align="justify">As <router-link to="/death-and-ageing-fears">mentioned before</router-link>, more resources are aimed at trying to cure age-related diseases than aging, or senescence, itself. This is partly due to the belief that aging is a complex, difficult to understand process that has eluded generations of gerontologists. Such way of thinking may lead to complacency and unambitious objectives. On the other hand, if one sees aging as caused by a unifying mechanism objectives become more ambitious; <router-link to="/caloric-restriction">CR</router-link> and recent findings in the genetics of aging prove that aging can be manipulated in <router-link to="/ageing-models">model organisms</router-link>, and the prospects of developing drugs that delay aging is excellent (de Magalhaes et al., 2012). That said, just because aging has a genetic core does not mean that curing it will be easy.  Naturally occurring genetic variants in mice (and possibly in humans too) can delay aging, but only to a certain point. Therefore, even when we identify the genetic mechanisms behind human aging, <router-link to="engineering_aging.html">curing aging</router-link> will be an Herculean task.</p>

        </div>
      </b-col>

    </b-row>


  </b-container>


</template>
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
