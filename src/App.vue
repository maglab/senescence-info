<template>
  <div id="app">
    <shell></shell>
  </div>
</template>

<script>
import Shell from './components/Shell.vue'

export default {
  name: 'app',
  components: {
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
}

body {
  margin: 0;
}

ul {
  margin: 0;
}
</style>
