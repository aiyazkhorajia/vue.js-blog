<template>
  <div id="app">
    <b-container>
      <topbar-view/>
      <router-view/>
    </b-container>
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
.theme-color{
  background-color: burlywood;
}
</style>
