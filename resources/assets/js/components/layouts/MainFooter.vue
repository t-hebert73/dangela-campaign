<template>
    <footer>
        <div class="container">
            <div class="row justify-content-center footer-text">
                &copy;2018 Henry D'Angela. All Rights Reserved
            </div>
        </div>

        <div class="bottom-swirl"></div>

        <router-link :to="{ name: 'pages.login'}" class="tmp-login hover-pointer">
            <span>Sign in</span>
        </router-link>
    </footer>
</template>

<script>
  import AuthCombo from '../widgets/auth/AuthCombo'

  export default {
    name: 'main-footer',
    components: {AuthCombo}
  }
</script>

<style lang="scss" scoped>

    @import "../../../sass/_responsive.scss";

    footer {
    }

    .tmp-login {
        background-color: transparent;
        position: fixed;
        bottom: 0;
        left: 0;
        min-height: 35px;

        &:hover {
            background-color: red;

            span {
                color: white;
            }
        }

        span {
            padding: 5px 30px;
            color: transparent;
            display: block;
        }
    }

    .footer-text{
        @media #{$mobile} {
            margin-top: 20px;
        }
    }
</style>