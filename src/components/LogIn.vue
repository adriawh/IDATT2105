<template>
  <div class="container">
    <div class="login" v-if="!this.$store.getters.GET_IsLoggedIn">
      <h1 v-if="signUp" class="logInStatus">Please sign up:)</h1>
      <h1 class="logInStatus" v-else id="logInHeader">Please log in:)</h1>

      <div>
        <BaseInput label="Username" type="text" v-model="username" />
        <BaseInput label="Password" type="password" v-model.lazy="password" />
        <button v-if="!signUp" @click="handleClickSignin">
          <span class="front"> Log in</span>
        </button>

        <button v-if="signUp" @click="handleRegister">
          <span class="front"> Sign up</span>
        </button>
      </div>

      <br />

      <button v-if="showSignUpButton" @click="changeToSignUp">
        <span class="front">Sign up now</span>
      </button>
    </div>

    <div class="loggedIn" v-else>
      Hello {{ this.$store.getters.GET_USERNAME }}
      <br />
      You are logged in!
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { doLogin, doRegister } from "@/utils/apiutil.js";

export default {
  data() {
    return {
      signUp: false,
      showSignUpButton: false,
      userNotFound: false,
      register: false,
      username: "",
      password: "",
    };
  },
  methods: {
    async handleClickSignin() {
      const loginRequest = { username: this.username, password: this.password };
      const loginResponse = await doLogin(loginRequest);
      if (loginResponse == "Wrong password") {
        alert(loginResponse);
      } else if (loginResponse == "User not found") {
        this.showSignUpButton = true;
        document.getElementById("logInHeader").innerHTML = loginResponse;
      } else {
        this.$store.commit("SET_TOKEN", loginResponse);
        this.$store.commit("SET_USERNAME", this.username);
      }
    },
    async handleRegister() {
      const registerRequest = {
        username: this.username,
        password: this.password,
      };
      const registerResponse = await doRegister(registerRequest);
      if (registerResponse == "User registered") {
        this.signUp = false;
        this.showSignUpButton = false;
        this.register = false;
      } else if (registerResponse == "Username is taken") {
        alert(registerResponse);
      }
    },

    changeToSignUp() {
      this.signUp = true;
      this.showSignUpButton = false;
      this.username = "";
      this.password = "";
    },
  },
  name: "Home",
};
</script>

<style scoped src="./../styles/Login.css" />
