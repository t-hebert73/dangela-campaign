<template>
    <div>
        <div v-if="loading">
            loading
        </div>

        <div v-else>

            <p>Already have an account? <a class="sign-in" @click="changeComponent" tabindex="1">Sign in</a></p>

            <b-form @submit="registerUser">
                <b-form-group>
                    <label for="sign_up_name" class="control-label">Name</label>

                    <b-input id="sign_up_name" v-validate="{ required: true }" v-model="user.name" type="text" class="form-control" name="name" value=""></b-input>

                    <form-error v-if="serverErrors.name" :errors="serverErrors">{{ serverErrors.name[0] }}</form-error>
                    <span class="form-text text-danger" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </b-form-group>

                <b-form-group>
                    <label for="sign_up_email" class="control-label">E-Mail Address</label>

                    <b-input id="sign_up_email" v-validate="{ required: true }" v-model="user.email" type="email" class="form-control" name="email" value=""></b-input>

                    <form-error v-if="serverErrors.email" :errors="serverErrors">{{ serverErrors.email[0] }}</form-error>
                    <span class="form-text text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </b-form-group>

                <b-form-group>
                    <label for="sign_up_password" class="control-label">Password</label>

                    <b-input id="sign_up_password" v-validate="{ required: true }" v-model="user.password" type="password" class="form-control" name="password"></b-input>

                    <form-error v-if="serverErrors.password" :errors="serverErrors">{{ serverErrors.password[0] }}</form-error>
                    <span class="form-text text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                </b-form-group>

                <b-form-group>
                    <label for="sign_up_password_confirm" class="control-label">Confirm Password</label>

                    <b-input id="sign_up_password_confirm" v-validate="{ required: true }" :data-vv-as="'password confirmation'" v-model="user.password_confirmation" type="password" class="form-control" name="password_confirmation"></b-input>

                    <form-error v-if="serverErrors.password" :errors="serverErrors">{{ serverErrors.password[1] }}</form-error>
                    <span class="form-text text-danger" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
                </b-form-group>

                <b-form-group>
                    <b-button type="submit" class="btn-primary">Register</b-button>
                </b-form-group>

            </b-form>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'sign-up',

    $_veeValidate: {
      validator: 'new' // give me a new validator each time.
    },

    data () {
      return {
        user: {},
        loading: true,
        preFormText: '',
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

    mounted() {
    },

    methods: {

      /**
       * Pass to the parent the sign in component info
       */
      changeComponent() {
        let componentInfo = {
          'title': 'Sign In',
          'component': 'sign-in',
          'preFormText': this.preFormText
        }
        this.$emit('componentChanged', componentInfo)
      },

      /**
       * Register the user and redirect to login.
       */
      registerUser (evt) {
        evt.preventDefault();

        this.loading = true

        this.$validator.validateAll().then((result) => {

          if (result) {
            window.axios.post('/register', {
              name: this.user.name,
              email: this.user.email,
              password: this.user.password,
              password_confirmation: this.user.password_confirmation

            }).then(response => {
              if (response.data.user !== null) {
                this.preFormText = 'Thanks for signing up. Please log in.'
                this.changeComponent()
              }

            }).catch(error => {
              if (error.response.status === 401) {
                flash(error.response.data.message, 'error')
              }
              else {
                if (error.response.data.errors) {
                  this.serverErrors = error.response.data.errors
                }
              }
              this.loading = false
            })

            return
          }
          this.loading = false
        })
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