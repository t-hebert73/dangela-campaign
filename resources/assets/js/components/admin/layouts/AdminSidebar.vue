<template>
    <nav class="col-2 col-sm-3 col-lg-2 bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link :to="{ name: 'admin.dashboard'}" class="nav-link"
                                 v-b-tooltip.html.left title="View Stats">
                        <i class="fa fa-pie-chart"></i>
                        <span class="d-none d-sm-inline-block link-text">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'survey-submissions.index'}" class="nav-link" v-b-tooltip.html.right title="View & Manage Survey Answers">
                        <i class="fa fa-file-text"></i>
                        <span class="d-none d-sm-inline-block link-text">Survey Data</span>
                    </router-link>
                </li>

            </ul>

        </div>
    </nav>
</template>

<script>
  export default {
    name: 'admin-sidebar'
  }
</script>

<style scoped>

</style>