<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('restriction')">Caloric Restriction</b-nav-item>
              <b-nav-item @click="goto('hormone')">Hormonal Therapies</b-nav-item>
              <b-nav-item @click="goto('antiox')">Antioxidants</b-nav-item>
              <b-nav-item @click="goto('telomere')">Telomere-Based Therapies</b-nav-item>
              <b-nav-item @click="goto('stem')">Stem Cells</b-nav-item>
              <b-nav-item @click="goto('alt')">ALT-711</b-nav-item>
              <b-nav-item @click="goto('future')">Future Therapies</b-nav-item>
              <b-nav-item @click="goto('secret')">The Not-So-Secret Guide to a Long, Healthy Life</b-nav-item>
              <b-nav-item @click="goto('conclusions')">Conclusions</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
          <h2>Anti-Aging Medicine</h2>

          <blockquote>
            <p align="justify">A number of products, including diets, drugs and supplements, are promoted to have
              anti-aging properties. Unfortunately, the hype is often undeserved. Here, I review the most famous
              products
              aimed at delaying the aging process and the misconceptions in which most--but not all--are based. Future
              anti-aging therapies and some advice on healthy lifestyles is also included.</p>

            <p align="justify"><em>Keywords:</em> ageing, anti-oxidants, anti-aging pill, anti-aging products,
              antiaging,
              biomedical gerontology, elderly, eternal youth, growing young, healthy aging, old age, rejuvenation,
              science
              of longevity</p></blockquote>

          <hr size="1" width="80%">

          <p align="justify">I will be clear from the start: <strong>presently, there is no proven way to delay, even if
            slightly, the human aging process</strong> (Olshansky et al., 2002; Hayflick, 2004). Although companies, and
            often journalists and admittedly scientists too, like to tout
            whatever-anti-aging-product-is-currently-in-the-news as the "fountain of youth" or the "holy grail", the
            truth
            is we do not know of any way to even slightly delay the aging process, much less stop or reverse it (which
            is
            what the "fountain of youth" and the "holy grail" are all about). Unfortunately, understanding why a given
            anti-aging intervention is fantasy rather than science often requires time to gather the scientific data,
            which not everyone is willing or capable to do (Warner et al., 2005). If you are visiting this website to
            learn more about anti-aging science and longevity, rather than find out about the latest anti-aging trends
            in
            Hollywood, then the discussion below is for you. </p>

          <div align="center"><p><img alt="Fountain of Youth" border="1" height="332" src="../assets/fountain_youth.jpg"
                                      width="480"></p>

            <blockquote>"Fountain of Youth" by Lucas Cranach. Reversing human aging so far remains
              fiction.
            </blockquote>
          </div>

          <p align="justify">It is important to note that it is possible to delay some of the many effects of aging. For
            example, if you avoid unprotected exposure to the sun, you can delay skin aging. Similarly, a balanced diet
            can lower the incidence of heart disease. Given the complexity of aging, however, delaying the onset of a
            single age-related disease cannot scientifically be considered as equivalent to delaying the aging process
            as
            a whole (Hayflick, 2004). Just because a given product or lifestyle delays the onset of a particular
            age-related change or pathology does not mean it delays aging, in the same way that antibiotics used to
            treat
            opportunistic infections in patients with AIDS, even if they preserve health, are not targeting the ultimate
            cause of AIDS which is HIV. As such, my aim in this essay is to discuss interventions in the context of
            whether they can delay the aging process rather than one of its many consequences.</p>

          <p align="justify">There are also ways of living longer. Following all that motherly advice like regular
            exercise and adequate nutrition can make you live longer (Holloszy, 2000), as discussed further below, and
            any
            therapy that ameliorates mortality from a specific disease will increase longevity. Still, living longer
            does
            not necessarily mean that the fundamental process of aging has been slowed down. Living a healthy life will
            lower your mortality across the entire lifespan, even if there is no impact on aging and age-related
            changes.
            For example, longevity increased roughly 50% in the past century and yet there is no evidence people age
            slower; we live longer now mostly because deaths caused by infectious diseases have gone down (Hayflick,
            1994,
            pp. 84-88). This important distinction holds true for animal studies. Royal jelly and fish oil can
            significantly increase the average lifespan of mice (Jolly et al., 2001; Inoue et al., 2003), and yet that
            does not mean that aging has been delayed by these treatments; all it means is that these nutrients are
            healthy. Therefore, a great deal of care is necessary when interpreting life-extension studies and there is
            a
            lot of controversy in what represents delayed aging.</p>

          <p align="justify">So how can we determine whether a given intervention delays aging? Based on my <router-link
              to="/ageing-definition">definition of aging</router-link>, a given intervention to be accepted as anti-aging
            must
            demonstrate that the onset or pace of multiple age-related changes, including pathologies, is delayed. In
            addition, while accurately quantifying the rate of aging is impossible, one method to estimate the rate of
            aging is to calculate the rate at which mortality increases with age and so determining whether a given
            intervention delays this rate can also help determine if the aging process was delayed (de Magalhaes et al.,
            2005). Any intervention that fails to meet these criteria cannot be considered as truly anti-aging, even if
            it
            extends average lifespan or delays a given age-related change. This debate concerning what anti-aging means
            is
            the major source of confusion concerning anti-aging medicine and is often used by companies and even
            scientists to mislead the public. Certainly, some products pitched as anti-aging may be healthy and/or may
            soften the effects of aging. For example, a given anti-wrinkle cream may ameliorate one particular effect of
            aging (wrinkles), but it will not impact on any other aging sign. Importantly, an anti-wrinkle cream will
            not
            increase longevity much less delay the mortality acceleration with age and hence its effects on aging will
            be
            so superficial that scientifically I do not think it can be considered as anti-aging.</p>

          <p align="justify">To complicate matters even further, because studying aging in humans is extremely expensive
            and time-consuming, it is virtually impossible to test whether a given intervention or product delays aging
            in
            humans and thus testing whether a product impacts on aging is usually done in <router-link to="/ageing-models">animal
              models</router-link>. Because animals may or may not be representative of human biology, interpreting the
            life-extending effects of products in animals must be done with caution. Even studies in animals might be
            artifacts of particular experimental conditions. For example, one of the largest increases in lifespan (44%)
            by a product was obtained by feeding worms a synthetic antioxidant called EUK-8 (Melov et al., 2000). Other
            scientists, however, failed to reproduce these results (Keaney and Gems, 2003), even though EUK-8 was shown
            to
            increase antioxidant levels (Keaney et al., 2004), which suggests that possibly very peculiar conditions are
            necessary for this particular product to increase lifespan.</p>

          <p align="justify">As <router-link to="/death-and-ageing-fears">detailed elsewhere</router-link>,
            <strong>senescence.info</strong> is not a medical website. It is a website about aging, namely about <router-link
                to="/ageing-definition">the whole aging process</router-link> with a special emphasis on human aging, and
            thus
            the following products are interpreted in view of their potential impact on the human aging process as a
            whole. Hopefully, I can demystify some of hype surrounding these products and, based on scientific evidence,
            help clarify what they can and cannot do. In the same way I find it crucial to highlight progress and <router-link
                to="/future-grandparents">potential in aging research</router-link> and the possibility (no matter how
            distant
            and difficult) of <router-link to="/future-grandparents">curing aging</router-link>, it is equally important to fight
            false
            publicity, particularly in a field with such a fraudulent past like aging research. Given the numerous
            products in the recent past thought to be useful and later proven to have negative side-effects (e.g.,
            fen-phen and ephedra), and the lack of clinical studies for most anti-aging products, discussing the
            scientific evidence is vital.</p>
        </div>
        <div ref="restriction">
          <blockquote><H2>Caloric Restriction</H2></blockquote>

          <p align="justify">The only known intervention that might be able to delay human aging is <router-link
              to="/caloric-restriction">caloric restriction</router-link> (CR). Given the large body of research on CR, and
            the many products trying to emulate its effects, CR is discussed in its <router-link to="/caloric-restriction">own
              essay</router-link>.</p>
        </div>
        <blockquote><H2>Hormonal Therapies</H2></blockquote>

        <p align="justify">The levels of many hormones go down with age. Some of the oldest and still most popular
          anti-aging treatments are thus based on the notion that hormonal changes contribute to aging and reversing
          age-related hormonal changes will be beneficial. The most famous of these treatments involves human growth
          hormone (hGH) injections. Growth hormone has a long history as an anti-aging treatment and some evidence
          suggests hGH has beneficial effects in elderly people (e.g., see Blackman et al., 2002): hGH supplements might
          increase muscle mass, strengthen the immune system and increase libido. There are studies in elderly patients
          in which they claim to feel younger after hGH treatment. While hGH was once hailed as a major breakthrough,
          like many other anti-aging products it failed to live up to expectations, in part because of its negative
          side-effects (Liu et al., 2007). These might include weight gain, high blood pressure and diabetes. Because,
          as the name implies, hGH stimulates growth, concerns have also been raised as to whether hGH could stimulate
          cancer growth and whether it will contribute to cancer development in patients with existing malignant or
          pre-malignant tumors.</p>

        <p align="justify">Studies in mice do not by and large suggest a beneficial role for GH. If any, they suggest a
          harmful role. Though one study found that a low-dose GH therapy increases lifespan in aged mice (Khansari and
          Gustad, 1991), mice genetically modified to produce lots of GH live less than controls while mice producing
          less GH live longer (Coschigano et al., 2000; Laron, 2005). Of course, as mentioned above, studies in <router-link
              to="/ageing-models">animals</router-link> are not always relevant to human biology. Nonetheless, the results in
          mice suggest that higher GH levels will not make you live longer. Studies in humans with a deficiency in GH
          signalling due to a defect in the GH receptor also suggest a strong cancer protection due to decreased GH
          signalling (Guevara-Aguirre et al., 2011). The human studies also hint at a sort of supernova effect: hGH
          makes patients feel better but might actually diminish their lifespan. In conclusion, hGH might be useful in
          certain aged patients, for example its use has been suggested in cases of depression, but by and large it
          should be seen as cocaine for granddad. Lastly, I should point out that there are (young) patients with GH
          deficiency that if untreated have a reduced longevity (Besson et al., 2003), so hGH does have clinical
          applications.</p>

        <p align="justify">Insulin-like growth factor 1 (IGF-1) is another hormone that may play a role in aging and can
          be purchased as a supplement. IGF-1's production is induced by GH and, like GH, IGF-1's levels decline with
          age and, in mice, low levels of IGF-1 appear to correlate with longevity; mutations in mice that lower IGF-1
          seem to extend lifespan, as <router-link to="/programmed-ageing">detailed elsewhere</router-link>. So, just like for hGH,
          IGF-1 injections could be counter-productive. In fact, there is some evidence that little people with low
          levels of IGF-1 live longer (Krzisnik et al., 1999). Interestingly, anti-aging therapies based on lowering
          IGF-1 may be possible (Miller, 2005). As <router-link to="/programmed-ageing">mentioned elsewhere</router-link>, IGF-1 does
          appear to play a role in aging, but whether it can be used in anti-aging is pure speculation at this stage.
          Clearly, however, IGF-1 injections are unlikely to extend lifespan and, like hGH, may even be harmful.</p>

        <p align="justify">Other hormones whose production decreases with age include DHEA and melatonin. DHEA has been
          reported to improve the wellbeing of the elderly by a variety of ways: improved memory, immune system, muscle
          mass, sexual appetite, and benefits to the skin. Protection against cancer has also been argued but there is
          really no strong scientific evidence for this. Minor side effects such as acne have also been reported. One
          clinical study in elderly women found no evidence of benefits from DHEA (Nair et al., 2006). </p>

        <p align="justify">Melatonin is a hormone mostly involved in sleep and circadian rhythms, the latter
          hypothesized by some to be associated with aging and life-extension (Froy and Miskin, 2007; Kondratov, 2007).
          It appears to have antioxidant functions--more about antioxidants below--in the brain and may have some
          beneficial effects in elderly patients in particular in terms of sleep (Poeggeler, 2005). Some of its
          proponents claim it delays the aging process and many age-related diseases, though this is far from proven. In
          mice, melatonin can increase lifespan but also appears to increase cancer incidence (Anisimov et al., 2001).
          In humans there is no data to determine whether melatonin extends longevity, though it might have benefits in
          some patients (Karasek, 2004). Although it can be used for jet lag and some sleep disorders, it may also cause
          sleep disorders such as nightmares and vivid dreams. One study claimed that melatonin levels do not decrease
          with age, except maybe at night, although due to diseases or drugs elderly persons can have low levels of
          melatonin (Zhao et al., 2002). Melatonin may also aggravate asthma.</p>

        <p align="justify">Finally, for women, estrogen is a popular anti-aging therapy. This hormone is generally used
          in conjunction with others in hormone replacement therapy. It does appear to reduce some of the effects of
          menopause by protecting against heart disease and osteoporosis. On the other hand, it could increase risk of
          breast cancer and may lead to weight gain and thrombosis as side effects. There is a vast literature on the
          advantages and disadvantages of hormone replacement therapy, though this is outside the scope of <strong>senescence.info</strong>.
          In the <router-link to="/ageing-definition">context of aging</router-link>, there is no evidence that estrogen is a viable
          anti-aging therapy. For men, testosterone has also been touted as anti-aging but, again, there is no evidence
          it has anti-aging benefits even if it might have some benefits like, say, increased sexual function and muscle
          mass (reviewed in Dominguez et al., 2009). </p>
        <div ref="antiox">
          <blockquote><H2>Antioxidants</H2></blockquote>

          <p align="justify">One theory of aging is the <router-link to="/causes-of-ageing">free radical theory of aging</router-link>.
            Succinctly, when oxygen is used to make energy in human cells, it releases reactive compounds called free
            radicals, also called reactive oxygen species (ROS). To fight ROS, cells possess an array of defenses called
            antioxidants, many of which can be synthesized or extracted, purified, and then sold, generally in tablets,
            as
            anti-aging drugs (Ames et al., 1993). Common antioxidants include vitamins A, C, and E and coenzyme Q10.
            Unfortunately, there is little evidence any of these products actually work. In mice, for instance, many
            studies indicate that antioxidants do not slow aging although they can at times slightly increase longevity
            (Harman, 1968; Comfort et al., 1971; Heidrick et al., 1984; Holloszy, 1998; Saito et al., 1998). Vitamin C
            supplementation, for instance, does not affect lifespan in mice (Selman et al., 2006). Resveratrol, which is
            discussed in more detail <router-link to="/caloric-restriction">elsewhere</router-link>, and other red wine constituents
            can
            also act as antioxidants (Pervaiz, 2003) and might be protective agents of brain aging (Tredici et al.,
            1999;
            Bastianetto and Quirion, 2002; Mokni et al., 2007). So antioxidants might be healthy in the same way vitamin
            supplements, often including antioxidants, may be healthy; on the other hand, one large study found no
            evidence that multivitamin use influences mortality (Park et al., 2011). There is little evidence that these
            products have serious side-effects, though one study found that antioxidants can accelerate cancer
            development
            in mice (Sayin et al., 2014), and a shorter lifespan due to antioxidant supplementation has also been
            observed
            in voles (Selman et al., 2013). Overall, there is no proof that antioxidants delay aging and some
            large-scale
            epidemiological studies even report that antioxidant supplements may actually increase mortality (Bjelakovic
            et al., 2007 & 2008).</p>

          <p align="justify">Since one major source of ROS are mitochondria, a similar class of compounds are aimed at
            quenching ROS production in mitochondria. These can include not only antioxidants but products that
            allegedly
            "rejuvenate" mitochondria by optimizing metabolism or membrane potential. Like for many other products,
            however, none of these products has been proven to have any effect on aging, either in animal models or in
            humans.</p>
        </div>
        <div ref="telomere">
          <blockquote><H2>Telomere-Based Therapies</H2></blockquote>

          <p align="justify">Telomerase is an enzyme that, at least in some cell lines, appears to overcome <router-link
              to="/cell-ageing">cellular senescence</router-link> by extending the tips of the chromosomes called the
            telomeres--for more details please see <router-link to="/telomeres-telomerase">another essay</router-link>. Some have
            argued
            that if telomerase can avoid aging in cells in vitro, maybe it can be used to combat human aging (Fossel,
            1996). A number of companies and labs are developing telomerase-based therapies to fight aging and at least
            one product, a natural product-derived telomerase activator called TA-65, is already available. One study
            reported that taking TA-65 may result in a decline of senescent immune system cells in patients (Harley et
            al., 2011). TA-65 can also increase telomerase levels in some mouse tissues and was reported to improve some
            health indicators in mice but it did not increase mean or maximum lifespan (de Jesus et al., 2011).</p>

          <p align="justify">Even though our knowledge of telomerase is still imperfect, I am skeptical such therapies
            will succeed (de Magalhaes and Toussaint, 2004a). Firstly, as <router-link to="/telomeres-telomerase">detailed
              elsewhere</router-link>, mice expressing lots of telomerase do not live longer. Moreover, telomerase is important in
            cellular proliferation yet many of our organs, such as the brain, are mostly composed of cells that do not
            proliferate. Hence, telomerase will do little to alleviate aging in these tissues. Lastly, there is ample
            evidence telomerase favors tumorigenesis and so telomerase-based therapies may foster cancer development.
            Although research on telomerase is still in an early age, I have doubts about the efficiency and long-term
            safety of telomerase-based anti-aging therapies. The fact that TA-65 can increase telomerase levels but does
            not extend lifespan in mice (de Jesus et al., 2011) is in line with these thoughts. One high-profile study
            showed that telomerase reactivation reverses degeneration in mice (Jaskelioff et al., 2011). However, this
            study was conducted in animals that have no telomerase to begin with and thus develop a number of
            pathologies.
            Benefits from reactivating telomerase in mice that become sick for lack of telomerase are hardly surprising.
          </p>

          <p align="justify">Some companies are also selling telomere measurements to estimate biological age. Although
            telomere shortening may be a marker of certain diseases, there is no evidence at present that telomere
            length
            is a better indicator of biological age than chronological age.</p>
        </div>
        <div ref="stem">
          <blockquote><H2>Stem Cells</H2></blockquote>

          <p align="justify">In recent years stem cells have received widespread attention. This fame is partly merited
            given the huge potential of stem cells for regenerative medicine, as <router-link to="/engineering-ageing">discussed
              elsewhere</router-link>. The possibility of using stem cells to treat diseases of aging and for rejuvenation is also
            tantalizing. Having said that, and while depletion/dysfunction of stem cells are thought to play a role in
            aging (e.g., see de Magalhaes and Faragher, 2008), there is no evidence that stem cell-based anti-aging
            treatments will work. Harvesting and/or preparing stem cells for treatments is complex and much work remains
            to optimize protocols. In some areas indeed stem cells have been shown to be useful. For example, blood- and
            marrow-derived stem cells have been used successfully in some autoimmune and cardiovascular diseases
            (reviewed
            in Burt et al., 2008). Interestingly, mesenchymal stem cells transplanted from young donors extends lifespan
            in mice (Shen et al., 2011). Yet stem cell applications are still in their infancy and a long way before
            physicians can employ stem cells to delay aging.</p>
        </div>
        <div ref="alt">
          <blockquote><H2>ALT-711</H2></blockquote>

          <p align="justify">ALT-711 is one of the latest anti-aging compounds to receive public attention. It acts by
            catalytically breaking AGE crosslinks: Advanced Glycosylation End-product crosslinks occur when glucose is
            attached to a protein, like it can happen in arteries. For this, ALT-711 seems to be useful against heart
            disease by reducing pulse pressure and improving arterial elasticity. The full effects and side-effects of
            this drug are still unknown but it seems like a promising intervention to ameliorate aging's effects, though
            I
            remain skeptical--until proven contrary--that it can delay aging as a whole.</p>
        </div>
        <div ref="future">
          <blockquote><H2>Future Therapies</H2></blockquote>

          <p align="justify">One exciting finding in anti-aging research was the discovery that feeding rapamycin, also
            known as sirolimus, to middle-aged mice extends lifespan by 9-14% (Harrison et al., 2009). When fed to
            younger
            mice, rapamycin extend lifespan by 10-18% (Miller et al., 2011). In one small clinical trial rapamycin
            ameliorated immunosenescence in elderly volunteers (Mannick et al., 2014). Rapamycin is also an
            immunosuppressant, used to prevent organ rejection, with serious side-effects and so it is not suitable as
            an
            anti-aging drug. However, rapamycin works by inhibiting a complex pathway called TOR (Target of Rapamycin)
            and
            a number of labs and companies are now trying to target more specific downstream nodes of the pathway to
            develop anti-aging drugs without the side-effects of rapamycin (reviewed in de Magalhaes et al., 2012).</p>

          <p align="justify">One gene that appears to influence aging in mice is <em>klotho</em>. As <router-link
              to="/programmed-ageing">detailed elsewhere</router-link>, high levels of klotho increase lifespan by about 30%,
            though it is not entirely clear if aging is delayed, and low levels appear to foster aging (Kuro-o et al.,
            1997). Human longevity has also been linked to allelic variants in this gene (Arking et al., 2002). Its
            functions are still largely a mystery but since the gene encodes one secreted form that acts as a hormone,
            it
            could be synthesized and presented as an anti-aging therapy. For now, however, we will just have to wait and
            see. There are many other <router-link to="http://genomics.senescence.info/genes/">aging-associated genes</router-link> that
            hold promise for pharmaceutical intervention, and progress has been made in finding chemicals that can
            modulate specific <router-link to="http://genomics.senescence.info/genes/">aging-associated genes</router-link> and thus
            extend
            lifespan (Ja et al., 2007), as also debated <router-link to="/caloric-restriction">elsewhere</router-link>. On average,
            however, it takes 12 years from discovery of molecular mechanisms to develop a drug, plus 10 years of tests
            to
            make a drug available. In the case of aging the timescale may be longer, though many companies trying to
            develop anti-aging products are focusing on specific age-related diseases as a way to overcome the legal
            barriers of a product targeting aging (de Magalhaes et al., 2012 & 2017).</p>
        </div>
        <div ref="secret">
          <blockquote><H2>The Not-So-Secret Guide to a Long, Healthy Life</H2></blockquote>

          <p align="justify">There is no magic pill at present that will retard aging. But that is not to say there are
            not simple lifestyle and dietary adjustments that can make you live longer. Most components of a healthy
            lifestyle are well-known already, and I will be just stating the obvious. Still, a varied, rich diet with
            plenty of fruits and vegetables and low in carbohydrates and fat is likely to make you live longer. As an
            example, look at the Okinawan population in Japan in which older individuals have a lower risk of
            age-related
            chronic diseases and mortality when compared to the rest of Japan. Okinawans tend to avoid high calories
            sugars, saturated fats and processed foods and instead consume more vegetables and fruits, which has likely
            contribute to their long lifespan (Willcox et al., 2006). Conversely, smoking, excess alcohol, obesity, lack
            of exercise and high blood pressure are all associated with higher mortality. One study showed that middle
            aged (45-64 years of age) people who adopted a healthy lifestyle by consuming five or more fruits and
            vegetables daily, regular exercise, healthy body mass index (BMI) (18.5-29.9 kg/m<sup>2</sup>) and not
            smoking
            experienced a prompt benefit in lower rates of cardiovascular disease and mortality (King et al., 2007).
            Clearly, not smoking, exercise, moderate alcohol intake and fruit and vegetable intake are associated with
            lower mortality (Khaw et al., 2008). Your doctor will be able to give you many more details on this topic
            and
            advise on the changes that may be more beneficial to your health in particular.</p>
        </div>
        <div ref="conclusions">
          <blockquote><H2>Conclusions</H2></blockquote>

          <p align="justify">One question you may ask me is whether I take any of these so-called "anti-aging" products
            or
            supplements. The answer is no. I do not see evidence that any of these products, including <router-link
                to="/caloric-restriction">caloric restriction</router-link>, actually work; some might have health benefits
            but I am not convinced any can delay human aging. Besides, the aforementioned antioxidants and fish oil are
            good examples of the old idea that it is possible to purify the components of healthy foods to avoid having
            to
            eat them. So far, however, there is no evidence to suggest that these dietary supplements are an adequate
            replacement for a balanced diet, as pointed out by many others (Bjelakovic et al., 2007; Dominguez et al.,
            2009). For example, blood vitamin C levels have been associated with lower mortality (Khaw et al., 2008) yet
            vitamin C supplementation does not increase mouse lifespan (Selman et al., 2006). Most likely plasma vitamin
            C
            levels reflect fruit and vegetable intake, but it is not vitamin C alone that provides health benefits and
            cannot replace a diet rich in fruits and vegetables.</p>

          <p align="justify">Overall, I do try to take some care of my health--like I think everyone should--by
            practicing
            regular exercise, not smoking, avoiding alcohol, and having a moderately balanced diet. My diet is not
            extremely healthy and so I have taken dietary supplements once in a while. Namely, I sometimes take vitamins
            (particularly in winter) and I used to take omega-3 fatty acids since I did not used to eat a lot of fish
            (but
            that has changed now). Ideally, my diet would be balanced enough to avoid having to take any supplements at
            all but I personally find it impossible. Anyway, that is as far as I go. I am not like that married couple
            who
            didn't drink alcohol, didn't smoke, didn't eat meat, and even their children were adopted!</p>

          <div align="center">
            <table cellpadding="10" cellspacing="10" width="100%">
              <tr>
                <td>No, I am not under <router-link to="/caloric-restriction">caloric restriction</router-link> and I am not a
                  vegetarian.
                </td>
                <td><img alt="Eating at the Cheesecake Factory and the Longhorn" border="0" height="392"
                         src="../assets/food.jpg"
                         width="332"></td>
              </tr>
            </table>
          </div>
        </div>
        <hr size="1" width="80%">

        <blockquote><p align="justify"><strong>Disclaimer:</strong> The information on this page is for informational
          purposes only and should not be used as medical advice. If you wish to undergo any of these treatments or take
          any of the products described in this page, you should talk to your physician. I often make generalizations
          that might not apply to your particular medical history. As <router-link to="/disclaimer">with senescence.info</router-link>,
          use this information at your own risk.</p></blockquote>


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
