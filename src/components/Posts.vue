<template>
      <b-container>
        <h2>{{ $t('Blog Posts') }}</h2>
        <b-table striped hover
          :items="posts"
          :fields="fields"
          :busy="loading"
        >
          <div slot="table-busy" class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
           <!-- A custom formatted column -->
          <template slot="title" slot-scope="data">
            <router-link :to="'/post/' + data.item.id">
              {{ data.item.title }}
            </router-link>
          </template>
          <template slot="action" slot-scope="data">
            <router-link :to="'/post/' + data.item.id">
              Edit
            </router-link>
            <router-link :to="'/post/' + data.item.id">
              Delete
            </router-link>
          </template>
        </b-table>
      </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
        fields: [
          { key: 'userId', label: 'User Id', sortable: true, sortDirection: 'desc' },
          { key: 'id', label: 'Id', sortable: true, class: 'text-center' },
          { key: 'title', label: 'Title' },
          { key: 'body', label: 'Description' },
          { key: 'action', label: 'Action' }
        ],
    }
  },
  computed:{
    ...mapGetters([ "posts", "loading" ])
  },
  mounted(){
    this.fetchPosts();
  },
  methods:{
    ...mapActions([ "fetchPosts" ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
