<template>
  <div class="container" v-if="this.$store.getters.GET_IsLoggedIn">
    <h1>Hello "{{ this.$store.getters.GET_USERNAME }}"</h1>

    You are now logged in. All your calculations will be stored at the server.

    <button @click="logOut" class="">
      <span class="front">Log out</span>
    </button>
  </div>
  <Login v-else />
</template>

<script>
import Login from "../components/Login.vue";
// @ is an alias to /src

export default {
  components: { Login },
  methods: {
    logOut() {
      this.$store.commit("LOG_OUT");
    },
  },
};
</script>

<style scoped>
.container {
  font-size: 150%;
  text-align: center;
  color: #f6f7eb;
}
</style>
