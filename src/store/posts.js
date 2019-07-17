import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  posts:[],
  loading: false
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  saveposts(state, data) {
    state.posts = data;
  },
  setLoading(state, data) {
    state.loading = data;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  fetchPosts({ commit }){
    commit("setLoading", true)
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Content-type': 'application/json',
        'X-Forwarded-Proto': 'https'
      }
    })
    .then(response => {
        console.log(response.data);
        commit("saveposts", response.data);
        //this.posts = response.data;
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
      commit("setLoading", false)
    })
  },
  // setLoading({ commit }, status) {
  //   commit("setLoading", status)
  // }
}

// getters are functions
const getters = {
  posts: state => state.posts,
  loading: state => state.loading
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
