<template>
    <div class="container">
        <div class="row justify-content-center main-area">

            <div class="page-content">

                <img class="mb-4" src="images/main.jpg" alt="Henry D'Angela" title="Henry D'Angela" width="400px">

                <h1>Henry D'Angela For Mayor Of Thorold</h1>

                <div class="actions">

                    <b-button size="lg" variant="primary" class="survey-btn" :to="{ name: 'survey' }">Survey</b-button>

                    <b-button size="lg" variant="primary" class="sign-btn" v-b-popover.hover="'Coming Soon.'">Sign Request</b-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'home-page',

    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>

    .page-content{
        text-align: center;
    }
</style>