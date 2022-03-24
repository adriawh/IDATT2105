<template>
  <div class="container" v-if="this.$store.getters.GET_IsLoggedIn">
    <h1>Hello "{{ this.$store.getters.GET_USERNAME }}"</h1>

    You are now logged in. All your calculations will be stored at the server.

    <br /><br />
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

button {
  background: #d8dca7;
  border-radius: 10px;
  border: none;
  padding: 0;
  outline-offset: 4px;
}

.front {
  display: block;
  padding: 15px 42px;
  border-radius: 10px;
  font-size: 1.5rem;
  background: #f6f7eb;
  color: black;
  transform: translateY(-4px);
  font-weight: bolder;
  will-change: transform;
  transition: transform 150ms;
}

button:hover .front {
  cursor: pointer;
  transform: translateY(-6px);
}

button:active .front {
  transform: translateY(-2px);
}
</style>
