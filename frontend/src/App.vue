<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img
          src="../src/assets/default.jpg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
        />
        Child Growth Monitor
      </a>
      <button class="btn btn-danger my-2 my-lg-0" v-on:click="logout()">
        Logout
      </button>
    </nav>
    <!-- <router-link to="/about">About</router-link> -->
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

  .content {
    padding: 16px;
  }

  .margin-top {
    margin-top: 1rem;
  }
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
