<template>
    <div class="userprofile">
        <navbar title="User Profile"></navbar>
        <v-container>
            <v-row class="ma-6">
                <v-col cols="12" sm="12" md="5" lg="5">

                </v-col>
                <v-col cols="12" sm="12" md="7" lg="7">
                    <v-card>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Navbar from "../components/navbar";
    export default {
        name: "UserProfile",
        components: {Navbar},
        data(){
            return {
                username : "Tayo Babs",
            }
        }
    }
</script>


<style scoped>
    .offset{
        outline-offset: 15px;
    }
</style>