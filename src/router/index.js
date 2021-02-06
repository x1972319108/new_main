import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Second from '../views/second.vue'
import Bottom from '../components/bottom.vue'
import about from '../views/About.vue'
import third from '../views/third.vue'
import login from '../views/login.vue'
import test from '../views/test.vue'
import parameters from '../views/parameters.vue'

Vue.use(VueRouter)

  const routes = [
	  {
		  path:'/',
		  name:'Index',
      component:Index,
      children:[
        {
          path: '/home',
          component: Home
        },
        {
          path: '/about/:num',
          component: about
        },
        {
          path: '/second',
          component :Second
        },
        {
          path:'/test',
          component: test
        },
		{
			path:'/parameters',
			component: parameters
		}
      ]
    },
    {
      path: '/third',
      component: third
    },
    {
      path: '/login',
      component: login
    },
	  {
		path:'/second',
		name:'Second',
		component: Second
	  },
	 {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path:'/parameters',
	component: parameters
  }
]
new Vue({
  el:'.body',
  router,
  render:h => h(Index)
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
