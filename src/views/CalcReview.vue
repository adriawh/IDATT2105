<template>
  <div v-if="submitted" class="submitted">
    <h1>Form submitted</h1>
    <router-link to="/Calculator">
      <div class="container">
        <button>Back to calculator</button>
      </div>
    </router-link>
  </div>
  <div v-if="!submitted" class="form">
    <h1>Calculator feedback</h1>

    <form @submit.prevent="submit">
      <BaseInput label="Name" type="text" v-model="name" :error="errors.name" />
      <BaseInput
        label="Email"
        type="email"
        v-model.lazy="email"
        :error="errors.email"
      />
      <BaseInput
        label="Message"
        type="text"
        v-model="message"
        :error="errors.message"
      />
      <label v-if="sending">Sending</label>
      <button v-else class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      user: ["name", "email", "message"],
    };
  },

  setup() {
    var submitted = ref(false);
    var sending = ref(false);
    const store = useStore();

    const validationSchema = object({
      name: string()
        .required()
        .matches(/^[A-ÅÆØa-æøå]*$/, "Please enter valid name"),
      email: string().email("Invalid email format").required(),
      message: string().required(),
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
    });

    const { value: name } = useField("name");
    const { value: email } = useField("email");
    const { value: message } = useField("message");

    name.value = store.state.name;
    email.value = store.state.email;

    const submit = handleSubmit((values) => {
      sending.value = true;
      axios
        .post(
          "https://my-json-server.typicode.com/adriawh/IDATT2105-fullstack_appliksjonsutvikling/user",
          values
        )
        .then((response) => {
          console.log("Response", response);
          submitted.value = true;
          store.commit("ADD_NAME", name);
          store.commit("ADD_EMAIL", email);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    });

    return {
      email,
      name,
      message,
      submit,
      errors,
      submitted,
      sending,
    };
  },
};
</script>

<style scoped>
.form {
  text-align: center;
  width: 70%;
  margin: auto;
  background-color: aliceblue;
}
form {
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: auto;
}

.btn {
  width: 150px;
  height: 50px;
  margin: auto;
  cursor: pointer;
}
</style>
