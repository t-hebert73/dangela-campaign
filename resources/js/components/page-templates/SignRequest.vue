<template>
    <div class="container">
        <div class="page-content main-area">
            
            <div v-if="alert.message" class="thank-you-message" role="alert">
                <div v-html="alert.message"></div>
            </div>

            <div v-else>
                <h1 class="mb-3">Sign Request</h1>

                <p class="mb-4">Request a sign.</p>
            </div>

            <div class="alert alert-danger" v-if="serverErrors">
                <li v-for="(error, i) in serverErrors">
                    <span v-if="error[0]">{{ error[0] }}</span>
                </li>
            </div>

            <div v-if="loading" class="loading mb-3 text-center"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Submitting..</div>

            <form v-if="!loading && !formCompleted" @submit.prevent="submitSignRequest">

                <b-form-group >

                    <label :for="'sign_request_name'">Name</label>

                    <b-form-input id="sign_request_name" v-model="signRequest.name" :required="true"></b-form-input>
                    
                </b-form-group>

                <b-form-group >

                    <label :for="'sign_request_number'">Street Number</label>

                    <b-form-input id="sign_request_number" v-model="signRequest.streetNumber" :required="true"></b-form-input>

                </b-form-group>

                <b-form-group >

                    <label :for="'sign_request_address'">Street Address</label>

                    <b-form-input id="sign_request_address" v-model="signRequest.streetAddress" :required="true"></b-form-input>

                </b-form-group>

                <b-form-group >

                    <label :for="'sign_request_contact'">Contact #</label>

                    <b-form-input id="sign_request_contact" v-model="signRequest.contact" :required="true"></b-form-input>

                </b-form-group>

                <b-button type="submit" variant="primary" class="mb-2">Submit</b-button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'sign-request-page',

    data () {
      return {
        loading: false,
        formCompleted: false,
        alert: {
          message: '',
        },
        serverErrors: null,
        signRequest: {
          name: '',
          streetNumber: '',
          streetAddress: '',
          contact: ''
        }
      }
    },

    methods: {

      /**
       * Submits the sign request
       */
      submitSignRequest () {
        let self = this

        self.loading = true
        self.alert.message = null
        self.serverErrors = null

        window.axios.post(self.API_ROUTE + 'form-submissions/sign-request', {
          name: self.signRequest.name,
          street_number: self.signRequest.streetNumber,
          street_address: self.signRequest.streetAddress,
          contact: self.signRequest.contact
        }).then(response => {

          self.serverErrors = null
          self.alert.message = response.data.message

          self.signRequest.name = ''
          self.signRequest.streetNumber = ''
          self.signRequest.streetAddress = ''
          self.signRequest.contact = ''

          self.loading = false
          self.formCompleted = true

          if (self.IS_PROD) gtag('event', 'signrequest_submission');

        }).catch(error => {
          if (error.response.data.errors) {
            self.serverErrors = error.response.data.errors
          }
          flash(error.response.data.message, 'error')
          self.loading = false
        })

        self.scrollToTop()

        return
      },

      /**
       * Scrolls to the top
       */
      scrollToTop () {

        let scrollTo = this.$el.querySelector('h1')

        if (scrollTo) {
          scrollTo.scrollIntoView(false)
        }

      }
    }
  }
</script>

<style lang="scss" scoped>

    @import '../../../sass/variables';
    @import '../../../sass/responsive';

    .loading{
        color: $brand-primary;
        font-size: 1.5rem;
    }
    
    .thank-you-message{
        min-height: inherit;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    form {

        label {
            font-weight: bold;
        }

        .ranked-options {

            .ranked-option {
                float: left;
                width: 50%;
                margin-bottom: 5px;

                @media #{$mobile} {
                    width: 100%;
                }

                label, input {
                    float: left;
                }

                label {
                    padding: 2px 15px;

                    @media #{$mobile} {
                        font-size: .9rem;
                    }
                }

                input {
                    width: 50px;
                    text-align: center;
                }

                textarea {
                    &.option-extra {
                        width: 400px;
                        text-align: left;
                    }
                }
            }
        }
    }

</style>