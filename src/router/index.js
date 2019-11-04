import Vue from 'vue'
import VueRouter from 'vue-router'
import AppTableCounts from '../views/table/AppTableCounts.vue'
import AppTableInhabitans from '../views/table/AppTableInhabitans.vue'
import AppTableEemployee from '../views/table/AppTableEemployee.vue'
import AppTableBlog from '../views/table/AppTableBlog.vue'
import AppTableMessages from '../views/table/AppTableMessages.vue'
import AppTableSettings from '../views/table/AppTableSettings.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/counts',
    name: 'Счетчики',
    component: AppTableCounts
  },
  {
    path: '/inhabitans',
    name: 'Жители',
    component: AppTableInhabitans
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/employee',
    name: 'Сотрудники',
    component: AppTableEemployee
  },
  {
    path: '/blog',
    name: 'Блог',
    component: AppTableBlog
  },
  {
    path: '/messages',
    name: 'Сообщения',
    component: AppTableMessages
  },
  {
    path: '/settings',
    name: 'Настройки',
    component: AppTableSettings
  }
]
})
