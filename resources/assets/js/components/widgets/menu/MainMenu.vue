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
                                    <b-dropdown-item>
                                        <router-link :to="{ path: '/accomplishments/mayor'}" class="nav-link">As Mayor</router-link>
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <router-link :to="{ path: '/accomplishments/regional-councillor'}" class="nav-link">As Regional Councillor</router-link>
                                    </b-dropdown-item>
                                </b-nav-item-dropdown>
                                <li class="nav-item">
                                    <router-link :to="{ path: '/supports'}" class="nav-link">Supports</router-link>
                                </li>
                            </b-nav>
                        </b-navbar-nav>
                    </b-collapse>

                </b-navbar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main-menu"
    }
</script>