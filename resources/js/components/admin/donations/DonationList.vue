<template>
    <admin-component :flash="$attrs.flash">
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="card-title">
                                    <h1>Donations</h1>

                                    <div class="card-text">
                                        <p>Below are all the donations in the system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="donations">
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
                                        <tr v-bind:class="['donation hover-pointer', 'read-donation-'+donation.id]"
                                            @click="showDonationRequest($event, donation.id)" v-for="(donation, i) in donations">
                                            <td class="donation-num">{{ donation.id }}</td>
                                            <td class="donation-name">{{ donation.name }}</td>
                                            <td class="donation-address">{{ donation.address }}</td>
                                            <td class="donation-contact">{{ donation.contact }}</td>
                                            <td class="donation-date">{{ moment(donation.created_at).format('MMM Do YYYY') }}</td>
                                            <td>
                                                <a href="#" @click.prevent="deleteDonationRequest(donation.id)"
                                                   v-bind:class="['btn btn-danger', 'delete-donation-'+donation.id]">
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
  import AdminComponent from '../AdminComponent.vue'
  export default {

    components: { AdminComponent},
    data () {
      return {
        params: {
          title: ''
        },
        donations: [],
        loading: false
      }
    },

    mounted () {

      this.getDonationRequests()

    },

    methods: {

      /**
       * Show a specified donation.
       *
       * @param id
       */
      showDonationRequest (event, id) {
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

      /**
       * Get all donations.
       */
      getDonationRequests (apiRoute) {
        this.clearDonationRequests()
        apiRoute = apiRoute || this.API_ROUTE + 'donations'

        window.axios.get(apiRoute).then(response => {
          this.donations = response.data.donations
          this.loading = false
        }).catch(error => {
          flash('Error loading donations. Reason: ' + error.response.data.message, 'error')
        })
      },

      /**
       * Clear all currently shown donations.
       */
      clearDonationRequests: function () {
        this.donations = []
        this.loading = true
      },

      /**
       * Delete selected donation.
       * @param id
       */
      deleteDonationRequest (id) {
        let donation = {}

        for (let i = 0; i < this.donations.length; i++) {
          if (this.donations[i].id === id) {
            donation = this.donations[i]
          }
        }

        this.$swal({
          title: 'Are you sure you want to delete donation #' + donation.id + '?',
          text: 'Deleting a donation is permanent',
          type: 'warning',
          showCancelButton: true,
        }).then((result) => {

          if (result.value) {
            window.axios.delete(this.API_ROUTE + 'donations/' + id).then(response => {
              this.getDonationRequests()
              flash('Successfully deleted donation #' + response.data.donation.id + '.', 'success')
            })
          }
        }).catch(error => {
          flash(error.response.data.message, 'error')
        })
      }
    }
  }
</script>