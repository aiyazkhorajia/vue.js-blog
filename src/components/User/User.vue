<template>
      <b-container>
        <div>
          <h1>User View</h1>
            <router-link to="/user/profile">Profile</router-link>
            <router-link to="/user/changepassword">Change Password</router-link>
        </div>
        <b-card>
          <router-view></router-view>
        </b-card>
      </b-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
