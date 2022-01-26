<template>
  <div class="home">
    <h1>This is a Vue app made to showcase my work in the subject IDATT2105</h1>
  </div>

  <h1>APE</h1>
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

<style scoped>
h1 {
  color: #f6f7eb;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
