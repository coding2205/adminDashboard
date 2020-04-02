<template>
    <div class="card">
        <v-card v-bind:class="backgroundColor">
            <v-list-item three-line class="pr-10 pl-6 pt-3 pb-1">
                <v-list-item-content>
                    <v-list-item-subtitle class="mb-1 text-uppercase pb-2">{{title}}</v-list-item-subtitle>
                    <v-list-item-title class="display-1 font-weight-bold pb-2">{{value}}</v-list-item-title>
                    <v-list-item-subtitle><div class="caption"><span class="primary--text">{{trend}}</span> {{caption}}</div></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                    <v-icon v-bind:color="themeColor">{{icon}}</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "dashboardCard",
        props:{
            title: {
                type: String,
                default: "Users total"
            },
            value: {
                default: 400
            },
            caption: {
                type: String,
            },
            icon: {
                type: String,
                default: "fas fa-users"
            },
            backgroundColor: {
                type: String,
            },
            themeColor : {
                default : "#FFFFFF"
            },
            trend : {

            }
        }
    }
</script>

<style scoped>
    .border-color-1{
        border-left: 4px solid rgba(255,99,132,1);
    }
    .bg-gradient-one {
        background: #1f1498!important;
        background: linear-gradient(45deg,#321fdb,#1f1498)!important;
        border-color: #1f1498!important;
    }
    .bg-gradient-two {
        background: #2982cc!important;
        background: linear-gradient(45deg,#39f,#2982cc)!important;
        border-color: #2982cc!important;
    }
    .bg-gradient-three {
        background: #f6960b!important;
        background: linear-gradient(45deg,#f9b115,#f6960b)!important;
        border-color: #f6960b!important;
    }
    .bg-gradient-four {
        background: #d93737!important;
        background: linear-gradient(45deg,#e55353,#d93737)!important;
        border-color: #d93737!important;
    }
    .border-divider{
        border-bottom: #15161b solid 1px;
    }
</style>