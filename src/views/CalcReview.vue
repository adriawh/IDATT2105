<template>
  <div class="container">
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
      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import axios from "axios";

export default {
  data() {
    return {
      user: ["name", "email", "message"],
    };
  },

  setup() {
    const validationSchema = object({
      name: string()
        .required()
        .matches(/^[A-ÅÆØa-æøå ]*$/, "Please enter valid name"),
      email: string().email("Invalid email format").required(),
      message: string().required(),
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
    });

    const { value: name } = useField("name");
    const { value: email } = useField("email");
    const { value: message } = useField("message");

    const submit = handleSubmit((values) => {
      axios
        .post(
          "https://my-json-server.typicode.com/adriawh/IDATT2105-fullstack_appliksjonsutvikling/user",
          values
        )
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    });
    return {
      email,
      name,
      message,
      submit,
      errors,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 70%;
  margin: auto;
  background-color: aliceblue;
}
form {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
