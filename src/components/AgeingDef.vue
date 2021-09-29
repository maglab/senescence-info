<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col cols="2">
        <div class="sidebar">
          <b-card >
            <b-nav vertical>
              <b-nav-item @click="goto('fear')">What Is Aging?</b-nav-item>
              <b-nav-item @click="goto('dem')">Demographic Measurements</b-nav-item>
              <b-nav-item @click="goto('path')">Pathological and Physiological Age-Related Changes</b-nav-item>
              <b-nav-item @click="goto('basic')">Basic Definitions in Gerontology</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="ageing">
        <h2>What Is Aging?</h2>

        <blockquote>
          <p align="justify">In this essay I attempt to define aging. The different components of human aging are succinctly reviewed and several other key concepts in gerontology are defined.</p>

          <p><em>Keywords:</em> ageing, aging traits, biomarkers, demography, older people</p></blockquote>

        <hr width="80%" size="1">

          <p align="justify">Although everyone is familiar with aging, defining it is not so straightforward. Aging can simply refer to the passage of time and can even have a positive connotation as in "aging wine." In the context of <strong>senescence.info</strong>, and unless otherwise noted, the term "aging" refers to the biological process of growing older in a deleterious sense, what some authors call "senescence" (Williams, 1957; Comfort, 1964; Finch, 1990). (Personally, I actually prefer the term "senescence." If this were an academic book, I would be tempted to use the term "senescence." Being a website with visitors from various backgrounds, I think the term "aging" is more accessible; "senescence" now also frequently refers to <router-link to="/cell-ageing">cellular senescence</router-link>.) Aging is one of the most complex biological processes, whose definition is intrinsically related to its phenotype, as developed below.</P>
        </div>
        <div ref="dem">
        <blockquote><H2>Demographic Measurements of Aging</H2></blockquote>

          <p align="justify">Aging has been defined as the collection of changes that render human beings progressively more likely to die (Medawar, 1952). Indeed, one hallmark of aging in humans and in <router-link to="/ageing-animals">many other species</router-link> is an age-related increase in mortality rates shortly after maturity (Fig. 1).</P>

        <div align="center"><p><img src="../assets/human_mortality.gif" alt="Mortality rates" width="614" height="381" border="0"></p></div>

        <blockquote><p align="justify"><strong>Figure 1:</strong> Mortality rates, expressed in deaths per 100,000 people, as a function of age for the 2002 US population. The black line represents the Gompertz function extrapolated from the mortality rates after maturity. Source: <a href="http://www.cdc.gov/nchs/nhcs.htm">CDC/NCHS</a>, <a href="http://www.cdc.gov/nchs/nvss.htm">National Vital Statistics System</a>, <a href="http://www.cdc.gov/nchs/deaths.htm">Mortality Data</a>.</P></blockquote>

        <p align="justify">Mathematically, aging can be quantified from mortality curves such as that in Figure 1. There are several mathematical functions that can be used (Wilson, 1994; Strehler, 1999, pp. 103-124). The simplest, most widely used method is based on the Gompertz function (Finch, 1990, pp. 13-22; Strehler, 1999, pp. 111-113):</P>

        <blockquote><p>m(t) = Ae<sup>Gt</sup></p></blockquote>

        <p align="justify">Being <em>m(t)</em> the mortality rate as a function of time or age (<em>t</em>); <em>A</em> is the extrapolated constant to birth or maturity, and <em>G</em> is the exponential (Gompertz) mortality rate coefficient. From Figure 1 it is possible then to estimate the Gompertz equation by performing a simple regression analysis after maturity: m(t) = 8.84e<SUP>0.0800t</SUP> with r<sup>2</sup> = 0.997. From this equation--or even sometimes from the mortality plot--we can derive the initial mortality rate (IMR), which is the mortality rate independent of aging, often calculated from the mortality rate prior to its exponential increase with age; in this case, IMR = 0.0002/year since that is the mortality rate at ages 10-20. Another important variable derived from the Gompertz equation is the mortality rate doubling time (MRDT) given by MRDT = 0.693/<em>G</em> (Finch, 1990, pp. 22-24). Hence, MRDT = 0.693/0.0800 = 8.66 years. In fact, human populations tend to have a MRDT around 8 years. This means that after our sexual peak, at roughly age 30, our chances of dying double approximately every 8 years.</P>

        <p align="justify">Demographic measurements of aging, such as the MRDT, may then serve as estimates of the rate of aging. Changes in the MRDT are expected to reflect changes in the rate of aging, but the same is not true for the IMR (Finch, 1990; Finch and Pike, 1996; de Magalhaes et al., 2005). For example, the life expectancy at birth increased considerably in the past 100 year. In the US, it jumped from 47.3 years in 1900 to 77.3 years in 2002 (<a href="http://www.cdc.gov/nchs/nhcs.htm">CDC/NCHS</a>, <a href="http://www.cdc.gov/nchs/nvss.htm">National Vital Statistics System</a>, <a href="http://www.cdc.gov/nchs/deaths.htm">Mortality Data</a>). Nonetheless, the rate of aging and the MRDT are thought to have remained unaltered for thousands of years (Finch, 1990; Hayflick, 1994). What happened last century was that the IMR, which is not affected by the aging rate, was lowered due to breakthroughs in different areas, such as in the war against infectious diseases, thus lowering mortality rates across the entire lifespan and increasing the life expectancy. Because the increase in life expectancy was due to changes in the IMR independent of changes in aging rates is also the reason why the average lifespan of humans may be reaching a plateau. The only way to considerably increase human longevity in the future is to retard the aging process itself (Olshansky et al., 1990; Butler et al., 2008).</p>

          <p align="justify">The way changes in the IMR and in the MRDT affect lifespan yet only changes in the MRDT reflect changes in aging rates means that changes in lifespan, for example due to feeding animals a particular <router-link to="/anti-ageing-medicine">anti-aging drug</router-link>, may not reflect changes in the rate of aging. This is a crucial concept to correctly interpret experimental results in gerontology. For experiments in, for instance, <router-link to="/ageing-models">animal models</router-link> to be relevant to aging it is therefore imperative to discriminate between interventions affecting the aging process (i.e., the MRDT) and interventions affecting health (i.e., the IMR), as argued by many others (Hayflick, 2000; Pletcher et al., 2000).  To determine whether rate of aging is affected one tool researchers have at their disposal is then calculating the MRDT and IMR (Pletcher et al., 2000; de Magalhaes et al., 2005). Indeed, such demographic measurements have been employed to determine whether <router-link to="/genetics-of-ageing">genetic and dietary manipulations</router-link> of lifespan in rodents modified or not the aging process (de Magalhaes et al., 2005). Moreover, and being the IMR independent of aging, the conditions by which aging is studied should be ideal environmental conditions in order to minimize the IMR and allow us to better focus on the aging process (Strehler, 1986). Lastly, demographic measurements are also useful for comparisons between species, as further <router-link to="/genetics-of-ageing">discussed elsewhere</router-link>. </p>

          <p align="justify">It is common knowledge that women have a longer life expectancy than men. Pre-menopausal hormonal protection might contribute to this. Women have a lower IMR than men but the MRDT is similar for men and women<router-link href="#gender"><sup>*</sup></router-link>. This indicates that women do not age slower than men. Rather, women appear better protected against many major diseases at all ages (Austad, 2006). Men are the sicker sex (Zuk, 2009). Interestingly, there is some anecdotal evidence that, after menopause, women may suffer more from aging than men. Eunuchs also appear to live slightly longer than men (Hamilton and Mestler, 1969); a reduction in IMR due to hormonal alterations may be at the origin of this phenomenon (Grossman, 1984).</p>

        <p align="justify">As mentioned above, human mortality rates begin to climb exponentially after about age 30. One peculiar phenomenon, however, is that this rate of increase of mortality actually levels off after about age 65 (Vaupel et al., 1998), and this has been reported in other species too. This is probably due, however, to statistics and heterogeneity--e.g., if a population is made up of two sub-populations with different rates of aging  eventually only slower aging individuals will remain--rather than any unknown biological process (Vaupel et al., 1979; Partridge and Mangel, 1999; Rossolini and Piantanelli, 2001; Avraam et al., 2013). Stochastic effects also likely contribute to fluctuations at later ages in rate of mortality increase (Avraam et al., 2013).</P>
        </div>
        <div ref="path">
        <blockquote><H2>Pathological and Physiological Age-Related Changes</H2></blockquote>

        <p align="justify">Aging can also be defined as a progressive functional decline, or a gradual deterioration of physiological function with age, including a decrease in fecundity (Partridge and Mangel, 1999; Lopez-Otin et al., 2013), or the intrinsic, inevitable, and irreversible age-related process of loss of viability and increase in vulnerability (Comfort, 1964). Clearly, human aging is associated with a wide range of physiological changes that not only make us more susceptible to death but limit our normal functions and render us more susceptible to a number of diseases. The purpose of <strong>senescence.info</strong> is not to describe all age-related changes and pathologies typical of old age, as there are excellent resources on the topic (Craik and Salthouse, 1992; Spence, 1995; Timiras, 2002), including our lab's <a href="http://ageing-map.org/">Digital Ageing Atlas</a>. Nonetheless, a brief inspection of the most important physiological changes that occur with age and the pathological consequences of these changes is useful to understand aging.</P>

        <p align="justify">In humans, albeit some functions like hearing and flexibility begin to deteriorate early in life (Bowen and Atwood, 2004), most of our body's functional decline tends to begin after the sexual peak, roughly at age 19. Contrary to demographic measurements of aging that show mortality rates increasing exponentially, the human functional decline tends to be linear (Strehler, 1999). Succinctly, aging is characterized by changes in appearance, such as a gradual reduction in height and weight loss due to loss of muscle and bone mass, a lower metabolic rate, longer reaction times, declines in certain memory functions, declines in sexual activity--and menopause in women--, a functional decline in audition, olfaction, and vision, declines in kidney, pulmonary, and immune functions, declines in exercise performance, and multiple endocrine changes (Craik and Salthouse, 1992; Hayflick, 1994, pp. 137-186; Spence, 1995). Although the immune system deteriorates with age, called immunosenescence, a major hallmark of aging is an increase in inflammation levels, reflected in higher levels of circulating proinflammatory cytokines and that may contribute to several age-related disorders such as Alzheimer's disease, atherosclerosis and arthritis (Franceschi et al., 2000; Bruunsgaard et al., 2001). Some age-related changes, such as presbyopia, also called farsightedness, which may be caused by the continuous growth of the eyes' lenses and appears to be universal of human aging (Finch, 1990, pp. 158-159; Hayflick, 1994, p. 179), and menopause, are inevitable yet the incidence of most age-related changes vary considerably between individuals.</P>

        <p align="justify">The phenotype of human aging is one in which practically any system, tissue or organ can fail (Austad, 1997a; Strehler, 1999). This indicates an intrinsic phenomenon affecting the whole organism and leading to the "weakest link" failing, resulting in death. Interestingly, studies in supercentenarians--i.e., people over 110 years of age--suggest that these individuals age uniformly. In other words, one thing that makes supercentenarians unique is the fact they do not have one debilitating organ or system that results in death; they do not have a "weakest link." Supercentenarians are nonetheless extremely frail and debilitated, showing multiple pathologies (Coles, 2004), and have a high incidence of transthyretin amyloidosis (Coles and Young, 2012). Likewise, one "autopsy study" in centenarians revealed that all, even those described as healthy before death, had an acute organic failure causing death. These results also suggest that the idea that people can die of "old age" is incorrect (Berzlanovich et al., 2005).</P>

        <p align="justify">Clearly, the incidence of a number of pathologies increases with age (Fig. 2). These include type 2 diabetes, heart disease, cancer, arthritis, and kidney disease. Also note how the incidence of some pathologies, like sinusitis, remains relatively constant with age, while the incidence of others, like asthma, even decline. Therefore, it is important to stress that aging is not merely a collection of diseases. With age we become more susceptible to certain diseases, but as described above we also become more likely to die, frailer, and endure a number of physiological changes, not all of which lead to pathology.</P>

        <div align="center"><p><img src="../assets/pathology_age.gif" alt="Age-related pathologies" width="640" height="337" border="0"></p></div>

        <blockquote><p align="justify"><strong>Figure 2:</strong> Prevalence of selected chronic conditions, expressed in percentages, as a function of age for the US population (2002-2003 dataset). All forms of cancer and heart disease are featured. Source: <a href="http://www.cdc.gov/nchs/nhcs.htm">CDC/NCHS</a>, <a href="http://www.cdc.gov/nchs/nvss.htm">National Vital Statistics System</a>, <a href="http://www.cdc.gov/nchs/deaths.htm">Mortality Data</a>.</P></blockquote>

        <div align="center"><p><img src="../assets/death_causes.gif" alt="Age-related pathologies" width="577" height="451" border="0"></p></div>

        <blockquote><p align="justify"><strong>Figure 3:</strong> Death by underlying or multiple cause, expressed in rates per 100,000 people, for the 2001 US population aged 85 and older. Source: <a href="http://www.cdc.gov/nchs/nhcs.htm">CDC/NCHS</a>, <a href="http://www.cdc.gov/nchs/nvss.htm">National Vital Statistics System</a>, <a href="http://www.cdc.gov/nchs/deaths.htm">Mortality Data</a>.</P></blockquote>

        <div align="center">
          <table border="0" cellpadding="4" cellspacing="0">
            <tr>
              <td></td>
              <td colspan="2" align="center"><strong>45-54 years</strong></td>
              <td colspan="2" align="center"><strong>Over 85 years</strong></td>
            </tr>
            <tr>
              <td><strong>Cause of death</strong></td>
              <td><strong>Incidence</strong></td>
              <td><strong>% of deaths</strong></td>
              <td><strong>Incidence</strong></td>
              <td><strong>% of deaths</strong></td>
            </tr>
            <tr>
              <td>Diseases of the heart</td>
              <td>92.8</td><td>21.66%</td><td>5607.5</td><td>37.48%</td>
            </tr>
            <tr>
              <td>Malignant neoplasm</td>
              <td>126.3</td><td>29.48%</td><td>1747</td><td>11.68%</td>
            </tr>
            <tr>
              <td>Cerebrovascular diseases</td>
              <td>15.1</td><td>3.52%</td><td>1485.2</td><td>9.93%</td>
            </tr>
            <tr>
              <td>Parkinson's disease</td>
              <td>0.1</td><td>0.02%</td><td>1312.8</td><td>8.77%</td>
            </tr>
            <tr>
              <td>Alzheimer's disease</td>
              <td>0.2</td><td>0.05%</td><td>703.2</td><td>4.70%</td>
            </tr>
            <tr>
              <td>Pneumonia</td>
              <td>4.6</td><td>1.07%</td><td>676.5</td><td>4.52%</td>
            </tr>
            <tr>
              <td>Chronic lower respiratory diseases</td>
              <td>8.5</td><td>1.98%</td><td>638.2</td><td>4.27%</td>
            </tr>
            <tr>
              <td>Diabetes mellitus</td>
              <td>13.6</td><td>3.17%</td><td>318.6</td><td>2.13%</td>
            </tr>
            <tr>
              <td>Certain infectious and parasitic diseases</td>
              <td>22.9</td><td>5.35%</td><td>243.8</td><td>1.63%</td>
            </tr>
            <tr>
              <td>Atherosclerosis</td>
              <td>0.5</td><td>0.12%</td><td>177.3</td><td>1.19%</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>143.8</td><td>33.57%</td><td>2050.9</td><td>13.71%</td>
            </tr>
          </table>
        </div>

        <blockquote><p align="justify"><strong>Table 1:</strong> Death by underlying or multiple cause, expressed in rates per 100,000 people or in percentage of the total deaths, for the 2001 US population in two age groups: 45-54 years and 85 years of age and older. Source: <a href="http://www.cdc.gov/nchs/nhcs.htm">CDC/NCHS</a>, <a href="http://www.cdc.gov/nchs/nvss.htm">National Vital Statistics System</a>, <a href="http://www.cdc.gov/nchs/deaths.htm">Mortality Data</a>.</P></blockquote>
        <br>
          <p align="justify">Figure 3 shows the most important causes of death in the elderly. Not surprisingly, heart diseases are the number one cause of death in people aged 85 and older, followed by cancer, cerebrovascular diseases, Parkinson's and Alzheimer's diseases, pneumonia, and chronic lower respiratory diseases. While diseases like cancer and heart diseases are major causes of death at all ages, other diseases, like Parkinson's and Alzheimer's, only become significant at old age (Table 1). Lastly, it is important to note that an understanding of the physiology and pathology of aging is important to assess the relevance of model organisms for the study of human aging, as <router-link to="/ageing-animals">mentioned elsewhere.</router-link></P>

        <p align="justify">Despite all the physiological and pathological changes, there is still no accurate way to quantify how aged someone is. Despite decades of research, and even though it is clear that different people age at different paces, the most accurate method to determine the biological age of someone is still chronological age. This is a major problem for studying aging and there have been ongoing efforts to determine a better way to quantify aging for years (reviewed in Balin, 1994).</P>
        </div>
        <div ref="basic">
        <blockquote><H2>Basic Definitions in Gerontology</H2></blockquote>

        <p align="justify">Given the description of the human aging phenotype detailed above, I will define the basic terms that are used in <strong>senescence.info</strong>. To sum it up, aging is a complex process composed of several features: 1) an exponential increase in mortality with age; 2) physiological changes that typically lead to a functional decline with age; 3) increased susceptibility to certain diseases with age. So, I define aging as a progressive deterioration of physiological function, an intrinsic age-related process of loss of viability and increase in vulnerability.</P>

        <p align="justify">Gerontology is the branch of biomedical sciences that studies aging. In <strong>senescence.info</strong>, gerontology normally refers to the study of the biological process of aging, not its medical consequences. Generally, I use geriatrics to refer specifically to the medical study of diseases and problems of the elderly. Technically, gerontology includes both the biological and the medical branches of the study of aging, but since <strong>senescence.info</strong> is written in the context of the biology of aging, gerontology usually refers to the study of the biological aspects of aging, unless otherwise specified. Biogerontology refers specifically to the biological study of aging and is also used, usually interchangeably, with gerontology.</P>

        <p align="justify">Life expectancy is how long, on average, an organism can be expected to live. Longevity is the period of time an organism is expected to live under ideal circumstances. Lifespan is defined as the period of time in which the life events of a species or sub-species (e.g., a strain or population) typically occur. Lifespan and longevity can sometimes be used interchangeably, though they have slightly different meanings. For humans, lifespan and longevity are about the same in industrial nations, but when studying species in the wild, one can expect that lifespan will be lower than longevity since feral conditions are certainly not ideal for assessing longevity. For most purposes, life expectancy, average longevity, and average lifespan have the same meaning. Maximum longevity and maximum lifespan are the maximum amount of time animals of a given species or sub-species can live--typically, the record longevity for that species. The maximum longevity of humans is 122 years, recorded by the late Jeanne Calment (Allard et al., 1998).</P>

          <p align="justify">For a quick reference on terms and definitions, you may always consult the <router-link to="/ageing-glossary">glossary</router-link>.</P>

        <hr width="80%" size="1">

        <p align="justify"><A NAME="gender"><SUP>*</SUP> Although there are published papers on this, I actually made the calculations based on mortality data for the US population (Hayflick, 1994, pp. 73-76).</A></p>
        </div>




      </b-col>
    </b-row>


  </b-container>

</template>


<script>
export default {
  name: 'Author',
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

