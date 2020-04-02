<template>
    <div class="dashboard">
        <navbar title="Dashboard"></navbar>
        <div>
            <v-row class="ma-6">
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard backgroundColor="surface darken-1" icon="fas fa-user" title="Users" value="54.2K" caption="from last 24 hours" themeColor="color2" trend="+50%"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard backgroundColor="surface darken-1" icon="fas fa-shopping-basket" title="Orders" value="74.5k" caption="from last 24 hours" themeColor="tertiary" trend="-10%"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard backgroundColor="surface darken-1" icon="fas fa-dollar-sign" title="Revenue" value="$46,782" caption="from last 24 hours" themeColor="color3" trend="0%"></dashboardCard>
                </v-col>
                <v-col cols="12" sm="12" md="3" lg="3">
                    <dashboardCard backgroundColor="surface darken-1" icon="fas fa-coins" title="Product Sold" value="1,890" caption="from last 24 hours" themeColor="color1" trend="+25%"></dashboardCard>
                </v-col>
            </v-row>
            <v-row class="ma-6">
                <v-col cols="12" sm="12" md="8" lg="8">
                    <v-card class="surface darken-1 pl-1">
                        <v-card-text>
                            <div class="title white--text pb-1">{{orderCard.title}}</div>
                            <div class="font-weight-thin">{{orderCard.description}}</div>
                        </v-card-text>

                        <v-card-text>
                            <chartjs-bar v-bind:data="orderCard.data" v-bind:labels="orderCard.labels" backgroundcolor="rgba(2, 219, 197, 0.2)"></chartjs-bar>
                        </v-card-text>
                        <v-card-text>
                            <level v-bind:item1-title="orderCard.level.item1_title" v-bind:item2-title="orderCard.level.item2_title" v-bind:item3-title="orderCard.level.item3_title" v-bind:item1-description="orderCard.level.item1_description" v-bind:item2-description="orderCard.level.item2_description" v-bind:item3-description="orderCard.level.item3_description"></level>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-card class="surface darken-1 rounded-card">
                        <v-card-text>
                            <div class="subtitle-1 white--text pb-1">{{earningsCard.metaDetail}}</div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div class="headline white--text mb-3">{{earningsCard.title}}</div>
                            <div class="caption mb-4">{{earningsCard.date}}</div>
                            <div class="display-1 mb-2 white--text">{{earningsCard.total}}</div>
                            <v-row class="text-center">
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <div>{{earningsCard.level.item1_title}}</div>
                                    <div class="title white--text">{{earningsCard.level.item1_description}}</div>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <div>{{earningsCard.level.item2_title}}</div>
                                    <div class="title white--text">{{earningsCard.level.item2_description}}</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-text>
                            <chartjs-line v-bind:data="earningsCard.data" v-bind:labels="earningsCard.labels" backgroundcolor="rgba(2, 219, 197, 0.2)"></chartjs-line>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/navbar";
    import level from "../components/levelThree";
    import chart from "../components/archive/chart";
    import dashboardCard from "../components/dashboardCard";

    export default {
        name: "Dashboard",
        components: {Navbar, level, chart, dashboardCard},
        data(){
            return {
                orderCard : {
                    title : "Orders",
                    description : "Your sales and referral earnings over the last 30 days.",
                    data : [110, 190, 105, 195, 390, 260, 160, 90],
                    labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                    level : {
                        item1_title : "Weekly Orders",
                        item2_title : "Monthly Orders",
                        item3_title : "Yearly Orders",
                        item1_description : "67.2k",
                        item2_description : "162.4k",
                        item3_description : "1M+",
                    }
                },
                earningsCard : {
                    metaDetail : "Earning Details",
                    title : "Earning Reports",
                    date : "1 Mar - 31 Mar Data",
                    total : "$1,650,203",
                    data :  ["111", "301", "400", "460", "560", "336", "1900"],
                    labels : ["S", "M", "T", "W", "T", "F", "S"],
                    level : {
                        item1_title : "This Month",
                        item2_title : "$117,968",
                        item1_description : "Last Month",
                        item2_description : "$74,568",
                    }
                }
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