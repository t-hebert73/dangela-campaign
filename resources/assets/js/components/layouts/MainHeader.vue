<template>
    <header class="site-header">
<!--        <div class="fundraiser">
            <div class="fundraiser-text"><i class="fa fa-bullhorn mr-2" aria-hidden="true"></i> Wine & Cheese Fundraiser - September 20th</div>
            <div class="fundraiser-link">
                <router-link :to="{ path: '/fundraiser'}" class="btn btn-primary">View Details</router-link>
            </div>
        </div>-->
        <main-menu></main-menu>

        <div class="info-bar">
            <div class="better-niagara mb-3">
                <a class="external-link" target="_blank" title="Regional Council Voting Record" alt="Regional Council Voting Record" href="images/REGIONVOTING.png">
                    <div class="title">A Better Niagara</div>
                    <div class="better-niagara-logo"></div>
                    <span>Regional Council Voting Record</span>
                </a>
            </div>

            <div class="clearfix"></div>

            <div class="community-quotes">
                <i class="fa fa-quote-right" aria-hidden="true"></i>
                <a class="community-quotes-link" title="Community Quotes" href="files/quotebrochure.pdf" target="_blank">Community Quotes</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "main-header"
    }
</script>

<style scoped>

</style>