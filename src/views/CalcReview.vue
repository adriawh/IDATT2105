<template>
  <div class="container">
    <h1>Calculator feedback</h1>

    <BaseInput label="Navn" type="text" />
    <BaseInput label="Epost" type="text" />
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },

  data() {
    return {
      user: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 50%;
  background-color: beige;
}
</style>
