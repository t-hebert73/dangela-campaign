<template>
    <div>
        <div v-if="preFormText" class="alert alert-success"> {{ preFormText }}</div>
        <p v-else-if="!preFormText && showSignup">Don't have an account? <a class="sign-up" @click="changeComponent" tabindex="1">Sign up here.</a></p>

        <b-form @submit="login">
            <b-form-group>
                <label for="sign_in_email" class="control-label">E-Mail Address</label>

                <b-input v-validate="{ required: true }" v-model="user.email" id="sign_in_email" type="email" class="form-control" name="email" value="" autofocus></b-input>

                <form-error v-if="serverErrors.email" :errors="serverErrors">{{
                    serverErrors.email[0] }}
                </form-error>
                <span class="form-text text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </b-form-group>

            <b-form-group>
                <label for="sign_in_password" class="control-label">Password</label>

                <b-input v-validate="{ required: true }" v-model="user.password" id="sign_in_password" type="password" class="form-control" name="password"></b-input>

                <form-error v-if="serverErrors.password" :errors="serverErrors">{{
                    serverErrors.password[0] }}
                </form-error>
                <span class="form-text text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </b-form-group>

            <b-button type="submit" class="btn-primary">Login</b-button>
        </b-form>

    </div>
</template>

<script>
  export default {
    name: 'sign-in',

    $_veeValidate: {
      validator: 'new' // give me a new validator each time.
    },

    props: {
      preFormText: '',
      showSignup: {
        default: true
      }
    },

    data () {
      return {
        user: {
          name: '',
          password: ''
        },
        loading: true,
        serverErrors: []
      }
    },

    created () {

      // always need the newest csrfToken. This feels wrong
      window.axios.get('/csrfToken').then(response => {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrfToken
        this.loading = false
      })

    },

    methods: {

      /**
       * Pass to the parent the sign up component info
       */
      changeComponent() {
        let componentInfo = {
          'title': 'Sign Up',
          'component': 'sign-up'
        }
        this.$emit('componentChanged', componentInfo)
      },

      /**
       * Login the user.
       */
      login (evt) {
        evt.preventDefault();

        let self = this
        self.loading = true
        this.$ls.remove('accessToken')
        this.$ls.remove('user')

        this.$validator.validateAll().then((result) => {

          if (result) {

            let loginData = {
              email: self.user.email,
              password: self.user.password
            }

            window.axios.post('/login', loginData).then(response => {

              let loginSessionTime = 24 * 60 * 60 * 1000 // time before local storage variable expires in milliseconds

              this.$ls.set('accessToken', response.data.tokenInfo.accessToken, loginSessionTime)
              this.$ls.set('user', JSON.stringify(response.data.user), loginSessionTime)

              let user = JSON.parse(this.$ls.get('user'))

              // emit loggedIn event so the nav knows to change
              self.$bus.$emit('loggedIn', true)

              self.$router.push({
                name: 'admin.dashboard',
                params: {
                  flash: {
                    message: 'Hey ' + user.name + '! You are logged in!', type: 'success'
                  }
                }
              })

/*              window.axios.get(self.API_ROUTE + 'permissions/get-user-permissions').then(response => {
                this.$ls.set('permissions', response.data.permissions)


              })*/

            }).catch(error => {

              flash(error.response.data.message, 'error')
               if (error.response.status == 401) {
                 flash(error.response.data.message, 'error')
               }
               else {
                 flash(error.response.data.errors.email[0], 'error')
               }
              self.alertLogin()
            })

            return
          }
          self.loading = false
        })
      },
      /**
       * Flash the login box to alert the user.
       */
      alertLogin () {
        this.loading = false
        $('.modal-body').addClass('alert-danger')

        setTimeout(function () {
          $('.modal-body').removeClass('alert-danger')
        }, 2000)
      }
    }
  }
</script>

<style lang="scss" scoped>
    form{
        position: relative;
        z-index: 10;
    }
</style>