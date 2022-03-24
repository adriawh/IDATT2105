<template>
  <div id="nav">
    <router-link to="/">About</router-link>
    <router-link to="/CalculatorView">clcltr</router-link>

    |
    <router-link to="/ProfilePage">
      <a class="logInStatus" v-if="this.$store.getters.GET_IsLoggedIn">
        {{ this.$store.getters.GET_USERNAME }}
      </a>
      <a class="logInStatus" v-if="!this.$store.getters.GET_IsLoggedIn">
        Not logged in
      </a>
    </router-link>
  </div>
  <router-view />
</template>

<script></script>

<style>
body {
  background-color: #26292c;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-direction: row-reverse;

  margin-top: 50px;
  gap: 30px;
  margin-right: 200px;
  color: #f6f7eb;
}

#nav a {
  font-weight: bold;
  color: #a9a9a9;
  font-style: none;
}

#nav a.router-link-exact-active {
  color: #f6f7eb;
}
#nav a.router-link-exact-active a {
  color: #f6f7eb;
}
.logInStatus {
  color: azure;
}
</style>
