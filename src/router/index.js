import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import SinglePost from '@/components/SinglePost'
import User from '@/components/User/User'
import UserProfile from '@/components/User/UserProfile'
import ChangePassword from '@/components/User/ChangePassword'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'SinglePost',
      component: SinglePost
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: CreatePost
    },
    { path: '/user/', component: User,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'changepassword',
          component: ChangePassword
        }
      ]
    }
  ]
})
