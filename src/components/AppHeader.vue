<template>
  <div class="hello">
    <img alt="DNA Logo" src="../assets/dnaLogo.png">
    <h1>Welcome to Senescence.info!</h1>
    <div>
      <b-navbar type="light" variant="light">
        <b-navbar-nav>
          <b-nav-item><router-link to="/home">Home</router-link></b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="About" >
            <b-dropdown-item><router-link to="/vision">A Vision for senescence.info</router-link></b-dropdown-item>
<!--            <b-dropdown-item href="http://jp.senescence.info/">Author Information</b-dropdown-item>-->
            <b-dropdown-item><router-link to="/disclaimer">Disclaimer, Copyright and Citation</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/external-links">External Links</router-link></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Introduction" >
            <b-dropdown-item><router-link to="/grandparents">The Grandparents of Tomorrow</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/anti-ageing-medicine">Anti-Ageing Medicine</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/cure-ageing">Should we Cure Ageing?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/how-to">How to Become a Biogerontologist</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/books">Biology of Ageing Books</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Biology of Ageing" >
            <b-dropdown-item><router-link to="/ageing-definition">What is Ageing?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/ageing-animals">Animals and Ageing</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/comparative-biology">Comparative Biology of Ageing</router-link></b-dropdown-item>
            <b-dropdown-item href="#">The Evolutionary Theory of Ageing</b-dropdown-item>
            <b-dropdown-item href="#">Human Ageing Model Systems</b-dropdown-item>
            <b-dropdown-item href="#">Is Ageing Genetic or is it Wear and Tear?</b-dropdown-item>
            <b-dropdown-item href="#tomorrow">Why do we Age?</b-dropdown-item>
            <b-dropdown-item href="#">Anti-Ageing Medicine</b-dropdown-item>
            <b-dropdown-item href="#">Should we Cure Ageing?</b-dropdown-item>
            <!--            <b-dropdown-item href="#">Curing Ageing and the Science of Immorality</b-dropdown-item>-->
            <!--&lt;!&ndash;            <b-dropdown-item href="#">Godseed</b-dropdown-item> too much on this menu!&ndash;&gt;-->

          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Genomics" >
            <b-dropdown-item href="#tomorrow">GenAge</b-dropdown-item>
            <b-dropdown-item href="#">CellAge</b-dropdown-item>
            <b-dropdown-item href="#">DrugAge</b-dropdown-item>
            <b-dropdown-item href="#">AnAge</b-dropdown-item>
            <b-dropdown-item href="#">GenDR?</b-dropdown-item>
            <b-dropdown-item href="#tomorrow">LongevityMap</b-dropdown-item>
            <b-dropdown-item href="#tomorrow">Digital Ageing Atlas</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Global Perspective">
            <b-dropdown-item href="#tomorrow">How to Help Fight Ageing</b-dropdown-item>
            <b-dropdown-item href="#">Immortality and Society</b-dropdown-item>
            <b-dropdown-item href="#">Gloassary</b-dropdown-item>
            <b-dropdown-item href="#">Bibliogrpahy</b-dropdown-item>
            <b-dropdown-item href="#">Links</b-dropdown-item>
            <b-dropdown-item href="#tomorrow">Who's Who in Gerontology</b-dropdown-item>
            <b-dropdown-item href="#tomorrow">Social Media</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
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

