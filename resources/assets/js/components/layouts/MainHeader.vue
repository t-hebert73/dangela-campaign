<template>
    <header>
        <div class="fundraiser">
            <div class="fundraiser-text"><i class="fa fa-bullhorn mr-2" aria-hidden="true"></i> Wine & Cheese Fundraiser - September 20th</div>
            <div class="fundraiser-link">
                <router-link :to="{ path: '/fundraiser'}" class="btn btn-primary">View Details</router-link>
            </div>
        </div>
        <main-menu></main-menu>
    </header>
</template>

<script>
    export default {
        name: "main-header"
    }
</script>

<style scoped>

</style>