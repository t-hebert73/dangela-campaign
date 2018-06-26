<template>
    <admin-component>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Recent Survey Submissions</h1>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="pages">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-centered">
                                            <thead>
                                            <tr>
                                                <th scope="col" style="width: 50px;">#</th>
                                                <th scope="col">Source</th>
                                                <th scope="col">Date Submitted</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="hover-pointer" v-for="(surveySubmission, i) in surveySubmissions" @click="showSurveySubmission($event, surveySubmission.id)"  :id="i + '_survey_submission'">
                                                <b-popover :target="i + '_survey_submission'"
                                                           :placement="'top-left'"
                                                           title="More Information"
                                                           triggers="hover"
                                                           :content="`Click to view more information about this survey submission.`">
                                                </b-popover>
                                                <td> {{ surveySubmission.id }}</td>
                                                <td> {{ surveySubmission.source }}</td>
                                                <td> {{ moment(surveySubmission.created_at).format('MMM Do YYYY') }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
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
  import AdminHeader from './layouts/AdminHeader'

  export default {
    name: 'dashboard',
    components: {AdminHeader},

    data () {
      return {
        surveySubmissions: {}
      }
    },

    mounted() {
      window.axios.get(this.API_ROUTE + 'survey-submissions/latest').then(response => {
        this.surveySubmissions = response.data.surveySubmissions
        this.loading = false
      }).catch(error => {
        flash('Error loading pages. Reason: ' + error.response.data.message, 'error')
      })
    },

    methods: {

      /**
       *
       * @param string
       * @returns {string}
       */
      truncateString(string) {
        var length = 100;

        let formattedString = string

        if(string.length > length) {
          formattedString = string.substring(0,length) + '...'
        }

        return formattedString
      },

      /**
       * Show a specified survey submission.
       *
       * @param id
       */
      showSurveySubmission (event, id) {
        // only if you didn't click a link within
        if (!$(event.target).is('a')) {
          this.$router.push({
            name: 'survey-submissions.show',
            params: {
              id: id
            }
          })
        }
      },
    }
  }
</script>

<style scoped>

</style>