import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: {
        dark: true,
        options:{
            customProperties: true,
        },
        themes: {
            dark: {
                background: "#15161b", // #E53935
                surface: {
                    base: "#1f2029",
                    darken1: "#202029"
                },
                primary: {
                    base: "#02dbc5",

                },
                secondary: {
                    base: "#d048b6",

                },
                tertiary: {
                    base: "#28a0f3",
                },
                color1 :{
                    base: "#f93964"
                },
                color2 :{
                    base: "#dbaa27"
                },
                color3 :{
                    base: "#a564eb"
                },
                color4 : {
                    base: "#41b480"
                }
            },
        },
    },
})

