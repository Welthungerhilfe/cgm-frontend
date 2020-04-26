import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue, BIconViewList } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import authPlugin from "../src/plugins/authPlugin";
import axios from "axios";
import VueCookies from "vue-cookies-ts";

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(authPlugin);
Vue.use(VueCookies);

export const globalConf = new Vue({
  data: {
    //backendUrl: 'http://localhost:5000',
    backendUrl: "https://cgminbmz-dev.azurewebsites.net/",
    clientId: "28452a2f-fa24-4660-bd13-b75ad5df490c",
    //clientId: "42bb5bd1-637c-4b5f-bc1a-4a0fe91de6f1",
    tenant: "006dabd7-456d-465b-a87f-f7d557e319c8",
    authority:
      "https://whhict4x.b2clogin.com/whhict4x.onmicrosoft.com/b2c_1_sign_up_sign_in"
  }
});

axios.interceptors.request.use((request): any => {
  if (sessionStorage.loggedIn) {
    console.log(request);
    request.headers["Content-Type"] = "application/json";
    //request.headers['Access-Control-Allow-Origin'] = 'https://cgminbmz-dev.azurewebsites.net/v1/random';
    request.headers["Access-Control-Allow-Origin"] =
      globalConf.backendUrl + "/v1/random";
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
