<template>
    <div class="container">
        <div class="page-content main-area">
            
            <div v-if="alert.message" class="thank-you-message" role="alert">
                <div v-html="alert.message"></div>
            </div>

            <div v-else>
                <h1 class="mb-3">Volunteer</h1>
            </div>

            <div class="alert alert-danger" v-if="serverErrors">
                <li v-for="(error, i) in serverErrors">
                    <span v-if="error[0]">{{ error[0] }}</span>
                </li>
            </div>

            <div v-if="loading" class="loading mb-3 text-center"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Submitting..</div>

            <form v-if="!loading && !formCompleted" @submit.prevent="submitVolunteerRequest">

                <b-form-group >

                    <label :for="'volunteer_name'">Name</label>

                    <b-form-input id="volunteer_name" v-model="volunteer.name" :required="true"></b-form-input>
                    
                </b-form-group>

                <b-form-group >

                    <label :for="'volunteer_address'">Street Address</label>

                    <b-form-input id="volunteer_address" v-model="volunteer.streetAddress" :required="true"></b-form-input>

                </b-form-group>

                <b-form-group >

                    <label :for="'volunteer_contact'">Contact #</label>

                    <b-form-input id="volunteer_contact" v-model="volunteer.contact" :required="true"></b-form-input>

                </b-form-group>

                <b-form-group >

                    <label :for="'volunteer_helping_by'">Interested in helping by:</label>

                    <b-form-select id="volunteer_helping_by" v-model="volunteer.helpingBy" :required="true" @change="helpingByChanged">
                        <option :value="null">Choose One</option>
                        <option>Delivering Flyers</option>
                        <option>Taking a sign</option>
                        <option>Installing Signs</option>
                        <option value="other">Other (specify)</option>
                    </b-form-select>

                </b-form-group>

                <b-form-group v-if="helpingByOtherChosen">

                    <label :for="'volunteer_helping_by_other'">Please specify:</label>

                    <b-form-input id="volunteer_helping_by_other" v-model="helpingByOther"></b-form-input>

                </b-form-group>

                <b-button type="submit" variant="primary"  class="mb-2">Submit</b-button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'volunteer-request-page',

    data () {
      return {
        loading: false,
        formCompleted: false,
        alert: {
          message: '',
        },
        serverErrors: null,
        volunteer: {
          name: '',
          streetAddress: '',
          contact: '',
          helpingBy: null,
        },
        helpingByOtherChosen: false,
        helpingByOther: ''
      }
    },

    methods: {

      /**
       * Submits the survey
       */
      submitVolunteerRequest () {
        let self = this

        self.loading = true
        self.alert.message = null
        self.serverErrors = null

        if(self.helpingByOtherChosen) {
          self.volunteer.helpingBy = self.helpingByOther
        }

        window.axios.post(self.API_ROUTE + 'form-submissions/volunteer', {
          name: self.volunteer.name,
          street_address: self.volunteer.streetAddress,
          contact: self.volunteer.contact,
          helping_by: self.volunteer.helpingBy
        }).then(response => {

          self.serverErrors = null
          self.alert.message = response.data.message

          self.volunteer.name = ''
          self.volunteer.streetAddress = ''
          self.volunteer.contact = ''
          self.volunteer.helpingBy = null

          self.loading = false
          self.formCompleted = true

          if (self.IS_PROD) gtag('event', 'volunteer_submission');

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