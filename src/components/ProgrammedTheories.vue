<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('endo')">The Endocrine System</b-nav-item>
              <b-nav-item @click="goto('dev')">Developmental Theory</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
          <h2>Programmed Theories of Aging</h2>

          <blockquote>
            <p align="justify">In addition to <router-link to="causes_of_aging.html">damage-based</router-link> theories, a second class of <router-link to="/ageing-theories">theories of aging</router-link> defends that aging is a genetically-determined, programmed process. In this essay, I present and review the most important concepts and theories in this context.</P>

            <p><em>Keywords:</em> ageing, aging clock, biogerontology, deterministic theories of aging, endocrinology, GHR, hormone theory of aging, pre-programmed aging</p></blockquote>

          <hr width="80%" size="1">

          <p align="justify">For decades the idea that aging is programmed has been debated, and it was given new impetus by the extraordinary discoveries in the <router-link to="/genetics-of-ageing">genetics of aging</router-link>. The observation that single genes can modulate longevity and, to some degree, regulate the process of aging in <router-link to="/ageing-models">model systems</router-link> supports the idea that aging is to some degree programmed. For example, in yeast, transient expression of a single transcription factor can rejuvenate cells and extend lifespan (Unal et al., 2011). Of course, the same may not hold true for more complex organisms, like vertebrates, and discussed below are some of the proposed models of aging based on the concept of programmed aging.</P>
          <p align="justify">Though there have been arguments in favor of seeing aging as part of an altruistic predetermined plan that serves a purpose (Longo et al., 2005), the idea that aging evolved for a reason--also known as group selection--is largely out-of-favor in modern gerontology. As mentioned <router-link to="/evolution-of-ageing">elsewhere</router-link>, in the vast majority of species, aging does not appear to be programmed in the sense that it serves a purpose (Austad, 2004). Therefore, in this essay, I do not imply any  evolutionary purpose for aging; by programmed I mean  in the sense of following a predetermined set of instructions, like in the result of gene action.</P>
        </div>
        <div ref="endo">
          <blockquote><H2>The Endocrine System as the Pacemaker of Aging</H2></blockquote>

          <p align="justify">The idea that hormonal changes drive aging is decades-old (reviewed in Gosden, 1996). Since the levels of certain hormones like growth hormone (GH) (Ho et al., 1987) and its downstream target insulin-like growth factor I (IGF-1) (Hammerman, 1987) decline with age, an old idea is that such changes cause aging. Because to some degree the brain regulates endocrine changes (e.g., GH production), a major variant of hormone-based theories of aging is the neuroendocrine theory of aging that posits that the brain acts as the master clock of each life stage via hormonal changes (Weinert and
            Timiras, 2003). Given the intuitive nature of such endocrine-based theories, even today many <router-link to="/anti-ageing-medicine">anti-aging products</router-link> aim to increase the levels of these hormones in older people. As briefly <router-link to="/anti-ageing-medicine">discussed before</router-link> and further detailed below, however, it appears that restoring hormonal levels to youthful levels does not fight aging and increasing GH and IGF-1 levels may even accelerate the aging process. Still, it is possible that the endocrine system influences aging, as discussed below.</p>

          <p align="justify">Many experiments using different <router-link to="/ageing-models">model organisms</router-link> associate the insulin/insulin-like pathway with aging (Lin et al., 2000; Clancy et al., 2001; Kenyon, 2010). As mentioned <router-link to="/comparative-biology">earlier</router-link>, smaller mice, rats, horses, and dogs appear to live longer and this could be related to lower levels of IGF-1 (Miller, 1999; Miller et al., 2002a; Rollo, 2002). Moreover, a number of long-lived genetic mutants have decreased GH/IGF-1 signaling. Mice homozygous for <em>Pit1</em> have lower GH and IGF-1 levels; they are dwarf, live about 40% longer with a longer maximum lifespan, and their aging process appears to be delayed (Flurkey et al., 2001). Mice mutant for <em>Prop1</em>, a transcription factor that regulates <em>Pit1</em>, live 50% longer (Brown-Borg et al., 1996). Likewise, mice overexpressing bovine growth hormone appear to age faster (Bartke, 2003). Interestingly, some studies suggest that genetic variants of genes in the insulin/insulin-like pathway are associated with human longevity (Bonafe et al., 2003; Suh et al., 2008). Human patients with a mutated <em>Prop1</em> might live slightly longer (Bartke et al., 2001a), though patients with deficiencies in GH and IGF-1 often show signs of early aging even if their lifespan may actually be increased (Laron, 2005). Besides, some untreated patients with GH deficiency have a reduced longevity (Besson et al., 2003). Patients with a GH receptor deficiency have greatly decreased mortality from cancer and  type 2 diabetes, though cardiac disease mortality appears to be increased and overall mortality  does not appear to change (Guevara-Aguirre et al., 2011). Nonetheless, it is clear that neuroendocrine systems can impact on aging and possibly on human aging as well (Bartke, 2005; de Magalhaes, 2005a). As another example, mutations in the <em>klotho</em> gene, which acts as a circulating hormone, appear to accelerate the aging process (Kuro-o et al., 1997). In contrast, overexpression of <em>klotho</em> extend lifespan by about 30%. The functions of <em>klotho</em> are largely unknown but it could be related to insulin/IGF-1 signaling (Kurosu et al., 2005). (Please consult the <a to="http://genomics.senescence.info/genes/">GenAge database</a> for more information on most of the aforementioned genes and others related to the GH/IGF-1 axis.)</p>

          <p align="justify">It is interesting to note that hormonal changes appear to play a role in <router-link to="/caloric-restriction">CR</router-link>. CR clearly induces various hormonal alterations in rodents, such as decreasing plasma levels of insulin (Masoro et al., 1992) and IGF-1 (Breese et al., 1991); an increase in GH secretory dynamics has also been observed though it could be a compensatory mechanism (Sonntag et al., 1999). Interestingly, several genes have been identified in model organisms whose effects appear to mimic CR. The best example is probably the urokinase-type plasminogen activator. Overexpression of this gene in the brain of mice causes a decrease in appetite, resulting in a 20% decrease in food consumption and body mass, and a 20% increase in longevity (Miskin and Masos, 1997). Other genes appear to result in a phenotype similar to CR, generally by affecting body size, GH and IGF-1, and  body temperature (reviewed in Bartke et al., 2001a). The best example is the GH receptor whose disruption in mice interferes with the life-extending effects of CR (Bonkowski et al., 2006). Some of the genes mentioned above may also mimic CR to some degree, though by combining CR and mutations in one of these genes--the <em>Prop1</em> gene--, an even greater increase in longevity was observed, suggesting that distinct mechanisms may be at work (Bartke et al., 2001b). Recent results suggest that although the growth hormone/IGF-1 pathway is involved in CR, other mechanisms might also operate (Shimokawa et al., 2003). Whatever the exact mechanisms, CR appears to operate through a neuroendocrine signaling cascade of which the GH/IGF-1 axis is a pivotal, though probably not the only, component (Masoro, 2005). These results hence link some aspects of <router-link to="causes_of_aging.html">energy metabolism</router-link> to aging via the GH/IGF-1 axis (reviewed in Tatar et al., 2003; Berner and Stern, 2004; de Magalhaes, 2005a).</p>

          <p align="justify">The exact mechanisms by which GH, IGF-1 and other hormones impact on aging remain unknown. Several possibilities exist (reviewed in Berner and Stern, 2004). It has been proposed that the GH/IGF-1 axis regulates antioxidants (Brown-Borg et al., 2005). Another hypothesis is that since GH and IGF-1 and mitogens and trigger cell division, lower levels of the GH/IGF-1 axis decrease cellular replication that may impact on some sort of <router-link to="/cell-ageing">cellular clock</router-link> (Sonntag et al., 1999; Bowen and Atwood, 2004; de Magalhaes and Faragher, 2008). Similarly, maybe the GH/IGF-1 axis impacts on cellular processes like apoptosis and/or <router-link to="/cell-ageing">stress resistance</router-link> (Sapolsky et al., 1986). As mentioned below, maybe hormonal changes regulate aging as indirect consequences of the developmental program. The jury is still out.</p>
          <p align="justify">Overall, the GH/IGF-1 axis and associated neuroendocrine mechanisms--some of which are probably still unknown--appear to influence mammalian aging. How exactly this happens is not known and the signal transduction involved in the aging effects of the GH/IGF-1 axis remains largely a mystery. It is clear, however, that early theories defending that hormone changes with age drive aging were incorrect. If anything, decreasing GH/IGF-1 signalling increases lifespan, not the opposite. Nonetheless, as argued by others (Weinert and Timiras, 2003), the results implicating neuroendocrine mechanisms in aging suggest a certain level of coordination of aging changes.</p>
        </div>
        <div ref="dev">
          <blockquote><H2>The Developmental Theory of Aging</H2></blockquote>

          <p align="justify">As <router-link to="/ageing-animals">mentioned previously</router-link>, the <em>dauer</em> pathway in <em>C. elegans</em> is an alternative developmental pathway that results in a significant life-extension (Klass and Hirsh, 1976). In the <em>dauer</em> pathway, which can be activated by starvation and hence may be analogous to <router-link to="/caloric-restriction">CR</router-link>, there is a developmental arrest, which suggests that, at least in this model system, aging and development are coupled (Johnson et al., 1984). Further genes influencing lifespan in <i>C. elegans</i> confirm a linkage between the timing of development and the timing of aging (Lakowski and Hekimi, 1996; Chen et al., 2007). In insects too arrested development due to environmental factors has been suggested to slow or even stop aging (Tatar and Yin, 2001). Other examples exist (reviewed in Brakefield et al., 2005): in the marine mollusk <em>Phestilla sibogae</em>, the length of larval life is determined by a chance encounter with a stimulus that causes metamorphosis. Interestingly, the duration of post-larval life is unaffected by the length of the time it takes the larva to metamorphose. In other words, during the developmental hiatus from the onset of larval metamorphic competence to metamorphosis, aging is suspended (Miller and Hadfield, 1990). Similarly, semelparous species like the salmon, <router-link to="/ageing-animals">described earlier</router-link>, clearly argue that developmental programs can cause aging, or a phenotype resembling aging, and death (de Magalhaes and Church, 2005). Lastly, as <router-link to="/comparative-biology">mentioned before</router-link>, there is a correlation in higher animals, including in mammals (Fig. 1), between the time it takes to reach sexual maturity and how long, on average, they live afterwards (Charnov, 1993; de Magalhaes et al., 2007a). This could be due to similar extrinsic mortality rates acting on animals, however, and may thus be a product of co-evolution rather than a causal relation.</p>

          <div align="center"><p><img src="../assets/lifespan.gif" alt="Mammalian lifespan" width="707" height="179" border="0"></p></div>

          <blockquote><p align="justify"><strong>Figure 1:</strong> The life history events of mammals, such as development, reproduction, and aging, typically occur in proportion to the entire lifespan. (Adapted from de Magalhaes and Sandberg, 2005.)</P></blockquote>

          <p align="justify">Of course, invertebrates are distant <router-link to="/ageing-models">animal models</router-link> and these findings may not be representative of human biology, but they demonstrate how, at least in some species, aging is to a large degree a result of the genetic program that also controls development. The developmental theory of aging--also called DevAge--defends that aging is a result of development, that aging and development are regulated by the same genetic mechanisms and processes (Medvedev, 1990; Kanungo, 1994; Zwaan, 2003; Bowen and Atwood, 2004; de Magalhaes and Church, 2005; de Magalhaes, 2012). Another way of looking at aging from this perspective is considering the idea that damage only begins accumulating after developmental processes are completes and it is this developmentally-triggered damage that causes most <router-link to="/ageing-definition">aspects of aging</router-link>.</p>

          <p align="justify">Although it can be argued that, in some species, aging is a direct product of evolution, as <router-link to="/evolution-of-ageing">debated before</router-link>, such possibility appears unlikely in higher animals, such as mammals that rear their offspring. Instead, one idea is that aging is an unintended product of evolution, an unintended product of selection acting on development. Evolution does not favor long life. Rather, evolution optimizes developmental mechanisms for reproduction. Once an organism has passed its genes to the next generation maybe evolution gives up on it and the same genes responsible for the growth and maturation of that organism will inadvertently end up killing it (de Magalhaes and Church, 2005; de Magalhaes, 2012). <router-link to="/evolution-of-ageing">Evolutionary</router-link>, this can be seen as a form of antagonistic pleiotropy (Williams, 1957), one in which alleles beneficial early in life are harmful late in life.</p>

          <p align="justify">The insulin/insulin-like pathway described above appears to play a role in animals entering or not the <em>dauer</em> pathway (e.g., Wolkow et al., 2000; Lin et al., 2001). As mentioned above, endocrine regulation appears to have an effect on aging, while indirectly affecting growth and maturation. The way neuroendocrine systems limit longevity suggests a link between reproduction and lifespan (Mobbs, 2004). Thus, maybe some hormones like GH and genes involved in insulin-like signaling regulate growth and development early in life and later contribute to aging (de Magalhaes and Church, 2005). Neuroendocrine mechanisms controlling development may thus extend after maturation and results in a regulatory cascade that result in age-related changes (Finch, 1976). Early studies showed that <router-link to="/caloric-restriction">CR</router-link> stunted growth and sexual development (McCay et al., 1935), though the extent of which depends on the severity of the CR used. Interestingly, high nutrition may accelerate maturation and decrease lifespan in ground squirrels (Harvey and Zammuto, 1985). Therefore, maybe seeing aging as a consequence of development links the impact of the endocrine system on aging and on CR.</p>

          <p align="justify">The way mammalian aging is similar in different species, sometimes appearing as the same process only timed at different paces, has puzzled researchers (Finch, 1990; Miller, 1999). If the timing of development is linked at a mechanistic and <router-link to="/genetics-of-ageing">genetic level</router-link> to the rate of aging in mammals that would explain the plasticity of the aging process in mammals and how a process escaping natural selection is so similar among them. Assuming a link between the genetic mechanisms regulating development and aging would also explain how aging has changed so rapidly in primates (Cutler, 1979; Allman et al., 1993). Hence, one hypothesis is that, probably driven by an extended brain development (Cutler, 1979; Allman et al., 1993; Kaplan and Robson, 2002; Lee, 2003), hominid evolution led to an extension of development which in turn led to a delay of aging.</p>

          <p align="justify">While the developmental theory of aging is theoretically sound, it lacks many concrete details for how developmental mechanisms could influence age-related changes. Some theoretical models exist, like for brain aging (de Magalhaes and Sandberg, 2005), but many details remain unclear. Also, it is likely that at least some age-related changes are the result of an accumulation of some toxic by-product of metabolism, so an overlap between theories of aging may exist. In the end, the developmental theory of aging argues that the bulk of the <router-link to="/ageing-definition">aging phenotype</router-link> is due to the indirect actions of developmental mechanisms. Further research is necessary to test and elucidate this hypothesis and, more broadly, unravel the causal mechanisms of aging.</p>
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
