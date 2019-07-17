<template>
      <b-container>
        <div>
          <b-card :title="post.title">
            <b-card-text>
              {{ post.body }}
            </b-card-text>
          </b-card>
        </div>
      </b-container>
</template>

<script>
export default {
  data () {
    return {
      currentPost: null,
      post: {},
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      // react to route changes...
    }
  },
  created(){
    this.currentPost = this.$route.params.id ? this.$route.params.id : null;
  },
  mounted(){
    this.fetchPosts();
    //console.log(this.$route.params)
  },
  methods:{
    fetchPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.currentPost)
      .then(response => {
          //console.log('response single, ', response)
          this.post = response.data;
      })
      .catch(error => {
          console.log(error)
      })
      .finally(() => {
          //
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
