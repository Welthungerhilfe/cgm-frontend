import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import authentication from './authentication'
import axios from "axios";

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue)

// Don't know if return type any is okay in this case
axios.interceptors.request.use((request): any => {
  authentication.acquireToken().then(token => {
    // Set default request headers for every request
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Ocp-Apim-Subscription-Key', 'api key');
    request.headers.set('Authorization', 'Bearer ' + token)
    return request;
  });
}, function (error: any) {
  return Promise.reject(error);
});

// Init adal authentication - then create Vue app.
authentication.initialize().then(_ => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
