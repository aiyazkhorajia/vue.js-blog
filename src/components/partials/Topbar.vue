<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-nav>
        <router-link tag="li" active-class="active" to="/" exact><a>Home</a></router-link>
        <router-link tag="li" active-class="active" to="/posts"><a>Posts</a></router-link>
        <router-link tag="li" active-class="active" to="/create-post"><a>Create Post</a></router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
