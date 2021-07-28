<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('cure')">Can Ageing be Cured?</b-nav-item>
              <b-nav-item @click="goto('shape')">Shaping Up for Long Life</b-nav-item>
              <b-nav-item @click="goto('world')">A World Without Ageing</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
          <blockquote><H2>The Grandparents of Tomorrow</H2></blockquote>
          <blockquote><p align="justify">Why die? There may soon be nothing preventing great-grandparents from being as
            agile in body and mind as their descendants are.</p>

            <p align="justify"><em>Keywords:</em> ageing, biogerontology, geriatrics, gerontology, immortality,
              life-extension, old age, rejuvenation</p></blockquote>

          <hr size="1" width="80%">

          <p align="justify">Imagine that your grandmother looks like a teenager, plays soccer, parties at the clubs all
            night, and works as a venture capitalist. Or imagine your grandfather teaching you the latest high-tech
            computer software in his office, which you hate to visit because of the loud heavy metal music. Such a
            scenario is hard to envision because we are taught to accept aging and the resulting suffering and death as
            an immutable fact of life. We cannot picture our grandparents in better physical shape than we are.
            Nonetheless, aging may one day become nothing more than a scary bedtime story, perhaps one your grandfather
            will tell your grandson after a day of white-water rafting together.</p>
        </div>
        <div ref="cure">
          <blockquote><H2>Can Aging Be Cured?</H2></blockquote>

          <p align="justify"><a href="aging_definition.html">Aging</a> is a "barbaric phenomenon that shouldn't be
            tolerated in polite society," says University of Cambridge gerontologist Aubrey de Grey. However, the more
            than 50% increase in longevity of the past century was due mainly to advancements in the war on infectious
            diseases, not aging. Present <a href="antiaging_science.html">anti-aging treatments</a> do not slow the
            aging process and do not extend lifespan more than quitting smoking, exercising, eating a good diet, or
            heeding ordinary medical advice. The only way to achieve another 50% increase in human longevity is by
            discovering ways to retard the aging process itself.</p>

          <p align="justify">Although human aging remains a largely mysterious process, and scientists still <a
              href="aging_theories.html">debate why we age</a>, there are reasons to think human aging can be
            manipulated, maybe even cured like a disease. Not only some animals live much longer than humans--recent
            estimates that bowhead whales may live over 200 years are a good example--but several higher <a
                href="aging_animals.html">animals appear not to age</a>. None are mammals, though, but examples include
            vertebrates such as certain turtles that do not show signs of aging even after decades of study. While the
            reasons behind the apparent absence of aging in these species remain a subject of debate, they show how <a
                href="aging_animals.html">Nature</a> has already devised ways to make animals live much longer and age
            slower than humans. Like the Wright brothers and other early flight pioneers conducted detailed observations
            of birds and were inspired by them, so can we be inspired by how aging is much slower, and maybe even
            absent, in certain animals. Now the challenge for biomedical research is to do the same in humans.</p>

          <p align="justify">In recent years, many advances in anti-aging science have been made at the <a
              href="cell_aging.html">cellular level</a>. Normal human cells have a built-in program that prevents them
            from replicating more than a predetermined number of times. Using the enzyme <a
                href="telomeres_telomerase.html">telomerase</a>, it is possible to genetically modify human cells to
            overcome their programming and make them divide indefinitely. <a href="antiaging_science.html">Drugs
              targeting telomerase</a> are also being developed, even though telomerase alone does not solve the aging
            problem: Mice genetically modified to produce lots of this enzyme do not live longer. Still, as <a
                href="aging_cure.html">detailed elsewhere</a>, telomerase and similar findings observed in simple <a
                href="aging_models.html">model organisms</a> like yeast showcase that aging at the cellular level can be
            stopped.</p>

          <p align="justify">Genetic engineering can more than triple the longevity of worms and increase by almost 50%
            the lifespan of flies. Results are also promising in mammals: Scientists have extended longevity in mice by
            up to 50% through <a href="genetics_of_aging.html">genetic interventions</a>. If such outcomes could be
            achieved in humans, then it would come to be normal to have grandparents more than 120 years old. Several <a
                href="http://whoswho.senescence.info">companies and academic research groups</a> are conducting research
            aimed at retarding aging by targeting genes and pathways shown in <a href="aging_models.html">model
              organisms</a> to regulate aging. If the breakthroughs of recent years are anything to go by, it is likely
            that we will see several-fold longevity increases in mice within the next decade or so.</p>

          <p align="justify">Achieving similar results in humans will be harder: Scientists have already identified <a
              href="genetics_of_aging.html">genes that appear to accelerate human aging</a>, but they have yet to find
            genes with the opposite effect. Variants in human genes have been shown to have modest effects on longevity.
            With the sequence of the human genome and the decreasing costs of sequencing more genomes, we are now in a
            better position to find out more about the genetics aging in animals as well as in humans. Drawing from the
            technological breakthroughs of the past 10 or 20 years, researchers are likely to develop methods to
            considerably delay human aging within the next few decades. "The prospects of dramatically increasing human
            longevity are excellent," declares Professor Steven Austad, of the University of Texas Health Science
            Center.</p>

          <p align="justify">Although some scientists argue that aging will never be cured and our grandparents will
            continue to fit our stereotypes, many others remain confident we will soon learn how to modulate the human
            aging process. "I believe our generation is the first to be able to map a possible route to individual
            immortality," says William Haseltine, former CEO of Human Genome Sciences Inc. in Rockville, Maryland. </p>
        </div>
        <div ref="shape">
          <blockquote><H2>Shaping Up for Long Life</H2></blockquote>

          <p align="justify">One method available today might delay human aging: <a href="caloric_restriction.html">Caloric
            restriction</a>, which simply means a diet with fewer calories that still delivers the required nutritional
            content. Experiments have shown longevity increases of more than 50% in certain mammals and other beneficial
            effects, but most people find it hard to stick to such a diet and there are negative side-effects. If
            science is to extend human longevity, it will have to do so by extending the healthy lifespan while
            preserving youth and vitality, not by prolonging the time spent in age-related disability. The extra years
            must allow future grandparents to enjoy life rather than just cling to it.</p>

          <p align="justify">It is unlikely, but possible, that a <a href="aging_cure.html">cure for aging</a> and
            associated age-related diseases will appear suddenly. Since scientists have already developed new genetic
            interventions to delay aging in animals, therapies aimed at human aging are expected to gradually progress
            in power and efficiency. If a therapy could slow human aging by 50%, for instance, we would have 30 or 40
            more years of life. In that time, new discoveries could be made that would allow us to live even longer. The
            cycle could continue until a true <a href="aging_cure.html">cure for aging</a> was discovered. "It's
            possible that some people alive now may still be alive 400 years from now," claims gerontologist Michal
            Jazwinski of Louisiana State University Health Sciences Center. But what would be the consequences of
            extended human longevity or a real cure for aging?</p>
        </div>
        <div ref="world">
          <blockquote><H2>A World without Aging</H2></blockquote>

          <p align="justify">Suppose that we eliminate a majority of age-related diseases, such as cancer and heart
            disease, and can maintain the vitality of the body indefinitely. Under these circumstances, everyone can
            expect an average lifespan of more than 1,000 years and a virtually unlimited maximum lifespan. Estimating a
            future average lifespan of 1,000 years is based on removing age-related mortality from current statistics:
            accidents and other causes of death still remain, of course. Aubrey de Grey believes that human life
            expectancy at birth in 2100 will be 5,000 years, however. He takes into consideration not only anti-aging
            discoveries but also changes in technology and attitudes as people strive to reduce or avoid risk and make
            dangerous activities safer. </p>

          <p align="justify">Our first instinct when we consider a world without aging might be a concern about <a
              href="immortal_society.html">overpopulation</a>. Yet we cannot see breakthroughs in aging research as
            isolated events. Technology evolves; civilization evolves. For example, worldwide agricultural output has
            more than doubled in the past 50 years. In fact, future problems resulting from overpopulation have been
            widely touted for decades, most famously in the 1970s ("Mathusianism"). These warnings have always proven
            wrong, as the proponents did not account for advances in food, energy, transport and renewable technology.
            Of course overpopulation in some regions, such as the southeast Asia, might be aggravated by life extension
            technology. Even so, letting people suffer and die of aging or disease to control overpopulation is
            repugnant and ethically unacceptable, so other solutions must be sought--and humans have a History of
            finding solutions. </p>

          <p align="justify">Another issue related to an unlimited lifespan is the ability of a 200-year-old human to
            absorb new ideas. If not, we would have age differences in the mind instead of age differences in the body,
            which could lead to cultural stagnation. As German physicist Max Planck once put it, "A new scientific truth
            does not triumph by convincing its opponents and making them see the light, but rather because its opponents
            die, and a new generation grows up that is familiar with it." </p>

          <p align="justify">There is also the danger that people considered threats--someone like a Stalin or a Fidel
            Castro--will remain in power much longer than they would if they faded away or died because of aging.
            Prisoners convicted of violent crimes would eventually be released and, as they would keep young bodies,
            could continue to pose a threat. A more in-depth discussion of possible concerns of curing aging is included
            <a href="physical_immortality_myths.html">elsewhere</a>. </p>

          <p align="justify">Delayed aging will lead to huge <a href="immortal_society.html">social changes</a>, and
            perhaps even to some bizarre possibilities: your children dating your grandparents' friends, for example, or
            your children looking younger than your great-grandchildren. Age stratification in the population will
            change or disappear, and with it, many of our preconceived ideas. But civilization continually evolves to
            encompass new ideas and new possibilities. Most important of all, in defeating aging we will have eliminated
            one of the <a href="death_and_aging_fears.html">greatest causes of suffering, pain and death</a>. </p>

          <p align="justify">Elderly people in an aging-free tomorrow will be extremely productive, changing careers
            from time to time throughout their lives. They will have the experiences of a lifetime--or two lifetimes, or
            three, or twenty--combined with a young physique. The burden of age-related diseases on health care will
            disappear. That is why the grandparents of tomorrow will live longer and happier lives. You and I are the
            grandparents of tomorrow. With hard work, <a href="gerontology.html">scientific research</a>, <a
                href="help_fight_aging.html">anti-aging advocacy</a> and a bit of luck, we may be around for centuries
            to come.</p>

          <hr size="1" width="60%">
        </div>
        <blockquote><p align="justify"><strong>Notice:</strong> This article is an adapted and updated version of
          "Winning the War Against Aging," originally published in the March-April 2003 issue of THE FUTURIST. Used with
          permission from the World Future Society, 7910 Woodmont Avenue, Suite 450, Bethesda, Maryland 20814.
          Telephone: 301/656-8274; Fax: 301/951-0394; <a href="http://www.wfs.org">http://www.wfs.org</a></p>
        </blockquote>

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
