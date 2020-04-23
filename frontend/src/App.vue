<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">A Day In The Life Of</router-link> |
      <a href="https://cgminbmz-dev.azurewebsites.net/login">Login</a> |
      <a href="https://cgminbmz-dev.azurewebsites.net/logout">Logout</a>
      <!--a href="http://localhost:5000/logout">Logout</a>
      <a href="http://localhost:5000/logout">Logout</a>
      <TODO: get login state and correct link from an app function -->
      <!--router-link to="/about">About</router-link-->
    </div>
    <router-view />
  </div>
</template>

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
