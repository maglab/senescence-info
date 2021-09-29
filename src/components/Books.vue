<!--TODO: Make left nav float-->
<template>
  <b-container fluid="sm">
    <b-row class="text-left">
      <b-col class="text-left" cols="2">
        <div class="sidebar">
          <b-card>
            <b-nav vertical>
              <b-nav-item @click="goto('intro')">Introduction</b-nav-item>
              <b-nav-item @click="goto('beg')">For Beginners</b-nav-item>
              <b-nav-item @click="goto('expert')">For Experts</b-nav-item>
              <b-nav-item @click="goto('classics')">Classics</b-nav-item>
              <b-nav-item @click="goto('conclusion')">Conclusion</b-nav-item>
              <b-nav-item @click="goto('full')">Full List</b-nav-item>
            </b-nav>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div ref="intro">
        <h2>Biology of Aging Books</h2>

        <blockquote>
          <p align="justify">Without false modesty, I recommend that prospective students who wish to <router-link to="/biogerontology-career">work on the biology of aging</router-link> start by reading <strong>senescence.info</strong>'s <router-link to="/gerontology">biology of aging section</router-link>. Still, <router-link to="/gerontology">my own essays</router-link> may not be adequate for everyone. They may be too complicated for some or not detailed enough for others. Therefore, below are a few book recommendations for students who wish learn more about biogerontology in a variety of ways and at a variety of paces. Have in mind, please, that these are books about the biology of aging, not geriatrics.</p>

          <p align="justify"><em>Keywords:</em> education, graduate studies, textbook, undergraduate</p></blockquote>

        <hr width="80%" size="1">
        </div>
        <div ref="beg">
        <blockquote><H2>Science Books for Beginners</H2></blockquote>

        <p align="justify">The first book I read about aging was <strong>Leonard Hayflick's "How and Why We Age,"</strong> and I still think it offers a good introduction to the biology of aging. Although Hayflick emphasizes his own field of <router-link to="/cell-ageing">cellular senescence</router-link>, he covers different areas and theories. If you have a background in biology, then this is an excellent introductory book to the biology of aging, even if it is becoming to be a bit outdated now.</p>

        <p align="justify">A book in the same line is <strong>Robert Arking's "The Biology of Aging: Observations & Principles."</strong> Arking's book is similar to Hayflick's and it is difficult to choose between the two. Since I read Hayflick's book first, I prefer it, but that may be only my bias. Arking's book also provides a good introduction to the biology of aging and has the advantage of being more recent.</p>

        <p align="justify">A third book for beginners is <strong>Steven Austad's "Why We Age: What Science Is Discovering about the Body's Journey Through Life."</strong> Austad uses a more novel-like style, which will appeal to many readers. He also views aging from a different perspective than Hayflick and Arking, so his book may complement the others. On hand I appreciate Austad's overall approach in terms of <router-link to="/comparative-biology">comparative biology</router-link>, yet on the other hand I feel his book offers a slightly more limited view regarding theories and mechanisms of aging. Nonetheless, it is a good introductory book. </p>
        <p align="justify">Overall, choosing between these three books is more a matter of personal taste and background than anything else. If you are in doubt then my advice is to go to a library and check out the three of them before you make a decision.</p>
        </div>
        <div ref="popular">
        <blockquote><H2>Popular Science Books</H2></blockquote>

        <p align="justify">If you lack the background to read scientific books, works like <strong>James Halperin's "The First Immortal"</strong> or <strong>Damien Broderick's "The Last Mortal Generation: How Science Will Alter Our Lives in the 21st Century"</strong> may be more adequate. They do not just talk about aging--Damien Broderick even weaves cosmology and quantum physics into his book--but they remain enjoyable reading experiences that will teach you something about aging along the way.</p>

        <p align="justify">I tried not to feature edited books--i.e., books in which each chapter is written by a different author--in this essay, but I will open one exception. <strong>The Immortality Institute's "The Scientific Conquest of Death: Essays on Infinite Lifespans."</strong> The book is divided into two parts: one more scientific, the other more philosophical dealing with the sociological implications of life-extension and research on aging. Both are intriguing and, while not entirely pop science, could serve as a gentle introduction to research on aging. They also provide a different view of aging in that most contributors are not thinking about understanding aging but rather how to cure it. I contributed a <router-link to="engineering_aging.html">chapter</router-link> to it.</p>
        </div>
        <div ref="expert">
        <blockquote><H2>Books for Experts</H2></blockquote>

        <p align="justify">The best book on aging is <strong>Caleb Finch's "Senescence, Longevity, and the Genome."</strong> It offers the most complete information on the aging process for a <router-link to="/ageing-animals">number of species</router-link>--similar to what Steven Austad does in his book, but with much more detail. It is the sort of book that takes some time to read, not only due to its size but because you want assimilate all the information in it. But believe me it is worth the time as it will take your knowledge regarding aging to a new level. Being a 1990 book, it is starting to show some signs of aging but that should not serve as an excuse for any serious gerontologist not to read it. A classic.</p>

        <p align="justify">One book I very much enjoyed was <strong>Kanungo's "Genes and Aging."</strong> It present a coherent model of the genetics of aging, <router-link to="programmed_aging.html">linking aging and development</router-link> but with many other ideas, that I found quite well-thought and reasonable. Definitely not a beginner's book, but very intriguing and full of good ideas.</p>

        <p align="justify"><strong>Bernard Strehler's "Time, Cells, and Aging"</strong> offers an interesting and complementary view on aging. It follows a similar structure to other books--e.g., Hayflick's and Arking's--featuring demographic models, organ and tissue-level changes, etc., but Strehler's original views on many subjects give it a unique touch. The book loses in its lack of modernity--the 1999 edition has very few changes when compared to earlier versions. Nonetheless, I would recommend reading it if you wish to deepen your knowledge and learn about many of the older experiments and hypotheses in the science of aging.</p>

        <p align="justify">There are many books on aging that cover specific topics. One example is <strong>Michael Fossel's "Reversing Human Aging."</strong> It offers a rather optimistic perspective that the <router-link to="/telomeres-telomerase">telomeres and telomerase</router-link> will cure aging. Though a bit outdated now, it is enjoyable to read for those interested in <router-link to="/cell-ageing">cellular aging</router-link>. I would not recommend it for beginners, though.</p>

        <p align="justify"><strong>Roger Gosden's "Cheating Time"</strong> is a book written from the perspective of an endocrinologist. It offers a different view of aging, including some original thoughts on the <router-link to="programmed_aging.html">endocrine system</router-link>, though I would not recommend it for beginners.</p>

        <p align="justify">If you are searching information on <router-link to="/caloric-restriction">caloric restriction</router-link>, then search no further than <strong>Richard Weindruch's and Roy Walford's "The Retardation of Aging and Disease by Dietary Restriction."</strong> It is still the most complete book on the topic, even if it lacks some of the more recent findings.</p>

        <p align="justify"><strong>Michael Rose's "Evolutionary Biology of Aging,"</strong> as the name implies, deals with the <router-link to="/evolution-of-ageing">evolution of aging</router-link>. It is definitely the best book on the evolution of aging, though it is sometimes hard to follow and not recommended for beginners.</p>
        </div>
        <div ref="classics">
        <blockquote><H2>Classics</H2></blockquote>

        <p align="justify">As for old classics, <strong>Alex Comfort's book "Ageing, the Biology of Senescence"</strong> is still a landmark in the field. It offers a wealth of information, even though somewhat outdated now. For those serious about <router-link to="/gerontology">gerontology</router-link>, Comfort's book is a good addition to the bookshelf.</p>

        <p align="justify"><strong>August Weismann's 19<sup>th</sup> century "Essays Upon Heredity and Kindred Biological Problems"</strong> is another classic, which includes a few excellent essays on aging: "The Duration of Life" and "Life and Death" are good examples, both in volume one. Certainly it is outdated, but his insights, observations, and hypotheses make this book a good read that I recommend for those serious about the biology of aging.</p>

        <p align="justify"><strong>Peter Medawar's "An Unsolved Problem of Biology,"</strong> though mostly famous for its discussion of the evolution of aging, is actually a surprising gem with several wonderful, even if sometimes outdated, suggestions and ideas.</p>
        </div>
        <div ref="conclusion">
        <blockquote><H2>Conclusion</H2></blockquote>

        <p align="justify">In conclusion, I recommend you start by reading Arking's book, end by reading a book on your specific aging field, and do not forget to read Finch's book somewhere along the way. And of course please do not forget to check out <router-link to="/gerontology">my own essays on the subject</router-link>, including my recent primer on the biology of aging chapter which is essentially a more succint <strong>senescence.info</strong> (de Magalhaes, 2011).</p>

        </div>
        <div ref="full">
        <blockquote><H2>The Full List of Mentioned Books</H2></blockquote>

        <blockquote><p align="justify"><strong>Notice:</strong> publisher and publication year refer to the book edition I have read but others may exist.</p></blockquote>

        <hr width="80%" size="1">

        <p align="justify">Arking, Robert; "The Biology of Aging: Observations and Principles" (2006). Oxford University Press, Oxford.</P>

        <p align="justify">Austad, Steven N.; "Why We Age: What Science Is Discovering About the Body's Journey Through Life" (1997). John Wiley & Sons, Inc., NY.</P>

        <p align="justify">Broderick, Damien; "The Last Mortal Generation: How Science Will Alter Our Lives in the 21st Century" (1999). New Holland, Sydney, Australia.</p>

        <p align="justify">Comfort, Alex; "Ageing: The Biology of Senescence" (1964). Routledge & Kegan Paul, London.</p>

        <p align="justify">Finch, Caleb E.; "Senescence, Longevity, and the Genome" (1990). The University of Chicago Press, Chicago and London.</p>

        <p align="justify">Fossel, Michael; "Reversing Human Aging" (1996). William Morrow and Company, New York.</p>

        <p align="justify">Gosden, Roger; "Cheating Time" (1996). W. H. Freeman & Company, New York.</p>

        <p align="justify">Halperin, James L; "The First Immortal" (1998). Del Rey, Random House, NY.</p>

        <p align="justify">Hayflick, Leonard; "How and Why We Age" (1994). Ballantine Books, NY.</P>

        <p align="justify">Kanungo, Madhu Sudan; "Genes and Aging" (1994). Cambridge University Press, Cambridge.</p>

        <p align="justify">Immortality Institute (ed.); "The Scientific Conquest of Death: Essays on Infinite Lifespans" (2004). Libros En Red, Buenos Aires.</p>

        <p align="justify">Medawar, Peter; "An Unsolved Problem of Biology" (1952). H. K. Lewis, London</P>

        <p align="justify">Rose, Michael; "Evolutionary Biology of Aging" (1991). Oxford University Press, New York.</p>

        <p align="justify">Strehler, Bernard; "Time, Cells, and Aging" (1999). Demetriades Brothers, Larnaca.</P>

        <p align="justify">Weindruch, Richard, and Walford, Roy. "The Retardation of Aging and Disease by Dietary Restriction" (1988). Charles C. Thomas, Springfield, IL.</P>

        <p align="justify">Weismann, August; "Essays Upon Heredity and Kindred Biological Problems". Volumes 1 & 2 (1891 & 1892). Claredon Press, Oxford.</P>
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
