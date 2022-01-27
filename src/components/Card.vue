<template>
  <router-link to="/calculator">
    <div class="container">
      <h3>{{ title }}</h3>
      <h5>{{ description }}</h5>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
router-link a {
  text-decoration: none !important;
}
.container {
  padding: 30px;
  border-radius: 20px;
  color: #f6f7eb;
  box-shadow: 5px 10px darkgray;
  border: solid;
  width: 200px;
  height: 200px;
}
h1 {
  color: #f6f7eb;
}
h3 {
}
</style>
