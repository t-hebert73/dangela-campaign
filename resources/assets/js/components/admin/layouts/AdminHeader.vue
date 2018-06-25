<template>
    <header>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Henry D'Angela Campaign</a>

            <ul class="navbar-nav flex-row px-3">
                <li class="nav-item mr-3">
                    <router-link :to="viewSiteAndAdminRoute" class="nav-link" exact><span v-if="isAdminSection">View Website</span><span v-else>Admin Portal</span></router-link>
                </li>
                <li class="nav-item text-nowrap">
                    <a class="nav-link hover-pointer" @click.prevent="logout()">Sign out</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
  export default {
    name: 'admin-header',

    props: {
      isAdminSection: false
    },

    computed: {
      viewSiteAndAdminRoute() {
        if(this.isAdminSection) {
          return {
            path: '/'
          }
        } else {
          return {
            name: 'admin.dashboard'
          }
        }
      }
    },

    methods: {
      /**
       * Log out the user.
       */
      logout () {
        window.axios.post('/logout').then(response => {
          this.$ls.remove('user')
          this.$ls.remove('accessToken')
          this.$router.push({
            path: '/',
            params: {
              flash: {
                message: 'Successfully logged out.', type: 'info'
              }
            }
          })
          // emit loggedIn (set to false) event so the nav knows to change
          this.$bus.$emit('loggedIn', false)
        }).catch(error => {

        })
      }
    }
  }
</script>

<style scoped>

</style>