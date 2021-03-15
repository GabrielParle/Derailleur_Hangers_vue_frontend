import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hangers from '@/components/Hangers'
import NewHanger from '@/components/NewHanger'
import EditHanger from '@/components/EditHanger'
import FindHanger from '@/components/FindHanger'

Vue.use(Router)

console.log("are you runnning")

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hangers',
      name: 'Hangers',
      component: Hangers
    },
    {
      path: '/hangers/new',
      name: 'NewHanger',
      component: NewHanger
    },
    {
      path: '/hangers/:id',
      name: 'EditHanger',
      component: EditHanger
    },
    {
      path: '/findhanger',
      name: 'FindHanger',
      component: FindHanger
    }
  ]
})
