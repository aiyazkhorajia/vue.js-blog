<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Blog</b-navbar-brand>
    <b-navbar-nav>
        <b-nav-item><router-link to="/" exact class="link-color">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/posts" class="link-color">Posts</router-link></b-nav-item>
        <b-nav-item><router-link to="/create-post" class="link-color">Create Post</router-link></b-nav-item>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-form-select
        id="input-3"
        v-model="selectedLanguage"
        :options="languges"
        @change="setLanguage"
      ></b-form-select>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      selectedLanguage: localStorage.getItem("language") ? localStorage.getItem("language") : 'en',
      languges:['en','nl']
    }
  },
  methods:{
    setLanguage(){
        localStorage.setItem("language", this.selectedLanguage);
    }
  }
}
</script>
<style scoped>
.link-color{
  color: white;
}
</style>
