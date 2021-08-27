<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('class')">Classical Evolutionary Theories of Aging</b-nav-item>
              <b-nav-item @click="goto('life')">Life History Theory</b-nav-item>
              <b-nav-item @click="goto('empirical')">Empirical Evidence</b-nav-item>
              <b-nav-item @click="goto('unique')">Unique Evolution</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
          <h2>The Evolutionary Theory of Aging</h2>

          <blockquote>
            <p align="justify">Because aging increases an organism's vulnerability and ultimately leads to its death, as
              detailed <a href="aging_definition.html">before</a>, it is apparently in contradiction with Darwin's
              evolutionary theory. After all, how could evolution favor a process that, as happens in <a
                  href="aging_animals.html">most animals</a>, gradually increases mortality and decreases reproductive
              capacity? How could <a href="genetics_of_aging.html">genes</a> that cause aging evolve? This essay
              presents and discusses the most important evolutionary models for how aging may have evolved.</p>

            <p><em>Keywords:</em> ageing, biogerontology, evolutionary biology, genetic dustbin, genotype, immortal
              germplasm</p></blockquote>

          <hr size="1" width="80%">
        </div>
        <div ref="class">
          <blockquote><H2>Classical Evolutionary Theories of Aging</H2></blockquote>
          <b-card border-variant="light">

            <p>"Senescence has no function--it is the subversion of function."</p>
            <footer class="blockquote-footer">
              Alex Comfort
            </footer>

          </b-card>
          <br>

          <p align="justify">Although the oldest written argument on the evolution of aging is the work of Russel
            Wallace (reviewed in Rose, 1991), the problem of how aging evolved was first debated by August Weismann
            (Weismann, 1891). Weismann's initial hypothesis was that aging evolved to the advantage of the species
            (e.g., by replacing worn out individuals with younger ones), not the individual, a theory known as group
            selection. Later, Weismann dropped this concept and instead suggested that aging evolved because organisms
            that segregate germ and soma must invest additional resources to reproduce instead of maintaining the soma,
            and this renunciation of the soma results in aging. Weismann's ideas were later comprised by Thomas Kirkwood
            to become the disposable soma theory, which states that organisms must reach a balance between the resources
            they invest in soma maintenance and reproduction (Kirkwood, 1977). The disposable soma theory predicts that
            aging occurs due to the accumulation of damage during life and that multiple defensive or repair mechanisms
            contribute to aging (Kirkwood and Austad, 2000). But the two key concepts that mark the evolutionary theory
            of aging came before that.</p>

          <p align="justify">Drawing on the theories from Weismann and others, like evolutionary biologists Fisher and
            Haldane, Peter Medawar developed one of such key ideas. The basic observation is that the force of natural
            selection declines with age (Medawar, 1952). Since all organisms eventually die of diseases, accidents,
            predation, etc., genes--or gene variants called alleles--beneficial early in life are favored by natural
            selection over genes beneficial late in life. Exemplifying, imagine a species with an average longevity of 2
            years (Fig. 1). There is little evolutionary advantage in having beneficial genes at age 10 because only a
            small fraction (+/- 3%) of the population will reach that age. On the contrary, genes that are beneficial at
            age 1 will be strongly selected for by evolution. Following the same reasoning, a gene that kills organisms
            at age 20 will have little impact on organisms bearing it since very few (+/- 0.08%) will reach such
            advanced ages and therefore such gene will likely not be eliminated by natural selection. In other words,
            the greatest contribution to create a new generation comes from young, not old organisms and so the power of
            natural selection fades with age, making it possible for hazardous late-acting genes to exist (reviewed in
            Hamilton, 1966; Rose, 1991; Charlesworth, 1993 & 2000).</p>

          <div align="center"><p><img alt="Survival curve" border="0" height="284" src="../assets/survival.gif"
                                      width="522"></p></div>

          <blockquote>
            <p align="justify"><strong>Figure 1:</strong> Survival curve showing the percentage of organisms alive at a
              given age for a hypothetical population assuming a constant mortality rate across the entire
              lifespan--i.e., no aging.</P></blockquote>

          <p align="justify">Another important work was the antagonistic pleiotropy model of George Williams. Since
            natural selection is weaker at later ages, as demonstrated by Medawar, then perhaps some genes are
            beneficial at earlier ages but harmful at later ages. Such genes with opposite effects are called
            pleiotropic genes (Williams, 1957). For example, and using the population of Figure 1, a gene that increases
            survival to reproductive age or reproductive output will be favored by natural selection, even if it
            decreases the changes of dying at age, say, 10. Hence, harmful late-acting genes can remain in a population
            if they have a benefitial effect early in life--e.g., by increasing fitness at early ages or increasing
            reproductive success. One example are the costly sexual ornaments of male birds that are crucial to attract
            females, and hence pass one's genes to the next generation, but can be considered handicaps--e.g., male
            peacocks are limited in their movements which can hinder their ability to escape predators (Zahavi, 1975).
            Together with Hamilton's mathematical models (Hamilton, 1966), the above models make up the classical
            evolutionary theory of aging.</p>

          <p align="justify">Therefore, the evolutionary theory of aging proposes two models for how aging can evolve.
            One derives from Medawar's ideas in which genetic drift and mutation accumulation lead to the loss of
            late-acting beneficial genes or to the appearance of late-acting harmful genes. In Williams's model, aging
            evolves due to the pleiotropic effect of some genes that are beneficial early in life and then harmful at
            later ages. At present, both theories are widely accepted and they are not mutually exclusive (Gavrilov and
            Gavrilova, 2002). Some results conducted in <em>Drosophila</em>, a fruit fly widely <a
                href="aging_models.html">used in aging studies</a>, hint that Medawar's theory of mutation accumulation
            might be more prevalent over Williams's antagonistic pleiotropy hypothesis (Charlesworth and Hughes, 1996;
            Hughes et al., 2002), but conflicting results exit (Rose et al., 2002). </p>
        </div>
        <div ref="life">
          <blockquote><H2>Life History Theory</H2></blockquote>

          <p align="justify">The evolutionary theory of aging is actually part of a broader theoretical framework called
            life history theory. Life history studies the changes organisms undergo from conception to death, but
            focuses particularly on the schedule of reproduction and survival (Stearns, 1992; Charnov, 1993). One life
            history model useful for gerontologists is the concept of <em>r</em> and <em>K</em> selection that was
            formally proposed by Robert MacArthur and Edward Wilson (MacArthur and Wilson, 1967; Pianka, 1970; Austad,
            1997b). Even though the <em>r</em> and <em>K</em> selection model is widely recognized as a simplification,
            it can be useful to interpret certain life history events. In brief, <em>r-</em>selection is the
            density-independent component of natural selection, which in practice refers to reproductive rate, while
            <em>K-</em>selection is density dependent, referring to the biggest population resources can sustain.
            Organisms in hazardous environments will maximize reproduction and thus be <em>r</em>-selected while
            organisms in non-hazardous environments will maximize their performance under crowded conditions and thus be
            <em>K</em>-selected. Therefore, <em>r</em>-selection will favor rapid development, small body sizes, and a
            short lifespan while <em>K</em>-selection will favor delayed development, larger body sizes, and a longer
            lifespan (Austad, 1997b). For instance, humans, whales, or elephants are <em>K</em>-selected while mice and
            voles are <em>r</em>-selected. If we consider the wide range of <a href="aging_animals.html">lifespans among
              animals</a> (including mammals), as well as <a href="comparative_biology.html">factors correlating with
              longevity</a>, <em>r</em> and <em>K</em> selection provide a useful model to begin understanding such
            variation.</p>
        </div>
        <div ref="empirical">
          <blockquote><H2>Empirical Evidence For and Against the Evolutionary Theory of Aging</H2></blockquote>

          <p align="justify">The evolutionary theory of aging is supported by abundant experimental evidence (reviewed
            in Rose, 1991). In two classical experiments, researchers were able to delay aging in <em>Drosophila</em> by
            only allowing older flies to reproduce (Luckinbill and Clare, 1985; Rose, 1989 & 1991). This way, the force
            of natural selection would no longer decrease with age and, as predicted by the theory, lifespan was
            extended and aging delayed. A more recent experiment revealed that selection for longevity also affected
            reproductive effort, supporting the antagonistic pleiotropy theory (Hunt et al., 2006). Also in accordance
            with the theory, Steven Austad observed that opossums, a North American marsupial, living in a predator-free
            island reproduced later than animals of the same species on the more hazardous mainland. As determined by
            collagen elasticity, these animals appeared to age slower than the continental opossum (Austad, 1988;
            Austad, 1997a). Overall, for the majority of species studied, the classical models of Medawar and Williams
            based on the fading force of natural selection appear to explain the observations. As detailed below,
            however, there are some exceptions.</p>

          <p align="justify">One extreme example among life history strategies are animals that reproduce only once, as
            <a href="aging_animals.html">mentioned earlier</a>. Semelparous species appear to fit life history theory as
            examples of ecological adaptation to certain life history conditions. For example, if due to high extrinsic
            mortality attaining reproductive maturity is unusually difficult and not likely to be repeated more than
            once (Austad, 1997a, p. 117). Another scenario is one in which mortality is significantly lower in juveniles
            than in adults--e.g., due to different habitats or predators--and so evolution will favor organisms that
            spend most of their lifespan as juveniles. An example of the latter is <em>Dolania americana</em>, a mayfly
            with a lifespan of 2 years in which the adult stage lasts ~2 hours (McKinney and McNamara, 1991, pp.
            194-196). On the other hand, there is evidence that some cases of semelparity might be a result of group
            selection. The idea that aging evolved for a purpose goes against classical evolutionary models of aging,
            but perhaps some cases could be considered as such (reviewed in Bowles, 2000; Goldsmith, 2004; Longo et al.,
            2005). For instance, adult moths mimic the movements of the juvenile forms presumably to attract predators
            and there are a few documented cases of insects in which the offspring eats its mother (Hayflick, 1994, pp.
            26 & 215). Therefore, while evidence of group selection is largely absent for most species, such as mammals,
            we cannot dismiss it from playing a role in the evolution of aging of a subset of short-lived species.</p>

          <p align="justify">There is some experimental evidence against the evolutionary theory of aging. Although
            Medawar suggested that aging was controlled by a few, key physiological processes (Medawar, 1955), modern
            evolutionary theory of aging argues that aging is multifactorial (Rose, 1991; Kirkwood and Austad, 2000). In
            other words, the evolutionary theory of aging postulates that numerous small-effect genes, rather than a few
            strong-effect ones, are involved in aging. Hence, the way single gene knock-outs have been shown to delay
            aging in animals, which is <a href="genetics_of_aging.html">detailed elsewhere</a>, was in contradiction
            with at least some aspects of the evolutionary theory of aging (reviewed in Johnson, 2002). In addition,
            some genetic manipulations appear to delay aging while not affecting reproduction (Dillin et al., 2002;
            Marden et al., 2003; Simon et al., 2003), which also contradicts the evolutionary theory of aging. Eusocial
            animals like ants that have a single reproductive female also provide evidence against trade-offs between
            longevity and reproduction; one study even found that mating increases longevity in ant queens (Schrempf et
            al., 2005). Lastly, it was shown in guppies that animals with higher extrinsic mortality rates evolved
            earlier maturity and invested more in reproduction, as expected, but do not have an earlier onset of
            demographic or reproductive aging, which contradicts the evolutionary theory of aging (Reznick et al.,
            2004). In addition, the classical evolutionary theory of aging does not explain why aging, a phenotype that
            escaped natural selection, is so similar among mammals, as <a href="aging_animals.html">described before</a>.
          </p>

          <p align="justify">One of the most intriguing phenotypes in the biology of aging are animals that appear not
            to age, as <a href="aging_animals.html">previously discussed</a>. Studies conducted both in captivity and in
            the wild have shown that several species of fishes, amphibians, and reptiles, to name only vertebrates, fail
            to show signs of aging. Of course, these animals have only been studied for a limited amount of time. Still,
            it is surprising to find that, in a 50-year study, female Blanding's turtles increased both survivorship and
            reproductive output with age (Congdon et al., 2001). Another 38-year field study suggested that older female
            Painted turtles, when compared to younger animals, feature increased reproductive output and offspring
            quality while maintaining survivorship (Congdon et al., 2003). Classical evolutionary models of aging
            predict that all species eventually age (Hamilton, 1966). It has also been argued that since bacteria age,
            all other organisms must age (Stewart et al., 2005). This idea seems a bit counter-intuitive since it
            assumes that complex species must age if less complex species age; it seems more logical that highly complex
            species have a greater capacity to replace their components, such as cells, and hence avoid aging.
            Nonetheless, the observations clearly suggest some species may not age, which is in contradiction with the
            evolutionary theory of aging. It is also difficult to reconcile the disposable soma theory with these
            observations of increased reproduction and survival with age. Moreover, some have argued that germ cells in
            mammals could originate in somatic cell precursors (Bukovsky et al., 2005), so the soma-germ discrimination
            may be overly simplistic.</p>

          <p align="justify">In conclusion, the evolutionary theory of aging offers a theoretical framework that
            explains many--perhaps most--observations and remains a major theoretical landmark in gerontology. The
            theory offers clues as to the evolutionary mechanisms and the events leading to the evolution of aging, yet
            it does not offer a complete picture on the evolution of aging across different species. Moreover, the
            evolutionary theory of aging can be harmful by imposing limitations on aging studies (Gavrilov and
            Gavrilova, 2002). As it stands, the evolutionary theory of aging cannot be safely used to make predictions
            on the biology of aging (Le Bourg, 2001). Evolutionary theories of aging are not predictive, they are
            descriptive. For instance, it has been argued that non-aging animals, especially those that increase size
            and fertility with age, may be favored by natural selection, thus contradicting the classical evolutionary
            theory of aging (Vaupel et al., 2004). In species with a high infant mortality and long generation times, an
            adult animal is precious and worth preserving; if reproductive output increases with age, natural selection
            will favor preservation rather than immediate reproduction. The impact of intergenerational transfers--e.g.,
            nurturing--has also been suggested as an important factor that must be taken into consideration (Lee, 2003).
            Therefore, new evolutionary models of aging continue to be proposed and the evolutionary theory of aging
            will certainly continue to evolve. Besides, a major open question concerns the precise genetic mechanisms
            and specific genes underlying the evolution of aging and species differences in aging, as discussed <a
                href="comparative_biology.html">elsewhere</a>.</p>
        </div>
        <div ref="unique">
          <blockquote><H2>The Unique Evolution of Mammalian Aging</H2></blockquote>

          <p align="justify">Since humans are mammals, of special interest is the evolution of mammalian aging. As <a
              href="aging_animals.html">mentioned before</a>, the aging phenotype of mammals has some common features
            that may be a result of unique evolutionary events. What follows is a particular model that aims to explain
            the evolution of aging in mammals based on the classical evolutionary models of aging.</p>

          <div align="center"><p><img alt="Vertebrate evolution" border="0" height="305"
                                      src="../assets/vertebrates.jpg" width="704"></p></div>

          <blockquote><p align="justify"><strong>Figure 2:</strong> Overview of the evolution of mammals and
            closely-related taxa. Lines are not to scale. (Adapted from Hedges, 2002; Maddison and Schulz, 2004.) Images
            source: green tree frog (Jane Rohling), Western painted turtle (Gary Stolz), ground squirrel (John and Karen
            Hollingsworth), humpback whale (Robin Hunter), cheetah (Gary Stolz), <a href="http://www.fws.gov">U.S. Fish
              and Wildlife Service</a>.</P></blockquote>

          <p align="justify">Mammals evolved from reptiles (Fig. 2), a taxon with many apparently non-aging species
            (e.g., Congdon et al., 2001 & 2003). On the contrary, and as <a href="aging_animals.html">described
              before</a>, all known mammals age. In fact, the intensity and incidence of aging appears to be higher in
            mammals than in reptiles. This is surprising since mammals can be long-lived. The long lifespan of mammals
            also suggests the incidence of aging in mammals is not an accident, as proved by the number of old mammals
            that can be found in the wild (Nesse, 1988; Spencer and Promislow, 2002a; Nussey et al., 2013); in
            particular among long-lived mammals aging does limit somewhat the natural lives of animals (Turbill and Ruf,
            2010). Moreover, a careful analysis of the aging phenotype of mammals and reptiles reveals an extraordinary
            contrast (Table 1). For example, reproductive senescence, in the form of no oocyte regeneration, is thought
            to occur in all studied mammals, but not in reptiles. Continuous tooth development is another common feature
            of reptiles absent from nearly all mammals. Therefore, some authors have found it bizarre that all studied
            mammals feature aging when more primitive species such as fishes and reptiles appear to avoid it (Hayflick,
            1994, p. 23). Others too have wondered why some mammals can be found senescent in the wild (Finch, 1990).
          </p>

          <div align="center">
            <table border="0" cellpadding="2" cellspacing="5">
              <tr>
                <td><strong>Mammals</strong></td>
                <td><strong>Reptiles</strong></td>
              </tr>
              <tr>
                <td>Increase in mortality with age</td>
                <td>No increase in mortality with age</td>
              </tr>
              <tr>
                <td>No oocyte regeneration</td>
                <td>Oocyte regeneration</td>
              </tr>
              <tr>
                <td>Limited tissue regeneration</td>
                <td>Limb regeneration</td>
              </tr>
              <tr>
                <td>Two sets of teeth</td>
                <td>Continuous tooth replacement</td>
              </tr>
            </table>
          </div>

          <blockquote><p align="justify"><strong>Table 1:</strong> General observations of the aging phenotype across
            the <em>Mammalia</em> and <em>Reptilia</em> classes (de Magalhaes and Toussaint, 2002).</P></blockquote>

          <p align="justify">One hypothesis is that the evolution aging in mammals is a unique event shaped by
            <em>r</em>-selection during the dinosaur's rule. During the first two thirds of mammalian history, when the
            dinosaurs and large reptilians ruled the earth, mammals were small nocturnal animals about the size or even
            smaller than modern mice and rats (Rougier and Novacek, 1998). Certainly, these early were on the bottom of
            the food chain, meaning high mortalities that, as predicted by classical evolutionary models of aging,
            fostered the evolution of a rapid aging phenotype (Fig. 3). During this period, it is possible that
            selection for early reproduction rather than survival shaped mammalian aging whose effects last until today.
            In other words, the large evolutionary time as small, short-lived animals allowed aging to develop an
            intensity in mammals not seen in reptiles with similar average lifespans or body sizes (de Magalhaes and
            Toussaint, 2002).</p>

          <div align="center"><p><img alt="Evolution of mammalian aging" border="0"
                                      height="262" src="../assets/evolutionary_model.gif" width="712"></p></div>

          <blockquote><p align="justify"><strong>Figure 3:</strong> Model for the evolution of mammalian aging (de
            Magalhaes and Toussaint, 2002).</P></blockquote>

          <p align="justify">The process by which this fostering of aging occurred is opened to speculation: it could
            have been genetic drift caused by decreased evolutionary pressure at later ages, it could have been mutation
            accumulation, it could have been antagonistic pleiotropy, etc. Once the dinosaurs disappeared, ~65 million
            years ago, mammals took over the world and, in some species such as humans, whales, and elephants, longevity
            could evolve. Nonetheless, the consequences of this phenomenon of <em>r</em>-selection in early mammals are
            visible in modern mammals (Table 1). This hypothesis explains why reptiles feature apparently non-aging
            organisms and some traits associated with long lifespans, such as oocyte regeneration, that are absent from
            all studied mammals and why, in contrast, even whales, the longest-lived mammal, reach menopause and age.
            Moreover, this model may help explain why mammals lost part of their tissue regeneration capacity when
            compared to, for instance, amphibians and reptiles (Brockes et al., 2001). It also explains why there are so
            many similarities in the aging process of mammals since it is postulated that the aging process of mammals
            has, to some degree, a common origin. Lastly, it is possible that reptiles feature unique mechanisms to
            delay aging and age-related debilitation, which makes reptiles an intriguing model to study aging, as <a
                href="aging_models.html">discussed elsewhere</a>.</p>
        </div>

        <blockquote><H2>A Few Reading Suggestions on Evolutionary Biology</H2></blockquote>


        <p align="justify">Darwin, Charles; "On the Origin of Species" (1859). Make sure you get the first edition as it
          is considered the best. There is an <A
              HREF="http://www.literature.org/authors/darwin-charles/the-origin-of-the-species/">online version</A>
          available at the classics section of the <A HREF="http://www.literature.org/">Online Literature Library</A>.
        </P>

        <p align="justify">Dawkins, Richard; "The Blind Watchmaker" (1986).</P>

        <p align="justify">Dawkins, Richard; "The Selfish Gene" (1989).</P>

        <p align="justify">Ridley, Matt; "The Red Queen: Sex and the Evolution of Human Nature" (1995).</P>

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
