<template>
  <div class="hello" style="background-color:#071436">
<!--    <img alt="DNA Logo" src="../assets/hourglass_dna.png" style="width:180px;height:180px;">-->
    <img alt="DNA Logo" src="../assets/senescenceLogo.png" style="height:250px;">
<!--    <h1>Welcome to Senescence.info!</h1>-->
<!--    <p>by Dr. João Pedro de Magalhães</p>-->
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#">Senescence.info</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/home">Home</router-link></b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="About" >
            <b-dropdown-item><router-link to="/vision">A Vision for senescence.info</router-link></b-dropdown-item>
            <b-dropdown-item href="http://jp.senescence.info/">Author Information</b-dropdown-item>
            <b-dropdown-item><router-link to="/disclaimer">Disclaimer, Copyright and Citation</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/external-links">External Links</router-link></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Introduction" >
            <b-dropdown-item><router-link to="/grandparents">The Grandparents of Tomorrow</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/anti-ageing-medicine">Anti-Ageing Medicine</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/physical-immortality-myths">Should we Cure Ageing?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/how-to">How to Become a Biogerontologist</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/books">Biology of Ageing Books</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Biology of Ageing" >
            <b-dropdown-item><router-link to="/ageing-definition">What is Ageing?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/ageing-animals">Animals and Ageing</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/comparative-biology">Comparative Biology of Ageing</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/evolution-of-ageing">The Evolutionary Theory of Ageing</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/ageing-models">Human Ageing Model Systems</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/cell-ageing">Cellular Senescence</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/telomeres-telomerase">Telomeres and Telomerase</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/genetics-of-ageing">Is Ageing Genetic or is it Wear and Tear?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/ageing-theories">Why do we Age?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/causes-of-ageing">Damage-Based Theories</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/programmed-ageing">Programmed Theories</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/ageing-cure">Curing Ageing</router-link></b-dropdown-item>
            <!--            <b-dropdown-item href="#">Curing Ageing and the Science of Immorality</b-dropdown-item>-->
            <!--&lt;!&ndash;            <b-dropdown-item href="#">Godseed</b-dropdown-item> too much on this menu!&ndash;&gt;-->

          </b-nav-item-dropdown>
<!--          <b-nav-item-dropdown text="Genomics" >-->
<!--            <b-dropdown-item href="#tomorrow">GenAge</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">CellAge</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">DrugAge</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">AnAge</b-dropdown-item>-->
<!--            <b-dropdown-item href="#">GenDR?</b-dropdown-item>-->
<!--            <b-dropdown-item href="#tomorrow">LongevityMap</b-dropdown-item>-->
<!--            <b-dropdown-item href="#tomorrow">Digital Ageing Atlas</b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->
          <b-nav-item-dropdown text="Global Perspective">
            <b-dropdown-item ><router-link to='/help-fight-ageing'>How to Help Fight Ageing</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to='/immortality-society'>Immortality and Society</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to='/ageing-glossary'>Glossary</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to ='/ageing-links'>Links</router-link></b-dropdown-item>
            <b-dropdown-item>Who's Who in Gerontology</b-dropdown-item>
            <b-dropdown-item>Social Media</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
    import Books from "./Books";
    export default {
      components: {Books}
    }

</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

