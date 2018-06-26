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
                                    <router-link :to="{ path: '/about'}" class="nav-link">About</router-link>
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