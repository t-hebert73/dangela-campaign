<template>
    <admin-component>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">

                            <div v-if="!loading" class="card-body">
                                <div class="card-title">
                                    <h1 class="float-left">Survey Submission</h1>
                                   <!-- <router-link :to="{ name: 'survey-submissions.index'}" class="btn btn-primary float-right">Back</router-link>-->
                                    <div class="clearfix"></div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <b-card-group deck>
                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Survey Submission ID</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <p class="card-text data-value big">
                                                        {{ surveySubmission.id }}
                                                    </p>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Name</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <p class="card-text data-value">
                                                        {{ surveySubmission.name }}
                                                    </p>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Created</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <div class="card-text data-value">
                                                        <div>{{ surveySubmission.created_at }}</div>
                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                        </b-card-group>

                                        <div v-if="surveySubmission.survey_data">

                                            <div v-for="(surveyData, i) in surveySubmission.survey_data">
                                                <b-card no-body align="center" class="mt-4">
                                                    <b-card-header class="brand-primary">
                                                        <h4>{{ surveyData.question }}</h4>
                                                    </b-card-header>
                                                    <b-card-body>
                                                        <p class="card-text data-value" v-html="surveyData.answer"></p>
                                                    </b-card-body>
                                                </b-card>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </admin-component>
</template>

<script>
  export default {
    name: 'survey-submission-show',

    data () {
      return {
        loading: true,
        surveySubmission: {}
      }
    },

    mounted() {
      this.getSurveySubmission(this.$route.params.id)
    },

    methods: {
      /**
       * Get the specified survey submission.
       *
       * @param id
       */
      getSurveySubmission (id) {
        window.axios.get(this.API_ROUTE + 'survey-submissions/' + id).then(response => {
          this.surveySubmission = response.data.surveySubmission
          this.loading = false

        }).catch(error => {
          flash(error.response.data.message, 'error')
        })
      },
    }
  }
</script>

<style scoped>

</style>