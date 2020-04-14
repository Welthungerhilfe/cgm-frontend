<template>
  <div class="home">
    <img alt="Image" src="../assets/default.jpg" />
    <ADayInTheLifeOf />
  </div>
</template>

<script>
// @ is an alias to /src
import ADayInTheLifeOf from "@/components/ADayInTheLifeOf.vue";

export default {
  name: "Home",
  components: {
    ADayInTheLifeOf
  }
};
</script>
