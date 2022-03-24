import { createStore } from "vuex";

export default createStore({
  state: {
    name: "",
    email: "",
    isFormSent: false,
    isLoggedIn: false,
    username: "",
    calculationLog: [],
    token: "",
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_USERNAME(state, username) {
      state.username = username;
      localStorage.username = username;
    },
    SET_CALCULATIONLOG(state, calculationLog) {
      state.calculationLog = calculationLog;
    },
    SET_IsFormSent(state, bool) {
      state.isFormSent = bool;
    },
    SET_IsLoggedIn(state, bool) {
      state.isFormSent = bool;
    },
    ADD_CALCULATION(state, calculation) {
      state.calculationLog.push(calculation);
    },
    ADD_PREVIOUS_CALCULATIONS(state, calculations) {
      state.calculationLog.push(calculations);
    },
    SET_TOKEN(state, token) {
      state.token = token;
      state.isLoggedIn = true;
    },
    LOG_OUT(state) {
      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
      state.calculationLog = [];
    },
  },
  getters: {
    GET_EMAIL(state) {
      return state.email;
    },
    GET_NAME(state) {
      return state.name;
    },
    GET_TOKEN(state) {
      return state.token;
    },
    GET_USERNAME(state) {
      return state.username;
    },
    GET_IsFormSent(state) {
      return state.isFormSent;
    },
    GET_IsLoggedIn(state) {
      return state.isLoggedIn;
    },
    GET_CALCULATIONLOG(state) {
      return state.calculationLog;
    },
  },
  actions: {},
  modules: {},
});
