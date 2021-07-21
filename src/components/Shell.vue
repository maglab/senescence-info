<template>
    <div>

        <app-header></app-header>
      <br>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from "./AppFooter";

    export default {
        name: 'shell',
        components: {
          AppFooter,
            AppHeader
        }
    }
</script>

<style scoped>

</style>
