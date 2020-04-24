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

// Init adal authentication - then create Vue app.
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
