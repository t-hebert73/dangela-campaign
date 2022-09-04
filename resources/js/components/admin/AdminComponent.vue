<template>

    <div v-if="this.authenticated()">

        <div class="container-fluid admin-section">
            <div class="row">
                <admin-sidebar></admin-sidebar>
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
  import AdminSidebar from './layouts/AdminSidebar'
  import AdminHeader from './layouts/AdminHeader'
  export default {
    components: {AdminHeader, AdminSidebar},
    props: {
      flash: {
        message: '',
        type: ''
      },
      title: ''
    },

    metaInfo () {
      return {
        title: 'Admin',
        titleTemplate: '%s | ' + this.THEME_NAME,
        meta: [
          {
            name: 'robots',
            content: 'noindex, nofollow'
          }
        ]
      }
    },

    data () {
      return {}
    },

    created () {

      if (!this.authenticated()) {
        this.$router.push({
          path: '/',
          params: {
            flash: {
              message: 'You must be authenticated to view the admin section. Please log in.',
              type: 'warning'
            }
          }
        })
      }
    },

    methods: {
      /**
       * Returns true if the user is authenticated.
       *
       * @returns {boolean}
       */
      authenticated: function () {
        return (this.$ls.get('user'))
      }
    }
  }
</script>