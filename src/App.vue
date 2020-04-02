<template>
  <v-app style="background-color: #15161b">
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import Dashboard from "./views/Dashboard";


  import Navbar from "./components/navbar";
  export default {
    name: 'App',

    components: {
      Dashboard,
      Navbar

    },

    data(){
      return {

      }
    },
  };
</script>