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

                <div class="actions">

                    <b-button size="lg" variant="primary" class="survey-btn" :to="{ name: 'survey' }">Survey</b-button>

                    <b-button size="lg" variant="primary" class="sign-btn" v-b-popover.hover="'Coming Soon.'">Sign Request</b-button>

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

    .page-content{
        text-align: center;
    }

    .apostrophe{
        font-family: $font-family-apostrophe;
        position: relative;
    }

    .vote-board{
        width: 505px;

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

    .actions {
        margin-top: 25px;
        margin-bottom: 30px;

        .survey-btn {
            float: left;
        }

        .sign-btn {
            float: right;
        }
    }
</style>