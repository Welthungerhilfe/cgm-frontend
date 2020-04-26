import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue, BIconViewList } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import authPlugin from "../src/plugins/authPlugin"
import axios from "axios";
import VueCookies from "vue-cookies-ts";

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(authPlugin)
Vue.use(VueCookies)

axios.interceptors.request.use((request): any => {
  if (sessionStorage.loggedIn) {
    console.log(request);
    request.headers['Content-Type'] = 'application/json';
    request.headers['Access-Control-Allow-Origin'] = 'https://cgminbmz-dev.azurewebsites.net/v1/random';
    return request;
  } else {
    return request;
  }
});

// Init adal authentication - then create Vue app.
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
