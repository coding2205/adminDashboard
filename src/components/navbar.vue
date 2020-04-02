<template>
    <nav>
        <v-app-bar app flat color="background">
            <v-app-bar-nav-icon @click="drawer = !drawer"><v-icon class="hidden-md-and-up white--text">fas fa-list</v-icon><v-icon class="hidden-sm-and-down white--text">fas fa-bars</v-icon></v-app-bar-nav-icon>
            <v-toolbar-title class="">
                <!--<span class="font-weight-light">Admin</span>-->
                <span class="font-weight-light white--text">{{title}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon color="white">fas fa-cog</v-icon>
            </v-btn>
            <router-link to="/account">
                <v-btn icon>
                    <v-icon color="white">fas fa-user</v-icon>
                </v-btn>
            </router-link>
            <v-btn icon>
                <v-icon color="white">exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app class="miniVariant" color="surface" v-model="drawer" :mini-variant="miniVariant">


            <v-list dense nav>
                <v-list-item two-line :class="miniVariant && 'px-2'">
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Username Here</v-list-item-title>
                        <v-list-item-subtitle>Logged in</v-list-item-subtitle>
                    </v-list-item-content>
                    <!--<v-list-item-action>
                        <v-icon @click="miniVariant = !miniVariant">
                            fas fa-compress-alt
                        </v-icon>
                    </v-list-item-action>-->
                </v-list-item>
                <v-divider class="mb-2" />

                <v-list nav dense>
                    <v-list-item-group v-model="links" color="primary" :mini-variant="miniVariant">
                        <v-list-item v-for="link in links" :key="link" router :to="link.route" nav>
                            <v-list-item-icon>
                                <v-icon>{{link.icon}}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{link.text}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <!--<v-list-item v-if="miniVariant">
                        <v-list-item-icon>
                            <v-icon color="accentColor" @click="miniVariant = !miniVariant">fas fa-expand-alt</v-icon>
                        </v-list-item-icon>
                    </v-list-item>-->
                </v-list>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return  {
                drawer: true,
                miniVariant: false,
                links:[
                    {text: 'Dashboard', icon: 'fas fa-tachometer-alt', route: '/dashboard'},
                    {text: 'User Profile', icon: 'fas fa-user', route: '/account',},
                    {text: 'Contact Forms', icon: 'fas fa-address-book', route: '/contact',},
                    {text: 'Manage Admins', icon: 'fas fa-users-cog', route:"/admins"}
                ],

            }
        },
        props : {
            title : {
                type: String,
                default: "AdminDashboard"
            }
        }
    }
</script>

<style scoped>

</style>