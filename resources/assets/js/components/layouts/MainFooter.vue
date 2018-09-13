<template>
    <footer>

        <div class="info-bar">
            <div class="better-niagara">
                <a class="external-link" target="_blank" href="https://www.abetterniagara.com/endorsements">
                    <div class="better-niagara-logo"></div>
                    <span>Endorsed By A Better Niagara</span>
                </a>
            </div>
        </div>

        <div class="social-links">
            <a target="_blank" href="https://www.facebook.com/people/Henry-DAngela/100010470600081" title="Henry D'Angela On Facebook" >
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
        </div>

        <div class="container">
            <div class="row justify-content-center footer-text">
                Authorized and paid for by Henry D’Angela, © 2018 Henry D'Angela. All Rights Reserved
            </div>
        </div>

       <!-- <router-link :to="{ name: 'pages.login'}" class="tmp-login hover-pointer">
            <span>Sign in</span>
        </router-link>-->
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

    .footer-text {
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;

        @media #{$mobile} {
            margin-top: 20px;
        }
    }
</style>