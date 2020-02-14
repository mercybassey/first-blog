<template>
  <div id="app">
     <app-header />
     <router-view/>
  </div>
</template>

<script>
// import dashboard from '@/components/dashboard/dashboard.vue'
import header from './components/header/header.vue'
export default {
  components:{
    'app-header': header
  }
}
</script>

<style>

</style>
