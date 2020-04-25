<template>
  <div class="container-fluid">
    <a-day-in-the-life-of-vue></a-day-in-the-life-of-vue>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import ADayInTheLifeOfVue from "../components/ADayInTheLifeOf.vue";

export default {
  name: "Home",
  components: {
    ADayInTheLifeOfVue
  }
};
</script>
