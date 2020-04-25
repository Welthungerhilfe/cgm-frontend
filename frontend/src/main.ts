import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import authPlugin from "../src/plugins/authPlugin"
import axios from "axios";

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(authPlugin)

// axios.interceptors.request.use((request): any => {
// });

// Init adal authentication - then create Vue app.
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
