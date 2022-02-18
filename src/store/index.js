import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    email: "",
  },
  mutations: {
    ADD_NAME(state, name) {
      state.name = name;
    },
    ADD_EMAIL(state, email) {
      state.email = email;
    },
  },
  actions: {},
  modules: {},
});
