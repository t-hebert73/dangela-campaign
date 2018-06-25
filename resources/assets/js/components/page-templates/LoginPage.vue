<template>
    <div class="container">
        <div class="row justify-content-center main-area">
            <div class="col-md-12">
                <div class="mt-5">
                    <h1 class="page-title">Login</h1>

                    <auth-combo></auth-combo>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  import SignIn from '../widgets/auth/SignIn'
  import AuthCombo from "../widgets/auth/AuthCombo";
  export default {
    name: 'login-page',
    components: {AuthCombo, SignIn}
  }
</script>

<style scoped>

</style>