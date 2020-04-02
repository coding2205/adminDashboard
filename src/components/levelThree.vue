<template>
    <div class="level">
        <v-row class="text-center">
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="subtitle-1 font-weight-thin">{{item1Title}}</div>
                <div class="title font-weight-bold">{{item1Description}}</div>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="subtitle-1 font-weight-thin">{{item2Title}}</div>
                <div class="title font-weight-bold">{{item2Description}}</div>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <div class="subtitle-1 font-weight-thin">{{item3Title}}</div>
                <div class="title font-weight-bold">{{item3Description}}</div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "levelThree",
        props: {
            item1Title : {
                type: String,
                default: "Weekly Users",
            },
            item2Title : {
                type: String,
                default: "Monthly Users",
            },
            item3Title : {
                type: String,
                default: "Trend",
            },
            item1Description : {
                type: String,
                default: "Weekly Users",
            },
            item2Description : {
                type: String,
                default: "Monthly Users",
            },
            item3Description : {
                type: String,
                default: "fas fa-chevron-up",
            }
        }
    }
</script>

<style scoped>

</style>