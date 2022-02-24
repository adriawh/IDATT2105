import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    email: "",
    isFormSent: false,
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_IsFormSent(state, bool) {
      state.isFormSent = bool;
    },
  },
  getters: {
    GET_EMAIL(state) {
      return state.email;
    },
    GET_NAME(state) {
      return state.name;
    },
    GET_IsFormSent(state) {
      return state.isFormSent;
    },
  },
  actions: {},
  modules: {},
});
