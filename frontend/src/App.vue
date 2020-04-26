<template>
  <div id="app">
    <div id="nav">
      <button v-on:click="logout()">Logout</button>
      <!--router-link to="/about">About</router-link-->
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import authPlugin from "../src/plugins/authPlugin";

export default Vue.extend({
  created() {
    Vue.prototype.auth.loginIfNeccessary();
  },
  methods: {
    logout: function() {
      Vue.prototype.auth.logout();
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
