<template>
    <div class="container">
        <div class="page-content main-area">

            <h1 class="mb-3">Please fill out the survey below</h1>

            <p class="mb-4">We are gathering data on what the people of Thorold want. Please fill out the questions
                below so we can better serve you.</p>

            <div v-if="alert.message" class="alert alert-success" role="alert">
                {{ alert.message }}
            </div>

            <div class="alert alert-danger" v-if="serverErrors">
                <li v-for="(error, i) in serverErrors">
                    <span v-if="error[0]">{{ error[0] }}</span>
                </li>
            </div>

            <div v-if="loading" class="loading mb-3 text-center"> <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Submitting..</div>

            <form v-if="!loading" @submit.prevent="submitSurvey">

                <b-form-group v-for="(surveyQuestion, i) in surveyQuestions"
                              :key="'survey_question_' + '_' + i">

                    <label :for="'textarea_' + i"> {{ surveyQuestion.question }} <a target="_blank" :href="surveyQuestion.link" v-if="surveyQuestion.link">{{ surveyQuestion.link }}</a></label>

                    <div v-if="surveyQuestion.type === 'textarea'">

                        <div v-if="surveyQuestion.hasYesNo">
                            <b-form-radio-group :id="'yes_no_' + i" v-model="surveyQuestion.yesNoAnswer"
                                                :options="surveyQuestion.radios"
                                                name="yes-no-radio"></b-form-radio-group>
                        </div>

                        <b-form-textarea :id="'textarea_' + i" v-model="surveyQuestion.answer" :rows="3"
                                         :placeholder="determinePlaceholder(surveyQuestion)"></b-form-textarea>
                    </div>

                    <div v-if="surveyQuestion.type === 'ranked'" class="ranked-options">

                        <div class="ranked-option" v-for="(option, j) in surveyQuestion.availableOptions">

                            <b-form-input :id="'input_' + j" type="text" v-model="option.rank"></b-form-input>

                            <label :for="'input_' + j">{{ option.option }}</label>

                            <b-form-textarea class="option-extra" v-if="option.extra" v-model="option.extraValue"
                                             placeholder="Please explain the issue."></b-form-textarea>

                            <div class="clearfix"></div>
                        </div>

                        <div class="clearfix"></div>

                    </div>
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
        alert: {
          message: '',
        },
        serverErrors: null,
        survey: {
          name: '',
          surveyData: {},
          source: ''
        },
        surveyQuestions: [
          {
            question: 'What are the most important issues facing Thorold residents? (Rank top 3)',
            type: 'ranked',
            availableOptions: [
              {
                rank: '',
                option: 'Affordable Housing'
              },
              {
                rank: '',
                option: 'By-Law Enforcement'
              },
              {
                rank: '',
                option: 'Economic Development'
              },
              {
                rank: '',
                option: 'Employment'
              },
              {
                rank: '',
                option: 'Historical Preservation'
              },
              {
                rank: '',
                option: 'Policing'
              },
              {
                rank: '',
                option: 'Public Transportation'
              },
              {
                rank: '',
                option: 'Recreational Facilities'
              },
              {
                rank: '',
                option: 'Road Infrastructure'
              },
              {
                rank: '',
                option: 'Student Issues'
              },
              {
                rank: '',
                option: 'Taxation'
              },
              {
                rank: '',
                option: 'Water & Sewer Infrastructure'
              },
              {
                rank: '',
                option: 'Other',
                extra: true,
                extraValue: ''
              },
            ],
            answer: ''
          },
          {
            question: 'What is the City of Thorold doing right?',
            type: 'textarea',
            answer: ''
          },
          {
            question: 'Where does the City of Thorold need improvement?',
            type: 'textarea',
            answer: ''
          },
          {
            question: 'What cultural or recreational facilities does the City of Thorold need?',
            type: 'textarea',
            answer: ''
          },
          {
            question: 'Do you feel the Rental Housing License By-Law is effective?',
            type: 'textarea',
            link: 'http://thorold.com/residential-rental-licensing',
            answer: '',
            hasYesNo: true,
            yesNoAnswer: null,
            radios: [
              {
                text: 'Yes',
                value: 'yes'
              },
              {
                text: 'No',
                value: 'no'
              }
            ]
          },
          {
            question: 'Do you have any additional comments?',
            type: 'textarea',
            answer: ''
          }
        ]
      }
    },

    methods: {

      /**
       * Submits the survey
       */
      submitSurvey () {
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

          setTimeout(function () {
            self.alert.message = ''
          }, 2000)

          self.loading = false

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

      },

      /**
       * @param surveyQuestion
       * @returns {string}
       */
      determinePlaceholder (surveyQuestion) {
        if (surveyQuestion.hasYesNo) {
          return 'Why?'
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