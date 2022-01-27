<template>
  <div id="nav">
    <router-link to="/">About</router-link>
    <router-link to="/calculator">clcltr</router-link>
  </div>
  <router-view />
</template>

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
  padding: 30px;
  gap: 30px;
  text-align: right;
  margin-right: 200px;
}

#nav a {
  font-weight: bold;
  color: #a9a9a9;
  font-style: none;
}

#nav a.router-link-exact-active {
  color: #f6f7eb;
}
</style>
