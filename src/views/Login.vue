<template>
    <div class="login">
        <v-app>
            <v-content>
                <v-container class="fill-height" fluid>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8" md="8">
                            <v-card>
                                <v-card-title>
                                    <h1>Login</h1>
                                </v-card-title>
                                <v-card-text>
                                    <v-form v-model="valid">
                                        <v-text-field type="email" label="Email" name="email" :rules="[required('Email'), emailValid]" v-model="email"></v-text-field>
                                        <v-text-field type="password" label="Password" name="password" :rules="[required('Password'), minLength('Password', 6)]" v-model="password"></v-text-field>
                                        <v-btn @click="submit" color="primary" :disabled="!valid">login</v-btn>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                valid : false,
                email : "",
                password : "",
                required(propertyType){
                    return v => v && v.length > 0 || `You must enter a ${propertyType}`
                },
                minLength(propertyType, min){
                    return v => v && v.length >= min || `${propertyType} must be at least ${min} characters`
                },
                maxLength(propertyType, max){
                    return v => v && v.length <= max || `${propertyType} must be less than ${min} characters`
                },
                emailValid: v => /.+@.+/.test(v) || 'E-mail must be valid'

            }
        },
        methods : {
            submit(){
                alert(`Logged in as ${this.email} with password: ${this.password}`)
            }
        }
    }
</script>

<style scoped>

</style>