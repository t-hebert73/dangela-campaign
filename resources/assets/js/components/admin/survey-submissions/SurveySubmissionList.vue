<template>
    <admin-component :flash="$attrs.flash">
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Survey Submission Management</h1>

                                    <div class="card-text">
                                        <p>Below are all the survey submissions in the system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="survey-submissions">
                                    <table class="table table-striped table-bordered table-branded mb-3">
                                        <thead class="thead">
                                        <tr>
                                            <th>ID</th>
                                            <th>Source</th>
                                            <th>Submitted <span class="d-none d-sm-block">On</span></th>
                                            <th class="actions"><span class="d-none d-sm-inline-block">Actions</span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-bind:class="['survey-submission hover-pointer', 'read-survey-submission-'+surveySubmission.id]"
                                            @click="showSurveySubmission($event, surveySubmission.id)" v-for="(surveySubmission, i) in surveySubmissions">
                                            <td class="survey-submission-num">{{ surveySubmission.id }}</td>
                                            <td class="survey-submission-source">{{ surveySubmission.source }}</td>
                                            <td class="survey-submission-date">{{ moment(surveySubmission.created_at).format('MMM Do YYYY') }}</td>
                                            <td>
                                                <a href="#" @click.prevent="deleteSurveySubmission(surveySubmission.id)"
                                                   v-bind:class="['btn btn-danger', 'delete-survey-submission-'+surveySubmission.id]">
                                                    <span class="d-none d-sm-inline-block">
                                                        Delete
                                                    </span>
                                                    <i class="fa fa-trash-o d-block d-sm-none" aria-hidden="true"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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
    data () {
      return {
        params: {
          title: ''
        },
        surveySubmissions: [],
        loading: false
      }
    },

    mounted () {

      this.getSurveySubmissions()

    },

    methods: {

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

      /**
       * Get all survey submissions.
       */
      getSurveySubmissions (apiRoute) {
        this.clearSurveySubmissions()
        apiRoute = apiRoute || this.API_ROUTE + 'survey-submissions'

        window.axios.get(apiRoute).then(response => {
          this.surveySubmissions = response.data.surveySubmissions
          this.loading = false
        }).catch(error => {
          flash('Error loading survey submissions. Reason: ' + error.response.data.message, 'error')
        })
      },

      /**
       * Clear all currently shown survey submissions.
       */
      clearSurveySubmissions: function () {
        this.surveySubmissions = []
        this.loading = true
      },

      /**
       * Delete selected survey submission.
       * @param id
       */
      deleteSurveySubmission (id) {
        let surveySubmission = {}

        for (let i = 0; i < this.surveySubmissions.length; i++) {
          if (this.surveySubmissions[i].id === id) {
            surveySubmission = this.surveySubmissions[i]
          }
        }

        this.$swal({
          title: 'Are you sure you want to delete survey submission #' + surveySubmission.id + '?',
          text: 'Deleting a survey submission is permanent',
          type: 'warning',
          showCancelButton: true,
        }).then((result) => {

          if (result.value) {
            window.axios.delete(this.API_ROUTE + 'survey-submissions/' + id).then(response => {
              this.getSurveySubmissions()
              flash('Successfully deleted survey submission #' + response.data.surveySubmission.id + '.', 'success')
            })
          }
        }).catch(error => {
          flash(error.response.data.message, 'error')
        })
      }
    }
  }
</script>