<template>
    <admin-component>
        <main role="main" class="col-10 col-md-9 ml-sm-auto col-lg-10 pt-3 px-2 px-sm-4">
            <div class="container-fluid min-body-height mt-3">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">

                            <div v-if="!loading" class="card-body">
                                <div class="card-title">
                                    <h1 class="float-left">Volunteer</h1>
                                    <!-- <router-link :to="{ name: 'volunteers.index'}" class="btn btn-primary float-right">Back</router-link>-->
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
                                                        {{ volunteer.id }}
                                                    </p>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Submitted On</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <div class="card-text data-value">
                                                        {{ moment(volunteer.created_at).format('MMM Do YYYY') }}
                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                        </b-card-group>

                                        <b-card-group class="mt-4" deck>
                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Name</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <p class="card-text data-value big">
                                                        {{ volunteer.name }}
                                                    </p>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Address</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <div class="card-text data-value">
                                                        {{ volunteer.street_address }}
                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                            <b-card no-body align="center">
                                                <b-card-header class="brand-primary">
                                                    <h4>Contact</h4>
                                                </b-card-header>
                                                <b-card-body>
                                                    <div class="card-text data-value">
                                                        {{ volunteer.contact }}
                                                    </div>
                                                </b-card-body>
                                            </b-card>

                                        </b-card-group>

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
    name: 'volunteer-show',
    
    components: { AdminComponent },
    data () {
      return {
        loading: true,
        volunteer: {},

      }
    },

    mounted () {
      this.getvolunteer(this.$route.params.id)
    },

    methods: {
      /**
       * Get the specified volunteer.
       *
       * @param id
       */
      getvolunteer (id) {
        window.axios.get(this.API_ROUTE + 'volunteers/' + id).then(response => {
          this.volunteer = response.data.volunteer
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

    .volunteer-data {
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