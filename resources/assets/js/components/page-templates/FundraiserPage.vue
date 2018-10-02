<template>
    <div class="container">
        <div class="main-area">

            <div class="page-content">

                <h1>Wine & Cheese Fundraiser </h1>

                <h2>This event has now passed. Thanks everyone for coming! </h2>

                <div class="fundraiser">
                    <div class="fundraiser-details mt-3 mb-4">
                        <div class="detail-row">
                            <div class="left">Date:</div>
                            <div class="right">September 20, 2018</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="detail-row">
                            <div class="left">Time:</div>
                            <div class="right">7:00 pm - 9:00 pm</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="detail-row">
                            <div class="left">Location:</div>
                            <div class="right">Belvedere Club, 57 John Street, Thorold</div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="detail-row">
                            <div class="left">Ticket:</div>
                            <div class="right">$20</div>
                            <div class="clearfix"></div>
                        </div>
                    </div>

                </div>

                <p>Thorold Mayoral Candidate Henry D’Angela is inviting constituents to join him at a Wine and Cheese Fundraiser on September 20 in Thorold.</p>

                <p>“This will be an opportunity to support my campaign, but also to ask questions, give me your opinions, get to know me better and learn more about my platform” said D’Angela.</p>

                <p>D’Angela, who served as Mayor of Thorold from 2006-2010 and has continued as Thorold’s Regional Councillor since then, announced his candidacy in May 2018. D’Angela brings a wealth of experience, the required talent and strong leadership abilities that can ensure a better Thorold for all.</p>

                <p>“As your candidate for Mayor, I can’t stress enough the importance of my experience as a Mayor, as a Regional Councillor, as a City Councillor and as a Hydro Commissioner that enables me to do the job right” said D’Angela.</p>

                <p>For more information, contact:</p>

                <p>Henry D'Angela</p>

                <p>905-227-8298 or dangela@vaxxine.com</p>

                <div class="fundraiser-ticket"></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'fundraiser-page'
  }
</script>

<style scoped lang="scss">

    @import "../../../sass/responsive";

    .fundraiser-details{

        .left, .right{
            font-size: 1.2rem;
            float: left;

            @media #{$mobile} {
                font-size: 1rem;
                float: none;
                text-align: center;
            }
        }

        .left{
            font-weight: bold;
            min-width: 120px;
        }

        .right{
        }
    }

    .fundraiser-ticket{
        background-image: url('/images/fundraiser-ticket.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 500px;
        height: 450px;
        margin: auto;

        @media #{$mobile} {
            width: 100%;
            height: 300px;
            margin-bottom: 25px;
        }
    }
</style>