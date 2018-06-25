<template>

    <div>
        <admin-header v-if="loggedIn" :isAdminSection="isAdminSection"></admin-header>
        <main-header v-if="!isAdminSection"></main-header>

        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>

        <main-footer  v-if="!isAdminSection"></main-footer>

        <flash :timeout="4000" :display-icons="true"></flash>
    </div>

</template>

<script>
  import AdminHeader from './admin/layouts/AdminHeader'
  export default {
    components: {AdminHeader},
    data () {
      return {
        loggedIn: false,
        isAdminSection: false
      }
    },

    // watch for route changes and determine if we are at /admin
    watch: {
      '$route': function (route) {
        this.determineAdminSection(route.path)
      }
    },

    mounted () {

      // set logged in variables if user is logged in
      if (this.$ls.get('user')) {
        this.setLoggedInVars(true)
      } else {
        this.setLoggedInVars(false)
      }

      // catch loggedIn events to trigger nav change
      this.$bus.$on('loggedIn', (loggedIn) => {
        this.setLoggedInVars(loggedIn)
      })

      // determine if we are at /admin or not
      this.determineAdminSection(this.$route.path)

    },

    methods: {
      /**
       * Sets the necessary logged in variables for the nav to function correctly based on passed boolean
       */
      setLoggedInVars (loggedIn) {
        if (loggedIn) {
          this.loggedIn = true
        } else {
          this.loggedIn = false
        }
      },

      /**
       * Determines if the passed route is an admin route
       */
      determineAdminSection (route) {
        let currentRouteArray = route.split('/')
        if (currentRouteArray[1] === 'admin') {
          this.isAdminSection = true
          //this.headerClass = 'admin'
        } else {
          this.isAdminSection = false
          if (this.loggedIn) {
            //this.headerClass = 'admin shrink'
          }
        }
      }
    }
  }
</script>
