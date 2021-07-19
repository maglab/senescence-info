<template>
    <div>

        <app-header></app-header>
      <br>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'

    export default {
        name: 'shell',
        components: {
            AppHeader
        }
    }
</script>

<style scoped>

</style>
