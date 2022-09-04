<template>
    <admin-component :flash="$attrs.flash">
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Volunteers</h1>

                                    <div class="card-text">
                                        <p>Below are all the volunteers in the system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="volunteers">
                                    <table class="table table-striped table-bordered table-branded mb-3">
                                        <thead class="thead">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Contact</th>
                                            <th>Submitted <span class="d-none d-sm-block">On</span></th>
                                            <th class="actions"><span class="d-none d-sm-inline-block">Actions</span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-bind:class="['volunteer hover-pointer', 'read-volunteer-'+volunteer.id]"
                                            @click="showVolunteerRequest($event, volunteer.id)" v-for="(volunteer, i) in volunteers">
                                            <td class="volunteer-num">{{ volunteer.id }}</td>
                                            <td class="volunteer-name">{{ volunteer.name }}</td>
                                            <td class="volunteer-address">{{ volunteer.street_address }}</td>
                                            <td class="volunteer-contact">{{ volunteer.contact }}</td>
                                            <td class="volunteer-date">{{ moment(volunteer.created_at).format('MMM Do YYYY') }}</td>
                                            <td>
                                                <a href="#" @click.prevent="deleteVolunteerRequest(volunteer.id)"
                                                   v-bind:class="['btn btn-danger', 'delete-volunteer-'+volunteer.id]">
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
        volunteers: [],
        loading: false
      }
    },

    mounted () {

      this.getVolunteerRequests()

    },

    methods: {

      /**
       * Show a specified volunteer.
       *
       * @param id
       */
      showVolunteerRequest (event, id) {
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
       * Get all volunteers.
       */
      getVolunteerRequests (apiRoute) {
        this.clearVolunteerRequests()
        apiRoute = apiRoute || this.API_ROUTE + 'volunteers'

        window.axios.get(apiRoute).then(response => {
          this.volunteers = response.data.volunteers
          this.loading = false
        }).catch(error => {
          flash('Error loading volunteers. Reason: ' + error.response.data.message, 'error')
        })
      },

      /**
       * Clear all currently shown volunteers.
       */
      clearVolunteerRequests: function () {
        this.volunteers = []
        this.loading = true
      },

      /**
       * Delete selected volunteer.
       * @param id
       */
      deleteVolunteerRequest (id) {
        let volunteer = {}

        for (let i = 0; i < this.volunteers.length; i++) {
          if (this.volunteers[i].id === id) {
            volunteer = this.volunteers[i]
          }
        }

        this.$swal({
          title: 'Are you sure you want to delete volunteer #' + volunteer.id + '?',
          text: 'Deleting a volunteer is permanent',
          type: 'warning',
          showCancelButton: true,
        }).then((result) => {

          if (result.value) {
            window.axios.delete(this.API_ROUTE + 'volunteers/' + id).then(response => {
              this.getVolunteerRequests()
              flash('Successfully deleted volunteer #' + response.data.volunteer.id + '.', 'success')
            })
          }
        }).catch(error => {
          flash(error.response.data.message, 'error')
        })
      }
    }
  }
</script>