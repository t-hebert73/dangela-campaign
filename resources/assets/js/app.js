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
import BootstrapVue from 'bootstrap-vue'
import { VueMasonryPlugin } from 'vue-masonry'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-ls'
import VueSweetalert2 from 'vue-sweetalert2'
import VueEditor from 'vue2-editor'
import moment from 'moment' // time formatting

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'font-awesome/scss/font-awesome.scss'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueMasonryPlugin)
Vue.use(VeeValidate)
Vue.use(VueSweetalert2)

Vue.prototype.moment = moment

let lsOptions = {
  namespace: 'vuejs__'
}

Vue.use(VueLocalStorage, lsOptions)
Vue.use(VueEditor)

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

const BASE_PATH = (process.env.NODE_ENV === 'production')
  ? 'alescosalon.herokuapp.com'
  : 'http://localhost:8000'

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
      return "Henry D'angela"
    }
  },
  BASE_PATH: {
    get: function () {
      return BASE_PATH
    }
  },
  API_ROUTE: {
    get: function () {
      return '/api/'
    }
  }
})

Vue.component('main-app', require('./components/MainApp.vue').default)
Vue.component('admin-component',
  require('./components/admin/AdminComponent.vue').default)

Vue.component('main-header', require('./components/layouts/MainHeader.vue').default)
Vue.component('main-menu', require('./components/widgets/menu/MainMenu.vue').default)
Vue.component('main-footer', require('./components/layouts/MainFooter.vue').default)

const routes = [
  {
    path: '/login',
    name: 'pages.login',
    component: require('./components/page-templates/LoginPage.vue').default
  },
  {
    path: '/admin',
    name: 'admin.dashboard',
    component: require('./components/admin/Dashboard.vue').default
  },
  {
    path: '/admin/survey-submissions',
    name: 'survey-submissions.index',
    component: require('./components/admin/survey-submissions/SurveySubmissionList.vue').default,
    props: true
  },
  {
    path: '/admin/survey-submissions/:id',
    name: 'survey-submissions.show',
    component: require('./components/admin/survey-submissions/SurveySubmissionShow.vue').default,
    props: true
  },
  {
    path: '/admin/sign-requests',
    name: 'sign-requests.index',
    component: require('./components/admin/sign-requests/SignRequestList.vue').default,
    props: true
  },
  {
    path: '/admin/sign-requests/:id',
    name: 'sign-requests.show',
    component: require('./components/admin/sign-requests/SignRequestShow.vue').default,
    props: true
  },
  {
    path: '/admin/volunteers',
    name: 'volunteers.index',
    component: require('./components/admin/volunteers/VolunteerList.vue').default,
    props: true
  },
  {
    path: '/admin/volunteers/:id',
    name: 'volunteers.show',
    component: require('./components/admin/volunteers/VolunteerShow.vue').default,
    props: true
  },
  {
    path: '/admin/donations',
    name: 'donations.index',
    component: require('./components/admin/donations/DonationList.vue').default,
    props: true
  },
  {
    path: '/admin/donations/:id',
    name: 'donations.show',
    component: require('./components/admin/donations/DonationShow.vue').default,
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: require('./components/page-templates/HomePage.vue').default
  },
  {
    path: '/bio',
    name: 'bio',
    component: require('./components/page-templates/BioPage.vue').default
  },
  {
    path: '/community-involvement',
    name: 'community-involvement',
    component: require('./components/page-templates/CommunityInvolvementPage.vue').default
  },
  {
    path: '/political-experience',
    name: 'political-experience',
    component: require('./components/page-templates/PoliticalExperiencePage.vue').default
  },
  {
    path: '/survey',
    name: 'survey',
    component: require('./components/page-templates/SurveyPage.vue').default
  },
  {
    path: '/sign-request',
    name: 'sign-request',
    component: require('./components/page-templates/SignRequest.vue').default
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: require('./components/page-templates/VolunteerRequest.vue').default
  },
  {
    path: '/donate',
    name: 'donation',
    component: require('./components/page-templates/DonationRequest.vue').default
  },
  {
    path: '/accomplishments/mayor',
    name: 'mayor-accomplishments',
    component: require('./components/page-templates/MayorAccomplishmentsPage.vue').default
  },
  {
    path: '/accomplishments/regional-councillor',
    name: 'regional-councillor-accomplishments',
    component: require('./components/page-templates/RegionalCouncillorAccomplishmentsPage.vue').default
  },
  {
    path: '/supports',
    name: 'supports',
    component: require('./components/page-templates/SupportsPage.vue').default
  },
  {
    path: '/fundraiser',
    name: 'fundraiser',
    component: require('./components/page-templates/FundraiserPage.vue').default
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router

}).$mount('#main_app')