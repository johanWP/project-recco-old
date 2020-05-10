import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#0075A2",
        secondary: "#ADF5FF",
        accent: "#0CAADC",
        error: "#FF1053",
        success: "#00FFC5",
        info: "#2196F3",
        warning: "#FFC107"
      }
    }
  },
  icons: {
    iconfont: "fas"
  }
});
