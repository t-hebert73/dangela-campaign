<template>
    <admin-component :flash="$attrs.flash">
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Sign Request Management</h1>

                                    <div class="card-text">
                                        <p>Below are all the sign requests in the system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="sign-requests">
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
                                        <tr v-bind:class="['sign-request hover-pointer', 'read-sign-request-'+signRequest.id]"
                                            @click="showSignRequest($event, signRequest.id)" v-for="(signRequest, i) in signRequests">
                                            <td class="sign-request-num">{{ signRequest.id }}</td>
                                            <td class="sign-request-name">{{ signRequest.name }}</td>
                                            <td class="sign-request-address">{{ signRequest.street_number + ' ' + signRequest.street_address}}</td>
                                            <td class="sign-request-contact">{{ signRequest.contact }}</td>
                                            <td class="sign-request-date">{{ moment(signRequest.created_at).format('MMM Do YYYY') }}</td>
                                            <td>
                                                <a href="#" @click.prevent="deleteSignRequest(signRequest.id)"
                                                   v-bind:class="['btn btn-danger', 'delete-sign-request-'+signRequest.id]">
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
        signRequests: [],
        loading: false
      }
    },

    mounted () {

      this.getSignRequests()

    },

    methods: {

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
       * Get all sign requests.
       */
      getSignRequests (apiRoute) {
        this.clearSignRequests()
        apiRoute = apiRoute || this.API_ROUTE + 'sign-requests'

        window.axios.get(apiRoute).then(response => {
          this.signRequests = response.data.signRequests
          this.loading = false
        }).catch(error => {
          flash('Error loading sign requests. Reason: ' + error.response.data.message, 'error')
        })
      },

      /**
       * Clear all currently shown sign requests.
       */
      clearSignRequests: function () {
        this.signRequests = []
        this.loading = true
      },

      /**
       * Delete selected sign request.
       * @param id
       */
      deleteSignRequest (id) {
        let signRequest = {}

        for (let i = 0; i < this.signRequests.length; i++) {
          if (this.signRequests[i].id === id) {
            signRequest = this.signRequests[i]
          }
        }

        this.$swal({
          title: 'Are you sure you want to delete sign request #' + signRequest.id + '?',
          text: 'Deleting a sign request is permanent',
          type: 'warning',
          showCancelButton: true,
        }).then((result) => {

          if (result.value) {
            window.axios.delete(this.API_ROUTE + 'sign-requests/' + id).then(response => {
              this.getSignRequests()
              flash('Successfully deleted sign request #' + response.data.signRequest.id + '.', 'success')
            })
          }
        }).catch(error => {
          flash(error.response.data.message, 'error')
        })
      }
    }
  }
</script>