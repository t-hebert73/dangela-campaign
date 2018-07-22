<template>
    <div class="container">
        <div class="row justify-content-center main-area">

            <div class="page-content">

                <div class="vote-board">

                    <div class="top-half">

                        <span class="vote">Vote</span>

                        <h1>Henry <span>D<span class="apostrophe">'</span>Angela</span></h1>
                    </div>

                    <div class="bottom-half">
                        <p class="for-mayor">
                            <span class="for">for</span>
                            <span class="mayor">Mayor</span>
                        </p>

                        <img class="mb-4" src="images/main.jpg" alt="Henry D'Angela" title="Henry D'Angela">

                        <p class="tag-line">Planning Thorold<span class="apostrophe">'</span>s Future Together</p>
                    </div>

                </div>

                <div class="left-actions">

                    <b-button size="lg" variant="primary" :to="{ name: 'survey' }">Complete Survey</b-button>

                    <b-button size="lg" variant="primary" :to="{ name: 'sign-request' }">Sign Request</b-button>

                    <div class="clearfix"></div>

                </div>

                <div class="right-actions">

                    <b-button size="lg" variant="primary" :to="{ name: 'volunteer' }">Volunteer</b-button>

                    <b-button size="lg" variant="primary" :to="{ name: 'donation' }">Make Donation</b-button>

                    <div class="clearfix"></div>

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

    @import "../../../sass/variables";
    @import "../../../sass/responsive";

    .page-content{
        text-align: center;
    }

    .apostrophe{
        font-family: $font-family-apostrophe;
        position: relative;
    }

    .vote-board{
        position: relative;
        width: 505px;

        @media #{$mobile} {
            width: 300px;
        }

        .top-half{
            padding: 10px 30px;
            background-color: $brand-primary;
            color: white;
            position: relative;
            overflow: hidden;

            .vote{
                background-color: white;
                color: $brand-primary;
                padding: 2px 70px;
                font-size: 1.7rem;
                font-weight: bold;
                position: absolute;
                top: 15px;
                left: -60px;
                -ms-transform: rotate(-32deg); /* IE 9 */
                -webkit-transform: rotate(-32deg); /* Safari 3-8 */
                transform: rotate(-32deg);
                text-transform: uppercase;
                font-family: $font-family-header;
            }

            h1{
                font-size: 4rem;
                text-align: left;
                margin: 55px 0 0;
                font-weight: bold;
                line-height: 1;

                @media #{$mobile} {
                    font-size: 3rem;
                }

                span{
                    font-size: 100%;
                    text-transform: uppercase;
                }

                .apostrophe{
                    top: 4px;
                }
            }
        }

        .bottom-half{

            .for-mayor{
                color: $brand-primary;
                font-family: $font-family-header;
                font-weight: bold;

                span{
                    display: block;
                    line-height: normal;

                    &.for{
                        text-transform: uppercase;
                        font-size: 1.2rem;
                        margin-top: 5px;
                    }

                    &.mayor{
                        font-size: 3.7rem;
                        line-height: 3rem;
                        margin-bottom: 30px;
                    }
                }
            }

            img{
                width: 350px;
                border: 2px solid $brand-primary;

                @media #{$mobile} {
                    width: 275px;
                }
            }

            .tag-line{
                font-family: $font-family-header;
                color: $brand-primary;
                font-size: 2rem;
                font-weight: 500;

                .apostrophe{
                    top: 1px;
                    font-size: 100%;
                }
            }
        }

    }

    .left-actions, .right-actions {
        position: absolute;
        top: 400px;

        @media #{$mobile} {
            position: static;

        }

        .btn{
            min-width: 205px;
            border-radius: 0;
            display: block;
            margin-bottom: 80px;

            @media #{$small} {
                font-size: 1rem;
                min-width: 165px;
            }

            @media #{$mobile} {
                margin-top: 20px;
                margin-bottom: 0;
            }
        }

    }

    .left-actions{
        left: -226px;

        @media #{$small} {
            left: -135px;
        }

        .btn{
            margin-left: 20px;

            @media #{$mobile} {
                margin-left: 0;
            }
        }
    }

    .right-actions{
        right: -226px;

        @media #{$small} {
            right: -135px;
        }

        .btn{
            margin-right: 20px;

            @media #{$mobile} {
                margin-right: 0;
            }
        }
    }
</style>