<template>
  <div id="app">
    <topbar-view/>
    <router-view/>
  </div>
</template>

<script>
import Topbar from './components/partials/Topbar'
export default {
  name: 'App',
  components:{
    'topbar-view' : Topbar
  }
}
</script>

<style>
</style>
