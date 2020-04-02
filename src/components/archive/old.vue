<template>
    <div class="dashboard">
        <navbar title="Dashboard"></navbar>
        <div>
            <v-row class="ma-6">
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard title="User total" value="400" icon="fas fa-users" gradient="bg-gradient-one"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard title="User total" value="400" icon="fas fa-users" gradient="bg-gradient-two"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard title="User total" value="400" icon="fas fa-users" gradient="bg-gradient-three"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard title="User total" value="400" icon="fas fa-users" gradient="bg-gradient-four"></dashboardCard>
                </v-col>
            </v-row>
            <v-row class="ma-6">
                <v-col cols="12" sm="12" md="7" lg="7">
                    <v-card color="#212121">
                        <v-card-text>
                            <div class="title">{{graphOne.title}}</div>
                            <div class="font-weight-thin">{{graphOne.description}}</div>
                        </v-card-text>
                        <v-card-text class="hidden-sm-and-down">
                            <chart v-bind:graph-type="graphOne.type" v-bind:data="graphOne.data" v-bind:labels="graphOne.labels"></chart>
                        </v-card-text>
                        <v-card-text>
                            <level v-bind:item1-title="graphOne.level.item1_title" v-bind:item2-title="graphOne.level.item2_title" v-bind:item3-title="graphOne.level.item3_title" v-bind:item1-description="graphOne.level.item1_description" v-bind:item2-description="graphOne.level.item2_description" v-bind:item3-description="graphOne.level.item3_description"></level>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="5" lg="5">
                    <v-card>
                        <v-card-text>
                            {{graphTwo.title}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="hidden-sm-and-down">
                            <chart v-bind:graph-type="graphTwo.type" v-bind:data="graphTwo.data" v-bind:labels="graphTwo.labels"></chart>
                        </v-card-text>
                        <v-card-text>
                            <v-sheet>
                                <v-sparkline
                                        :labels="graphTwo.labels"
                                        :value="graphTwo.data"
                                        color="white"
                                        line-width="2"
                                        padding="16"
                                        auto-draw
                                ></v-sparkline>
                            </v-sheet>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import Navbar from "../navbar";
    import level from "../levelThree";
    import chart from "./chart";
    import dashboardCard from "../dashboardCard";

    export default {
        name: "Dashboard",
        components: {Navbar, level, chart, dashboardCard},
        data(){
            return {
                graphOne: {
                    type: "bar",
                    title: "Traffic Overview",
                    description: "Traffic Overview",
                    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun',],
                    data: [1000, 500, 300, 800, 100, 800, 1500],
                    level: {
                        item1_title: "Monthly Users",
                        item2_title: "Weekly Users",
                        item3_title: "Trend",
                        item1_description: "985,239",
                        item2_description: "465,733",
                        item3_description: "fas fa-chevron-up",
                    }
                },
                graphTwo: {
                    type: "pie",
                    title: "Traffic Overview",
                    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun',],
                    data: [1000, 500, 300, 800, 100, 800, 1500],
                },
            }
        },
    }
</script>

<style scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }

</style>


<v-navigation-drawer app class="miniVariant" color="surface" v-model="drawer" :mini-variant="miniVariant" permanent>
    <v-list>
        <v-list-item two-line :class="miniVariant && 'px-2'" color="#f8d419">
            <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title color="accentColor">Username Here</v-list-item-title>
                <v-list-item-subtitle color="accentColor">Logged in</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-icon @click="miniVariant = !miniVariant">
                    fas fa-compress-alt
                </v-icon>
            </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>


        <v-subheader v-if="!miniVariant">Main Settings</v-subheader>

        <v-list-item v-for="link in links.mainLinks" :key="link" router :to="link.route" nav>
            <v-list-item-icon>
                <v-icon color="accentColor">{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title color="white">{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <div class="projectPlugins" v-if="plugins.useProject">
            <v-subheader v-if="!miniVariant">Current Project</v-subheader>
            <v-list-item v-for="project in links.projectLinks" :key="project" router :to="project.route">
                <v-list-item-icon>
                    <v-icon color="accentColor">{{project.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title color="white">{{project.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </div>

        <div class="appPlugins" v-if="plugins.useApps">
            <v-subheader v-if="!miniVariant">Apps</v-subheader>
            <v-list-item v-for="app in links.appLinks" :key="app" router :to="app.route">
                <v-list-item-icon>
                    <v-icon color="accentColor">{{app.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title color="white">{{app.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </div>


        <v-list-item v-if="miniVariant">
            <v-list-item-icon>
                <v-icon color="accentColor" @click="miniVariant = !miniVariant">fas fa-expand-alt</v-icon>
            </v-list-item-icon>
        </v-list-item>
    </v-list>
</v-navigation-drawer>links : {


mainLinks: [
{'text': 'Dashboard', 'icon': 'fas fa-tachometer-alt', 'route': '/dashboard'},
{'text': 'User Profile', 'icon': 'fas fa-user', 'route': '/account',},

/*{'text': 'Dashboard', 'icon': 'fas fa-tachometer-alt', 'route': '/'}*/
],
appLinks: [
{'text': 'Todo', 'icon': 'fas fa-clipboard-check', 'route': '/todo'},
{'text': 'Calander', 'icon': 'far fa-calendar', 'route': '/calander'},
{'text': 'Contact Forms', 'icon': 'fas fa-file-signature', 'route': '/contact'},
{'text': 'Stocks', 'icon': 'fas fa-chart-line', 'route': '/stock'},
],
projectLinks: [
{'text': '', 'icon': '', 'route': ''},
]
},


<v-row class="ma-6">
    <v-col cols="12" sm="12" md="7" lg="7">
        <v-card class="surface darken-1">
            <v-card-text>
                <div class="title">{{salesCard.title}}</div>
                <div class="font-weight-thin">{{salesCard.description}}</div>
            </v-card-text>
            <v-card-text>

            </v-card-text>
            <v-card-text>
                <level v-bind:item1-title="salesCard.level.item1_title" v-bind:item2-title="salesCard.level.item2_title" v-bind:item3-title="salesCard.level.item3_title" v-bind:item1-description="salesCard.level.item1_description" v-bind:item2-description="salesCard.level.item2_description" v-bind:item3-description="salesCard.level.item3_description"></level>
            </v-card-text>
        </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="5" lg="5">
        <v-card class="surface darken-1">
            <v-card-text>
                <div class="title">{{tasksCard.title}}</div>
                <div class="font-weight-thin">{{tasksCard.description}}</div>
            </v-card-text>
            <v-card-text>

            </v-card-text>
        </v-card>
    </v-col>
</v-row>


<v-card-text>
    <level v-bind:item1-title="salesCard.level.item1_title" v-bind:item2-title="salesCard.level.item2_title" v-bind:item3-title="salesCard.level.item3_title" v-bind:item1-description="salesCard.level.item1_description" v-bind:item2-description="salesCard.level.item2_description" v-bind:item3-description="salesCard.level.item3_description"></level>
</v-card-text>


<v-row class="ma-6">
    <v-col cols="12" sm="12" md="3" lg="3">
        <dashboardCard backgroundColor="surface darken-1" icon="fas fa-user" title="Users" value="400"></dashboardCard>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3">
        <dashboardCard backgroundColor="surface darken-1" icon="fas fa-user" title="Users" value="400"></dashboardCard>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3">
        <dashboardCard backgroundColor="surface darken-1" icon="fas fa-user" title="Users" value="400"></dashboardCard>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3">
        <dashboardCard backgroundColor="surface darken-1" icon="fas fa-user" title="Users" value="400"></dashboardCard>
    </v-col>
</v-row>