import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoForm from '@/components/TodoForm'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TodoForm',
      name: 'TodoForm',
      component: TodoForm,
      props: true
    },
    {
      path: '/Home',
      name: '/Home',
      component: Home,
      props: true
    }
  ]
})
