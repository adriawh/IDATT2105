<template>
  <div class="home">
    <h1>IDATT2105</h1>
    <h3>
      This vue application is made to showcase my work in the subject IDATT2105,
      full-stack app-development.
    </h3>
  </div>

  <div><router-link to="/calculator">clcltr</router-link></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  width: 70%;
  margin: auto;
  color: #f6f7eb;
  text-align: left;
}

h1 {
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
