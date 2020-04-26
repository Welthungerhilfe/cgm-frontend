<template>
  <div class="container-fluid">
    <monitor></monitor>
  </div>
</template>

<script>
import Monitor from "../components/Monitor.vue";

export default {
  name: "Home",
  data: function() {
    return {
      loggedIn: true
    };
  },
  components: {
    Monitor
  }
};
</script>
