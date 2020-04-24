<template>
  <div class="home">
    <img src="../assets/default.jpg" class="img-fluid" alt="Responsive image">
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
