<template>
      <b-container>
        <h2>Blog Posts</h2>
        <!-- {{ posts }} -->
        <b-table striped hover
          :items="posts"
          :fields="fields"
        ></b-table>
      </b-container>
</template>

<script>
export default {
  data () {
    return {
      posts: {},
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        fields: [
          { key: 'userId', label: 'User Id', sortable: true, sortDirection: 'desc' },
          { key: 'id', label: 'Id', sortable: true, class: 'text-center' },
          { key: 'title', label: 'Title' },
          { key: 'body', label: 'Description' }
        ],
    }
  },
  mounted(){
    this.fetchPosts();
  },
  methods:{
    fetchPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
          //console.log('response, ', response)
          this.posts = response.data;
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
