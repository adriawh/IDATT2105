<template>
  <div class="container">
    <h1 id="calculatorTitle">clcltr.</h1>

    <div class="calculator">
      <div class="display">{{ current }}</div>

      <div class="buttons">
        <button @click="clear()" class="operator">
          <span class="front operatorFront">C</span>
        </button>

        <button @click="del()" class="operator double">
          <span class="front operatorFront">del</span>
        </button>

        <button
          @click="setOperator('/')"
          class="operator"
          id="divide"
          v-bind:class="{ active: operator == '/' }"
        >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front operatorFront">÷</span>
        </button>

        <button @click="addValue(7)">
          <span class="front">7</span>
        </button>

        <button @click="addValue(8)">
          <span class="front">8</span>
        </button>

        <button @click="addValue(9)">
          <span class="front">9</span>
        </button>

        <button
          @click="setOperator('*')"
          class="operator"
          id="multiply"
          v-bind:class="{ active: operator == '*' }"
        >
          <span class="front operatorFront">×</span>
        </button>

        <button @click="addValue(4)">
          <span class="front">4</span>
        </button>

        <button @click="addValue(5)">
          <span class="front">5</span>
        </button>

        <button @click="addValue(6)">
          <span class="front">6</span>
        </button>

        <button
          @click="setOperator('-')"
          class="operator"
          id="minus"
          v-bind:class="{ active: operator == '-' }"
        >
          <span class="front operatorFront">-</span>
        </button>

        <button @click="addValue(1)">
          <span class="front">1</span>
        </button>

        <button @click="addValue(2)">
          <span class="front">2</span>
        </button>

        <button @click="addValue(3)">
          <span class="front">3</span>
        </button>

        <button
          @click="setOperator('+')"
          class="operator"
          id="plus"
          v-bind:class="{ active: operator == '+' }"
        >
          <span class="front operatorFront">+</span>
        </button>

        <button @click="addValue(0)" class="">
          <span class="front">0</span>
        </button>

        <button @click="addComma()">
          <span class="front">.</span>
        </button>

        <button @click="getAnswer()" class="operator double">
          <span class="front operatorFront">=</span>
        </button>
      </div>
    </div>

    <div class="log">
      <h1>Calculations</h1>
      <ul id="list">
        <li
          v-for="calculation in this.$store.getters.GET_CALCULATIONLOG.slice().reverse()"
          v-bind:key="calculation"
        >
          {{ calculation }}
        </li>
      </ul>
      <button
        :disabled="fetchedPrevious"
        v-bind:class="{ fetchedPrevious: fetchedPrevious }"
        class="logButton"
        v-if="this.$store.getters.GET_IsLoggedIn"
        @click="getPreviousCalculations"
      >
        <span v-if="!fetchedPrevious" class="front logButtonFront"
          >Get previous calculations</span
        >
        <span v-else class="front logButtonFront"
          >No calculations to fetch</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      current: "0",
      fetchedPrevious: false,
      previous: "",
      operator: null,
      hasComma: false,
      calculations: [],
      config: {
        headers: {
          Authorization: "Bearer " + this.$store.getters.GET_TOKEN,
        },
      },
    };
  },
  methods: {
    addValue(value) {
      if (this.current == "0") {
        this.current = value;
      } else {
        this.current = `${this.current}${value}`;
      }
    },
    addComma() {
      if (this.hasComma == false) {
        this.current = `${this.current}${"."}`;
        this.hasComma = true;
      }
    },

    setOperator(operator) {
      this.operator = operator;
      this.previous = this.current;
      this.current = "0";
    },

    getPreviousCalculations() {
      this.fetchedPrevious = true;
      axios
        .get("http://localhost:8888/getCalculations", this.config)
        .then((response) => {
          if (response.data != this.$store.getters.GET_CALCULATIONLOG) {
            response.data.forEach((element) => {
              this.$store.commit("ADD_CALCULATION", element);
            });
          }
        });
    },

    async getAnswer() {
      if (this.$store.getters.GET_IsLoggedIn) {
        await axios
          .post(
            "http://localhost:8888/user/calculate",
            {
              calculation: this.previous + this.operator + this.current,
            },
            this.config
          )
          .then((response) => {
            if (response.data.answer == null) {
              this.current = "error";
            } else {
              this.$store.commit(
                "ADD_CALCULATION",
                this.previous +
                  " " +
                  this.operator +
                  " " +
                  this.current +
                  " = " +
                  response.data.answer
              );
              this.current = response.data.answer;
            }
          });
      } else {
        await axios
          .post("http://localhost:8888/calculate", {
            calculation: this.previous + this.operator + this.current,
          })
          .then((response) => {
            if (response.data.answer == null) {
              this.current = "error";
            } else {
              this.$store.commit(
                "ADD_CALCULATION",
                this.previous +
                  " " +
                  this.operator +
                  " " +
                  this.current +
                  " = " +
                  response.data.answer
              );
              this.current = response.data.answer;
            }
          });
      }
      this.operator = "";
    },

    calculate() {
      let a = parseFloat(this.previous);
      let b = parseFloat(this.current);

      var operatorSign = null;

      if (this.operator != null) {
        switch (this.operator) {
          case "plus":
            this.current = a + b;
            operatorSign = "+";
            break;
          case "minus":
            this.current = a - b;
            operatorSign = "-";
            break;
          case "divide":
            this.current = a / b;
            operatorSign = "÷";
            break;
          case "multiply":
            this.current = a * b;
            operatorSign = "x";
            break;
        }
        this.calculations.push(
          a + " " + operatorSign + " " + b + " = " + this.current
        );
      }

      this.previous = null;
      this.operator = null;
      this.hasComma = false;
    },
    del() {
      this.current = this.current.substring(0, this.current.length - 1);
      if (this.current.length < 1) {
        this.current = "0";
      }
    },
    clear() {
      this.current = "0";
      this.previous = null;
      this.operator = null;
      this.hasComma = false;
    },
  },
};
</script>

<style scoped src="./../styles/Calculator.css" />
