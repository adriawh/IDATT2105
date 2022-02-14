<template>
  <div class="container">
    <h1>Calculator feedback</h1>

    <form @submit.prevent="sendForm">
      <BaseInput label="Navn" type="text" v-model="user.name" />
      <BaseInput label="Epost" type="email" v-model="user.email" />
      <BaseInput label="Melding" type="text" v-model="user.message" />

      <button type="submit">Submit</button>
    </form>
    <pre>
    {{ user }}
  </pre
    >
  </div>
</template>

<script>

import { useField } from 'vee-validate';
import axios from "axios";
export default {

  setup(){
    function onSubmit(){
      alert('Submitted')
    }

    const email = useField('email', function(value){
      if(!value) return 'This field is required'

      return true
    })
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
  methods: {
    sendForm() {
      axios
        .post()
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
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
