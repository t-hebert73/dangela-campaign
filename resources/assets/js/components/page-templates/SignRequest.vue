<template>
    <div class="container">
        <div class="page-content main-area">
            
            <div v-if="alert.message" class="thank-you-message" role="alert">
                <div v-html="alert.message"></div>
            </div>

            <div v-else>
                <h1 class="mb-3">Sign Request</h1>

                <p class="mb-4">Please note, signs are not permitted until Sept 18, 2018.</p>
            </div>

            <div class="alert alert-danger" v-if="serverErrors">
                <li v-for="(error, i) in serverErrors">
                    <span v-if="error[0]">{{ error[0] }}</span>
                </li>
            </div>

            <div v-if="loading" class="loading mb-3 text-center"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Submitting..</div>

            <form v-if="!loading && !formCompleted" @submit.prevent="submitSignRequest">

                <b-form-group v-for="(signRequestFormField, i) in signRequestFormFields"
                              :key="'sign_request_question_' + '_' + i">

                    <label :for="'input' + i"> {{ signRequestFormField.label }}</label>

                    <b-form-input v-model="signRequestFormField.value"></b-form-input>
                    
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'survey-page',

    data () {
      return {
        loading: false,
        formCompleted: false,
        alert: {
          message: '',
        },
        serverErrors: null,
        signRequest: {
          signRequestData: {},
          source: ''
        },
        signRequestFormFields: [
          {
            label: 'Name',
            value: '',
          },
          {
            label: 'Street Number',
            value: '',
          },
          {
            label: 'Street Address',
            value: '',
          },
          {
            label: 'Contact #',
            value: '',
          }
        ]
      }
    },

    methods: {

      /**
       * Submits the survey
       */
      submitSignRequest () {
        let self = this

        self.loading = true
        self.alert.message = null
        self.serverErrors = null

        self.survey.source = self.guessDeviceSource()
        self.survey.surveyData = self.surveyQuestions

        window.axios.post(self.API_ROUTE + 'form-submissions/survey', self.survey).then(response => {

          self.serverErrors = null
          self.alert.message = response.data.message

          for (let i = 0; i < self.surveyQuestions.length; i++) {
            self.surveyQuestions[i].answer = ''

            if (self.surveyQuestions[i].type === 'ranked') {
              for (let j = 0; j < self.surveyQuestions[i].availableOptions.length; j++) {
                self.surveyQuestions[i].availableOptions[j].rank = ''

                if (self.surveyQuestions[i].availableOptions[j].extra) {
                  self.surveyQuestions[i].availableOptions[j].extraValue = ''
                }
              }
            }

            if (self.surveyQuestions[i].hasYesNo) {
              self.surveyQuestions[i].yesNoAnswer = null
            }
          }

          self.loading = false
          self.formCompleted = true

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
       * Attempts to determine the device size based on screen width
       *
       * @returns {string}
       */
      guessDeviceSource () {
        // determine device source
        let width = $(window).width()

        let deviceSource = ''

        switch (true) {
          case (width < 768):
            deviceSource = 'mobile'
            break
          case (width < 980):
            deviceSource = 'tablet'
            break
          default:
            deviceSource = 'desktop'
            break
        }

        return deviceSource
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