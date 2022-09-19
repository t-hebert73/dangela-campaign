<template>
    <admin-component>
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
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
                                                    <h4>ID</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <p class="card-text data-value big">
                                                        {{ surveySubmission.id }}
                                                    </p>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Submitted On</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <div class="card-text data-value">
                                                        {{ moment(surveySubmission.created_at).format('MMM Do YYYY') }}
                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                        </b-card-group>

                                        <div v-if="surveySubmission.survey_data" class="mt-5">

                                            <div v-for="(surveyData, i) in surveySubmission.survey_data" class="survey-data">

                                                <h4>{{ surveyData.question }}</h4>

                                                <div v-if="surveyData.hasYesNo" class="">
                                                    Yes or No: <span class="yes-no-answer">{{ surveyData.yesNoAnswer }}</span>
                                                </div>

                                                <p v-if="!surveyData.answer"> No answer given.</p>
                                                <p class="" v-html="surveyData.answer"></p>

                                                <div v-if="surveyData.type === 'ranked'">
                                                    <div v-for="(option, i) in sortedAvailableOptions(surveyData.availableOptions)" class="ranked-option mb-2">
                                                        <div v-if="option.rank">
                                                            <span class="rank">{{ option.rank }}</span>
                                                            <span class="option">
                                                                {{ option.option }}
                                                                <span v-if="option.extra">
                                                                    - {{ option.extraValue }}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
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
import AdminComponent from '../AdminComponent.vue'
  export default {
    name: 'survey-submission-show',

    components: { AdminComponent },

    data () {
      return {
        loading: true,
        surveySubmission: {},

      }
    },

    mounted () {
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

      /**
       * @param availableOptions
       */
      sortedAvailableOptions(availableOptions) {
        return availableOptions.slice().sort(function(a, b) {
          return a.rank - b.rank
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

    @import "../../../../sass/responsive";

    p{
        @media #{$mobile} {
            text-align: left;
        }
    }

    .card-header{
        @media #{$mobile} {
            padding: 0.5rem 1rem;
        }
    }

    .card-body{
        @media #{$mobile} {
            padding: .75rem;
        }
    }

    h4{
        @media #{$mobile} {
            font-size: 1rem;
            margin-bottom: 0;
        }
    }

    .survey-data {
        margin-bottom: 25px;
    }

    .data-value {
        font-size: 2rem;

        @media #{$mobile} {
            font-size: 1rem;
            text-align: center;
        }
    }

    .rank{
        font-weight: bold;
        min-width: 25px;
        padding-right: 10px;
        text-align: center;
        display: inline-block;
        font-size: 1.2rem;

        @media #{$mobile} {
            font-size: 1rem;
        }
    }

    .option {
        @media #{$mobile} {
            font-size: .75rem;
        }
    }

    .yes-no-answer{
        text-transform: capitalize;
        font-weight: bold;
    }
</style>