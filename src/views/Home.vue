<template>
  <div class="home">
    <About msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    About,
  },
};
</script>
