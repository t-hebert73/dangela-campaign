<template>
    <div class="container">
        <div class="page-content main-area">
            
            <div v-if="alert.message" class="thank-you-message" role="alert">
                <div v-html="alert.message"></div>
            </div>

            <div v-else>
                <h1 class="mb-3">Make A Donation</h1>

                <p>To make a donation fill out the form below, or contact Henry at <em>905-227-8298</em></p>
            </div>

            <div class="alert alert-danger" v-if="serverErrors">
                <li v-for="(error, i) in serverErrors">
                    <span v-if="error[0]">{{ error[0] }}</span>
                </li>
            </div>

            <div v-if="loading" class="loading mb-3 text-center"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Submitting..</div>

            <form v-if="!loading && !formCompleted" @submit.prevent="submitDonationRequest">

                <b-form-group >

                    <label :for="'donation_name'">Name</label>

                    <b-form-input id="donation_name" v-model="donation.name" :required="true"></b-form-input>
                    
                </b-form-group>

                <b-form-group >

                    <label :for="'donation_address'">Address</label>

                    <b-form-input id="donation_address" v-model="donation.address" :required="true"></b-form-input>

                </b-form-group>

                <b-form-group >

                    <label :for="'donation_contact'">Contact #</label>

                    <b-form-input id="donation_contact" v-model="donation.contact" :required="true"></b-form-input>

                </b-form-group>

                <b-button type="submit" variant="primary" class="mb-2">Submit</b-button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'donation-request-page',

    data () {
      return {
        loading: false,
        formCompleted: false,
        alert: {
          message: '',
        },
        serverErrors: null,
        donation: {
          name: '',
          address: '',
          contact: ''
        }
      }
    },

    methods: {

      /**
       * Submits the survey
       */
      submitDonationRequest () {
        let self = this

        self.loading = true
        self.alert.message = null
        self.serverErrors = null

        window.axios.post(self.API_ROUTE + 'form-submissions/donation', self.donation).then(response => {

          self.serverErrors = null
          self.alert.message = response.data.message

          self.donation.name = ''
          self.donation.address = ''
          self.donation.contact = ''

          self.loading = false
          self.formCompleted = true

          if (self.IS_PROD) gtag('event', 'donation_submission');

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
       * @oaram $value
       */
      helpingByChanged(value) {
        if(value === 'other') {
          this.helpingByOtherChosen = true
        } else {
          this.helpingByOtherChosen = false
        }
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