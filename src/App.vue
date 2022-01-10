<template>
  <div id="app">
    <shell></shell>
    <Bibliography />
  </div>
</template>

<script>
import Shell from './components/Shell.vue'
import Footer from "./components/AppFooter";
import Bibliography from "./components/Bibliography";

export default {
  name: 'app',
  components: {
    Bibliography,
    Footer,
    Shell
  }
}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
/*margin-top: 20px;*/
}

</style>
