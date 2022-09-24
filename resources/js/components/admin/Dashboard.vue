<template>
    <admin-component>
        <main role="main" class="col-10 col-md-9 col-sm-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">

                    <div class="col-12 mb-5">
                        <b-card-group class="mt-4" deck>
                            <b-card no-body align="center">
                                <b-card-header class="brand-primary">
                                    <h4>Site Views</h4>
                                </b-card-header>
                                <b-card-body>
                                    <p class="card-text data-value big">
                                        {{ siteViews }}
                                    </p>
                                </b-card-body>
                            </b-card>

                            <b-card no-body align="center">
                                <b-card-header class="brand-primary">
                                    <h4>Unique Site Views</h4>
                                </b-card-header>
                                <b-card-body>
                                    <div class="card-text data-value">
                                        {{ uniqueSiteViews }}
                                    </div>
                                </b-card-body>
                            </b-card>

                        </b-card-group>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Recent Survey Submissions</h1>

                                    <div class="card-text">
                                        <p>Below are the latest survey submissions.</p>
                                    </div>
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
                                                <th scope="col" class="id-field">#</th>
                                                <th scope="col">Source</th>
                                                <th scope="col">Date Submitted</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="hover-pointer"  v-for="(surveySubmission, i) in surveySubmissions" @click="showSurveySubmission($event, surveySubmission.id)"  :id="i + '_survey_submission'">
                                                <b-popover :target="i + '_survey_submission'"
                                                           :placement="'left'"
                                                           title="More Information"
                                                           :delay="{show: 500, hide: 800}"
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
                    <div class="col-12 col-md-6">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Recent Sign Requests</h1>

                                    <div class="card-text">
                                        <p>Below are the latest sign requests.</p>
                                    </div>
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
                                                <th scope="col" class="id-field">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date Submitted</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="hover-pointer"  v-for="(signRequest, i) in signRequests" @click="showSignRequest($event, signRequest.id)"  :id="i + '_sign_request'">
                                                <b-popover :target="i + '_sign_request'"
                                                           :placement="'left'"
                                                           title="More Information"
                                                           :delay="{show: 500, hide: 800}"
                                                           triggers="hover"
                                                           :content="`Click to view more information about this sign request.`">
                                                </b-popover>
                                                <td> {{ signRequest.id }}</td>
                                                <td> {{ signRequest.name }}</td>
                                                <td> {{ moment(signRequest.created_at).format('MMM Do YYYY') }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Recent Volunteers</h1>

                                    <div class="card-text">
                                        <p>Below are the latest volunteers.</p>
                                    </div>
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
                                                <th scope="col" class="id-field">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date Submitted</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="hover-pointer"  v-for="(volunteer, i) in volunteers" @click="showVolunteer($event, volunteer.id)"  :id="i + '_volunteer'">
                                                <b-popover :target="i + '_volunteer'"
                                                           :placement="'left'"
                                                           title="More Information"
                                                           :delay="{show: 500, hide: 800}"
                                                           triggers="hover"
                                                           :content="`Click to view more information about this volunteer.`">
                                                </b-popover>
                                                <td> {{ volunteer.id }}</td>
                                                <td> {{ volunteer.name }}</td>
                                                <td> {{ moment(volunteer.created_at).format('MMM Do YYYY') }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Recent Donations</h1>

                                    <div class="card-text">
                                        <p>Below are the latest donations.</p>
                                    </div>
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
                                                <th scope="col" class="id-field">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date Submitted</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr class="hover-pointer"  v-for="(donation, i) in donations" @click="showDonation($event, donation.id)"  :id="i + '_donation'">
                                                <b-popover :target="i + '_donation'"
                                                           :placement="'left'"
                                                           title="More Information"
                                                           :delay="{show: 500, hide: 800}"
                                                           triggers="hover"
                                                           :content="`Click to view more information about this donation.`">
                                                </b-popover>
                                                <td> {{ donation.id }}</td>
                                                <td> {{ donation.name }}</td>
                                                <td> {{ moment(donation.created_at).format('MMM Do YYYY') }}</td>
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
  import AdminComponent from './AdminComponent.vue'

  export default {
    name: 'dashboard',
    components: {AdminHeader, AdminComponent},

    data () {
      return {
        surveySubmissions: {},
        signRequests: {},
        volunteers: {},
        donations: {},
        siteViews: 0,
        uniqueSiteViews: 0
      }
    },

    mounted() {
      window.axios.get(this.API_ROUTE + 'survey-submissions/latest').then(response => {
        this.surveySubmissions = response.data.surveySubmissions
        this.loading = false
      }).catch(error => {
        flash('Error loading pages. Reason: ' + error.response.data.message, 'error')
      })

      window.axios.get(this.API_ROUTE + 'sign-requests/latest').then(response => {
        this.signRequests = response.data.signRequests
        this.loading = false
      }).catch(error => {
        flash('Error loading pages. Reason: ' + error.response.data.message, 'error')
      })

      window.axios.get(this.API_ROUTE + 'volunteers/latest').then(response => {
        this.volunteers = response.data.volunteers
        this.loading = false
      }).catch(error => {
        flash('Error loading pages. Reason: ' + error.response.data.message, 'error')
      })

      window.axios.get(this.API_ROUTE + 'donations/latest').then(response => {
        this.donations = response.data.donations
        this.loading = false
      }).catch(error => {
        flash('Error loading pages. Reason: ' + error.response.data.message, 'error')
      })

      window.axios.get(this.API_ROUTE + 'dashboard/get-stats').then(response => {
        this.siteViews = response.data.siteViews
        this.uniqueSiteViews = response.data.uniqueSiteViews
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

      /**
       * Show a specified sign request.
       *
       * @param id
       */
      showSignRequest (event, id) {
        // only if you didn't click a link within
        if (!$(event.target).is('a')) {
          this.$router.push({
            name: 'sign-requests.show',
            params: {
              id: id
            }
          })
        }
      },

      /**
       * Show a specified volunteer.
       *
       * @param id
       */
      showVolunteer (event, id) {
        // only if you didn't click a link within
        if (!$(event.target).is('a')) {
          this.$router.push({
            name: 'volunteers.show',
            params: {
              id: id
            }
          })
        }
      },

      /**
       * Show a specified donation.
       *
       * @param id
       */
      showDonation (event, id) {
        // only if you didn't click a link within
        if (!$(event.target).is('a')) {
          this.$router.push({
            name: 'donations.show',
            params: {
              id: id
            }
          })
        }
      },
    }
  }
</script>

<style lang="scss"scoped>
    @import "../../../sass/responsive";

    h1{

        @media #{$small} {
            font-size: 1.5rem;
        }
    }


</style>