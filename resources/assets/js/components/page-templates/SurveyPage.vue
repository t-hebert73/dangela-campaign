<template>
    <div class="container">
        <div class="row main-area">

            <div class="page-content">

                <h1 class="mb-3">Please fill out the survey below</h1>

                <p class="mb-4">We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you. This is just sample text. We are gathering data on what the people of Thorold want. Please fill out the questions below so we can better serve you. This is just sample text.</p>

                <div v-if="alert.message" class="alert alert-success" role="alert">
                    {{ alert.message }}
                </div>

                <div class="alert alert-danger" v-if="serverErrors">
                    <li v-for="(error, i) in serverErrors">
                        <span v-if="error[0]">{{ error[0] }}</span>
                    </li>
                </div>

                <form @submit.prevent="submitSurvey" >

                    <b-form-group label="Name">
                        <b-form-input type="text" v-model="survey.name"></b-form-input>
                    </b-form-group>

                    <b-form-group v-for="(surveyQuestion, i) in surveyQuestions" :label="surveyQuestion.question">
                        <b-form-textarea type="text" v-model="surveyQuestion.answer" :rows="3"></b-form-textarea>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'survey-page',

    data () {
      return {
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
            question: 'This is a sample question number one. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number two. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number three. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number four. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number five. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number six. This will change when I get the actual survey questions.',
            answer: ''
          },
          {
            question: 'This is a sample question number seven. This will change when I get the actual survey questions.',
            answer: ''
          }
        ]
      }
    },

    methods: {
      submitSurvey() {
        let self = this

        self.loading = true

        self.survey.source = self.guessDeviceSource()
        self.survey.surveyData = self.surveyQuestions

        window.axios.post(self.API_ROUTE + 'form-submissions/survey', self.survey).then(response => {

          self.serverErrors = null
          self.alert.message = response.data.message

          self.survey.name = ''

          for(let i = 0; i < self.surveyQuestions.length; i++) {
            self.surveyQuestions[i].answer = ''
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
      }
    }
  }
</script>

<style scoped>

</style>