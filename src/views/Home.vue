<template>
  <div class="home">
    <h1>IDATT2105</h1>
    <h3>
      This vue application is made to showcase my work in the subject IDATT2105,
      full-stack app-development.
    </h3>

    <div class="cardholder">
      <Card
        title="Calculator"
        description="A simple calculator with responsive buttons"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Card },
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
