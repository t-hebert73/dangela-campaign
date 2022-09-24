/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import Vue from 'vue';

window.Vue = require('vue')
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import { VueMasonryPlugin } from 'vue-masonry'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-ls'
import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment' // time formatting

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'font-awesome/scss/font-awesome.scss'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueMasonryPlugin)
Vue.use(VeeValidate)
Vue.use(VueSweetalert2)
Vue.use(VueMeta)

Vue.prototype.moment = moment

let lsOptions = {
  namespace: 'vuejs__'
}

Vue.use(VueLocalStorage, lsOptions)

window.vue = Vue

// vue-flash setup
/**
 * Our Vuejs event handler which we will be using for flash messaging
 * @type  {Vue}
 */
window.events = new Vue()

/**
 * Our Flash function which will be used to add new flash events to our event
 * handler
 *
 * @param    String message Our alert message
 * @param    String type    The type of alert we want to show
 */
window.flash = function (message, type) {
  window.events.$emit('flash', message, type)
}

Vue.component('flash', require('vue-flash').default)

// set all subsequent axios requests to have access token
window.axios.interceptors.request.use(function (config) {
  if (Vue.prototype.$ls.get('accessToken')) {
    config.headers.common['Authorization'] = 'Bearer ' +
      Vue.prototype.$ls.get('accessToken')
  }
  return config
})

// Event Bus to allow emitting and receiving events in different components
// Also set global api route variable
var EventBus = new Vue()
// Add to Vue properties by exposing a getter for $bus
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  },
  THEME_NAME: {
    get: function () {
      return "Henry D'Angela"
    }
  },
  API_ROUTE: {
    get: function () {
      return '/api/'
    }
  },
  IS_PROD: {
    get: function() {
      return (process.env.NODE_ENV === 'production')
    }
  }
})

Vue.component('main-app', require('./components/MainApp.vue').default)

Vue.component('main-header', require('./components/layouts/MainHeader.vue').default)
Vue.component('main-menu', require('./components/widgets/menu/MainMenu.vue').default)
Vue.component('main-footer', require('./components/layouts/MainFooter.vue').default)

const routes = [
  {
    path: '/login',
    name: 'pages.login',
    component: () => import(/* webpackChunkName: "login" */'./components/page-templates/LoginPage.vue'),
  },
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/Dashboard.vue'),
  },
  {
    path: '/admin/survey-submissions',
    name: 'survey-submissions.index',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/survey-submissions/SurveySubmissionList.vue'),
    props: true
  },
  {
    path: '/admin/survey-submissions/:id',
    name: 'survey-submissions.show',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/survey-submissions/SurveySubmissionShow.vue'),
    props: true
  },
  {
    path: '/admin/sign-requests',
    name: 'sign-requests.index',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/sign-requests/SignRequestList.vue'),
    props: true
  },
  {
    path: '/admin/sign-requests/:id',
    name: 'sign-requests.show',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/sign-requests/SignRequestShow.vue'),
    props: true
  },
  {
    path: '/admin/volunteers',
    name: 'volunteers.index',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/volunteers/VolunteerList.vue'),
    props: true
  },
  {
    path: '/admin/volunteers/:id',
    name: 'volunteers.show',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/volunteers/VolunteerShow.vue'),
    props: true
  },
  {
    path: '/admin/donations',
    name: 'donations.index',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/donations/DonationList.vue'),
    props: true
  },
  {
    path: '/admin/donations/:id',
    name: 'donations.show',
    component: () => import(/* webpackChunkName: "admin" */'./components/admin/donations/DonationShow.vue'),
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: require('./components/page-templates/HomePage.vue').default,
  },
  {
    path: '/bio',
    name: 'bio',
    component: () => import(/* webpackChunkName: "bio" */'./components/page-templates/BioPage.vue'),
  },
  {
    path: '/community-involvement',
    name: 'community-involvement',
    component: () => import(/* webpackChunkName: "community-involvement" */'./components/page-templates/CommunityInvolvementPage.vue'),
  },
  {
    path: '/political-experience',
    name: 'political-experience',
    component: () => import(/* webpackChunkName: "political-experience" */'./components/page-templates/PoliticalExperiencePage.vue'),
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import(/* webpackChunkName: "survey" */'./components/page-templates/SurveyPage.vue'),
  },
  {
    path: '/sign-request',
    name: 'sign-request',
    component: () => import(/* webpackChunkName: "sign-request" */'./components/page-templates/SignRequest.vue'),
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: () => import(/* webpackChunkName: "volunteer" */'./components/page-templates/VolunteerRequest.vue'),
  },
  {
    path: '/donate',
    name: 'donation',
    component: () => import(/* webpackChunkName: "donation" */'./components/page-templates/DonationRequest.vue'),
  },
  {
    path: '/accomplishments/mayor',
    name: 'mayor-accomplishments',
    component: () => import(/* webpackChunkName: "mayor-accomplishments" */'./components/page-templates/MayorAccomplishmentsPage.vue'),
  },
  {
    path: '/accomplishments/regional-councillor',
    name: 'regional-councillor-accomplishments',
    component: () => import(/* webpackChunkName: "mayor-regional-councillor-accomplishments" */'./components/page-templates/RegionalCouncillorAccomplishmentsPage.vue'),
  },
  {
    path: '/supports',
    name: 'supports',
    component: () => import(/* webpackChunkName: "supports" */'./components/page-templates/SupportsPage.vue'),
  },
  // {
  //   path: '/fundraiser',
  //   name: 'fundraiser',
  //   component: require('./components/page-templates/FundraiserPage.vue').default
  // },
  { path: "*", component: () => import(/* webpackChunkName: "page-not-found" */'./components/page-templates/PageNotFound.vue'), }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router

}).$mount('#main_app')