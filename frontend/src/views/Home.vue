<template>
  <div class="container-fluid">
    <login v-if="!loggedIn"></login>
    <a-day-in-the-life-of-vue v-if="loggedIn"></a-day-in-the-life-of-vue>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import ADayInTheLifeOfVue from "../components/ADayInTheLifeOf.vue";

export default {
  name: "Home",
  data: function() {
    return {
      loggedIn: true
    };
  },
  components: {
    Login,
    ADayInTheLifeOfVue
  }
};
</script>
