<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('body')">Body Size</b-nav-item>
              <b-nav-item @click="goto('brain')">Brain Size</b-nav-item>
              <b-nav-item @click="goto('metabolic')">Metabolic Rate</b-nav-item>
              <b-nav-item @click="goto('conclusion')">Conclusions</b-nav-item>
              <!--          <b-nav-item @click="goto('senescence')">Senescence.info</b-nav-item>-->
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
          <h2>The Comparative Biology of Aging</h2>

          <blockquote>
            <p align="justify">After witnessing the amazing
              <router-link to="/ageing-animals">diversity of aging phenotypes and lifespans</router-link>
              found in Nature, a key question is whether there are any trends in the way animal age. In this essay, I
              briefly examine the main factors associated with longevity in animals. Some of the trends observed can
              inform our knowledge of aging mechanisms. Recent advances in genomics and how these may contribute to
              unravel the biodiversity of aging are also discussed below.
            </p>

            <p><em>Keywords:</em> ageing, allometric scaling, allometry of life, evolutionary genomics, life span</p>
          </blockquote>

          <hr size="1" width="80%">
          <b-card>
            <blockquote class="blockquote mb-0">
              <p>"The reasons for some animals being long-lived and others short-lived, and, in a word, causes of the
                length and brevity of life call for investigation."</p>
              <footer class="blockquote-footer">
                Aristotle, 350 BC
              </footer>
            </blockquote>
          </b-card>
          <br>
          <p align="justify">Why cannot a mouse live more than 5 years while humans and whales can live over 100? Why do
            some animals appear not to suffer from aging? In the end, why do different species age at different paces?
            Many researchers have asked these questions (Austad, 1997a & 2005; Warner et al., 2002; de Magalhaes, 2003).
            So far, and even though this topic will be discussed in other essays, including at the <a
                href="genetics_of_aging.html">genetic level</a>, the answer has eluded us. Nonetheless, there some
            general trends have been reported and some factors shown to correlate with maximum lifespan.</P>

          <p align="justify">As <a href="aging_definition.html">mentioned before</a>, quantifying aging is a difficult,
            controversial task. Quantifying the rate of aging for a given species can be done through the MRDT, but
            there are some caveats: MRDT calculations are available for only a fraction of species and, as <a
                href="aging_animals.html">shown before</a>, are not perfect estimates of rate of aging. Consequently,
            most researchers use maximum lifespan (<em>tmax</em>) as an estimate of rate of aging. It has been argued
            that <em>tmax</em> represents the genetic potential for longevity of each species and is related to a
            species' rate of aging (Cutler, 1979; Allman et al., 1993; Finch and Pike, 1996). Even though there are
            potential problems in using <em>tmax</em> to estimate rate of aging, such as biases caused by different in
            sample sizes, <em>tmax</em> remains the best and most widely available measurement to quantify rate of aging
            (de Magalhaes, 2006).</P>
        </div>
        <div ref="body">
          <h2>Body Size</h2>
          <p align="justify">One factor that correlates with maximum lifespan is body size. Clearly, the typical adult
            body mass for a species correlates with <em>tmax</em> (Fig. 1). In other words, larger animals live, on
            average, longer than smaller animals, as shown and debated by a large number of authors (Calder, 1984;
            Schmidt-Nielsen, 1984; Promislow, 1993; Austad, 2005; de Magalhaes et al., 2007a). The logarithmic relation
            between <em>tmax</em> and body mass (<em>M</em>), also called the allometry of lifespan, has been the
            subject of intense scrutiny. From Figure 1, we can obtain the equation: <em>tmax</em> = 5.58<em>M</em><sup>0.146</sup>
            with <em>r</em><sup>2</sup> = 0.340. The squared Pearson correlation coefficient (<em>r</em>) suggests that
            body mass explains 58% of the variation in <em>tmax</em>. Clearly, there are many exceptions to this
            correlation. One exception are bats that live a lot longer than expected for their body size (Austad and
            Fischer, 1991; Austad, 2005; de Magalhaes et al., 2007a). Likewise, when compared to mammals, birds live
            longer than expected for their body size.</P>

          <div align="center"><p><img alt="Body mass versus maximum lifespan" border="0"
                                      height="322" src="../assets/mass_longevity.gif" width="567"></p></div>

          <blockquote><p align="justify"><strong>Figure 1:</strong> Correlation between maximum lifespan (<em>tmax</em>)
            and typical adult body mass (<em>M</em>) using all species (<em>n</em> = 1,701) present in <a
                href="http://genomics.senescence.info/species/">AnAge</a> build 8. Plotted on a logarithmic scale.</P>
          </blockquote>

          <p align="justify">At present, the simplest and most likely explanation for the allometry of lifespan is
            related to ecological constraints: smaller animals tend to be more prone to predation and thus are expected
            to have higher extrinsic mortality rates, a shorter <em>tmax</em>, and a faster aging process--as <a
                href="evolution_of_aging.html">debated ahead</a> in more detail. For example, the ability to fly gives
            most birds and bats the capacity to evade predators. Consequently, it seems that body mass is a determinant
            of ecological opportunities and habitat that impacts on mortality, which consequently influences the
            evolution of longevity and aging (Stearns, 1992). To date, there is no evidence to suggest that some unknown
            physiological affects aging in a way proportional to body mass.</p>

          <p align="justify">Experimentally, the impact of body mass on <em>tmax</em> is relevant because it can bias
            comparative studies of aging (Promislow, 1993; Speakman, 2005). Researchers trying to identify factors that
            correlate with <em>tmax</em> must eliminate the effects of body mass from their calculations, which can be
            done with certain statistical procedures. In fact, body mass appears to correlate with many life history
            events besides maximum lifespan: gestation period, time to maturity, etc. Therefore, researchers studying
            whether a given factor correlates with <em>tmax</em> or not must play close attention to the impact of body
            size. As I discuss in the context of <a href="aging_theories.html">theories of aging</a>, this has not
            always been done, however, sometimes resulting in erroneous interpretations of experimental results.</P>
        </div>
        <h2>Brain Mass</h2>
        <div ref="brain">
          <p align="justify">Brain mass also correlates with <em>tmax</em>, even after correcting for the biases caused
            by body mass. This is particularly true in primates (Allman et al., 1993). The way brain mass appears to be
            a better predictor of longevity than body mass is probably due to less variation in brain mass (Lindstedt
            and Calder, 1981). Therefore, even though it can be argued that this relationship shows the influence of the
            brain on longevity, it does not prove that the causes of aging are located in the brain. In fact, the size
            of other organs also correlate with <em>tmax</em>, in some cases more strongly than brain size (Austad and
            Fischer, 1992). Besides, ecological explanations are also possible in that maybe animals with bigger brains
            are better at escaping predators for a number of reasons.</P>
          <p align="justify">Even though bigger species tend to be longer-lived than smaller ones, it is interesting to
            note that there are a number of cases in which smaller animals within a given species live longer in
            captivity. These include mice, rats, horses, and dogs (Miller, 1999; Miller et al., 2002a; Rollo, 2002). For
            example, it is well-known that smaller breeds of dogs live longer. Interestingly, it has been argued that
            "little people" may also be longer-lived (Krzisnik et al., 1999). Therefore, it appears that while on one
            hand bigger species tend to be longer-lived, within a given species smaller individuals--in protected
            environments--tend to live longer. The possible physiological and genetic reasons for the latter phenomenon
            and implications for our understanding of aging are debated in <a href="programmed_aging.html">another
              essay</a>.</P>
        </div>
        <div ref="metabolic">
          <h2>Metabolic Rate</h2>
        <p align="justify">Another relationship long studied in gerontology is Kleiber's rule that relates maximum
          lifespan with metabolic rate (Kleiber, 1975; Gosden, 1996, pp. 103-110). (Kleiber's rule actually originates
          in a theory of aging called the "rate of living theory," which is discussed in more detail <a
              href="causes_of_aging.html">elsewhere</a>.) It can be argued, for instance, that reptilians and amphibians
          live longer because they have decreased metabolic rates since they are cold-blooded animals. Similarly, if the
          metabolic rate, the rate at which reactions occur in cells is higher in, for instance, mice than in humans
          then maybe that is why mice live less than humans (Prinzinger, 2005).</p>

        <p align="justify">Despite its intuitive nature, there is no evidence that metabolic rates influence aging in
          endotherms like birds and mammals. First of all, there are gross exceptions: bats and birds live longer than
          what would be expected for their metabolic rates. In addition, marsupials live less than eutherians and yet
          have lower body temperatures, which implies a lower metabolic rate (Austad, 1997a, pp. 88-90). Another problem
          is related to body size. Metabolic rates are often estimated by measuring oxygen consumption at rest. Clearly,
          an elephant will breath in more oxygen than a mouse, so it is necessary to correct for body mass. Failure to
          do so will result in oxygen consumption being associated with <em>tmax</em> incorrectly--i.e., due to its
          relation to body mass which in turn correlates with <em>tmax</em>. When the effect of body mass is correctly
          eliminated from metabolic rates metabolic rates do not appear to correlate with <em>tmax</em>. In fact, recent
          results suggest that metabolic rates are not associated with <em>tmax</em> in mammals or birds after
          correcting for the effects of body mass using the most state-of-the-art statistical methods (de Magalhaes et
          al., 2007a). The exact methodology of these calculations can be attacked--e.g., because to the way metabolic
          rates are corrected for body mass or even the way <em>tmax</em> records are obtained. Nonetheless, there are
          no results in which metabolic rates are correctly adjusted for body mass that show a correlation between
          metabolic rates and maximum lifespan in mammals or birds. Kleiber's rule is thus mostly discarded now.</p>

        <p align="justify">Partly related to metabolic rates, a point of debate is whether hibernating species live
          longer than non-hibernating species. So far the results are mixed, but some results suggest hibernating
          animals may live longer (see, for instance, Lyman et al., 1981; Brunet-Rossinni and Austad, 2004; Turbill et
          al., 2011), which could suggest that a period of metabolic torpor could increase lifespan. On the other hand,
          it can be argued that spending a fraction of the year in hiding, during which time mortality is presumably
          low, contributes to the observed longer lifespan in hibernating animals.</p>
        </div>
        <div ref="GD">
        <h2>Growth and Development</h2>
        <p align="justify">Growth and development are two other factors that correlate with <em>tmax</em>. Independently
          of body mass, age at sexual maturity correlates with average and maximum adult lifespan in many taxa,
          including in mammals (Charnov, 1993; Prothero, 1993; de Magalhaes et al., 2007a). In other words, the longer
          it takes for a given mammalian species to reach sexual maturity, the longer it can live afterwards. There are
          some exceptions, however, such as the male Anthechinus which is <a href="aging_animals.html">mentioned
            elsewhere</a>. One hypothesis is that there is a mechanistic link between pace of development and pace of
          aging, as discussed in <a href="programmed_aging.html">another essay</a>. It is also worth mentioning that
          each organism's body-plan is largely determined by its genetic program, and the body-plan can have a powerful
          influence on longevity, as shown by aphagy in some insects or the semelparity of species like the salmon.
          Different species could well be influenced by development in different ways: the relation (adult phase)/(total
          lifespan) shows a wide variation, which is in accordance with the several aging phenotypes found in <a
              href="aging_animals.html">nature</a>. So development and its consequential body-plan can influence aging
          to different degrees. The body-plan of mammals, for instance, may place indirect constraints on adult life but
          this could be regarded as a by-product of development. That said, age at maturity correlates strongly with
          <em>tmax</em> in mammals which hints that common regulatory mechanisms could be involved (de Magalhaes et al.,
          2007a). Though not as strongly, growth rates also correlate negatively with <em>tmax</em>; in other words,
          species that grow slower tend to live longer (de Magalhaes et al., 2007a). Likewise, growth rates correlate
          negatively with demographic rate of aging--not MRDT but a similar parameter estimated from the Weibull model
          (Ricklefs, 2010). On the other hand, for <a href="evolution_of_aging.html">evolutionary reasons</a>,
          development can be timed similarly to aging even if the relation between development and aging in mammals is
          indirect and minimal (Miller, 1999). Therefore, the causes for the relationship between developmental time and
          longevity remain a subject of debate, though it is clear that there is a strong correlation between them.</P>
        </div>
        <div ref="conclusion">
          <h2>Conclusions</h2>
        <p align="justify">Recently, the declining costs of DNA sequencing have led to increasingly more powerful
          approaches in comparative genomics (reviewed in de Magalhaes et al., 2010). Sequencing the genome of an
          organism is no longer a large-scale endeavour and the genomes of hundreds of species are currently being
          sequenced. This is exemplified in the sequencing of the long-lived naked mole-rat (Kim et al., 2011). The
          transcriptome (i.e., RNA) can also be sequenced in a cost-effective fashion to obtain, for example, measures
          of gene expression levels. Again using the naked mole-rat as an example, transcriptome sequencing revealed
          that genes associated with oxidoreduction and mitochondria were expressed at higher levels in naked mole-rats
          when compared to mice, which may contribute to the naked mole-rat's longevity (Yu et al., 2011). The
          availability of multiple mammalian genomes also opens the door to try to identify gene features associated
          with longevity. For example, methionine residues in mitochondrially encoded proteins appear to be enriched in
          short-lived species (Aledo et al., 2011) and cysteine residues appear to be depleted (Moosmann and Behl,
          2008). Comparisons between nuclear genomes across species with different lifespans can also focus on
          identifying genes with patterns of evolution associated with longevity (de Magalhaes and Church, 2007). One
          genome-wide scan for genes associated with the evolution of longevity in mammals found evidence that proteins
          involved in protein degradation, a process <a href="causes_of_aging.html">associated with aging</a>, are under
          selection in lineages where longevity increased (Li and de Magalhaes, 2013). Given the explosion of genomic
          data, these approaches are bound to become more powerful and reveal specific genes and patterns associated
          with longevity. To facilitate comparative studies of aging, including in genomics, <a
              href="http://pcwww.liv.ac.uk/~aging/">our lab</a> has developed the <a
              href="http://genomics.senescence.info/species/">AnAge database</a> which features thousands of longevity
          records for animals (reviewed in de Magalhaes et al., 2009b). As <a href="aging_cure.html">discussed
            elsewhere</a>, I think this shift from comparing physiological traits into digital biology will have a major
          impact in furthering our knowledge of mechanisms of aging.</P>
        </div>

      </b-col>
    </b-row>


  </b-container>

</template>


<script>
import Disclaimer from "./Disclaimer";
export default {
  name: 'Author',
  components: {Disclaimer},
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

