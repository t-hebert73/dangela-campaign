<template>
    <div class="main-menu-container">

        <div class="container">
            <div class="row ">

                <b-navbar-brand :to="{ name: 'home' }">Henry D'Angela</b-navbar-brand>

                <b-navbar toggleable="md">

                    <b-navbar-toggle target="nav_collapse">Menu </b-navbar-toggle>

                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav>
                            <b-nav>
                                <li class="nav-item">
                                    <router-link :to="{ path: '/bio'}" class="nav-link">Bio</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ path: '/community-involvement'}" class="nav-link">Community Involvement</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ path: '/political-experience'}" class="nav-link">Political Experience</router-link>
                                </li>
                                <b-nav-item-dropdown text="Accomplishments">
                                    <b-dropdown-item :to="{ path: '/accomplishments/mayor'}" link-class="nav-link">
                                        As Mayor
                                    </b-dropdown-item>
                                    <b-dropdown-item :to="{ path: '/accomplishments/regional-councillor'}" link-class="nav-link">
                                        As Regional Councillor
                                    </b-dropdown-item>
                                    <b-dropdown-item href="/files/initiatives.pdf" title="View Initiatives" link-class="nav-link" target="_blank">
                                        Initiatives
                                    </b-dropdown-item>
                                </b-nav-item-dropdown>
                                <li class="nav-item">
                                    <router-link :to="{ path: '/supports'}" class="nav-link">Supports</router-link>
                                </li>
                            </b-nav>
                        </b-navbar-nav>
                    </b-collapse>

                </b-navbar>

                <info-bar :show-gt="1200"></info-bar>
            </div>
        </div>
    </div>
</template>

<script>
import InfoBar from '../InfoBar.vue';
    export default {
    name: "main-menu",
    components: { InfoBar }
}
</script>