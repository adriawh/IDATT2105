<template>
  <Calculator />

  <div class="feedbackContainer">
    <h4>Got feedback? Dont by shy, and send it in!</h4>
    <router-link to="/CalculatorFeedback" class="feedback">
      <button @click="getPreviousCalculations" class="">
        <span class="front">Feedback</span>
      </button>
    </router-link>
  </div>
</template>
<script>
import Calculator from "../components/Calculator.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Calculator },
};
</script>

<style scoped>
.feedbackContainer {
  color: #f6f7eb;
  position: absolute;
  text-align: center;
  bottom: 30px;
  left: 0;
  right: 0;
}
button {
  background: #d8dca7;
  border-radius: 10px;
  border: none;
  padding: 0;
  outline-offset: 4px;
}

.front {
  display: block;
  padding: 15px 42px;
  border-radius: 10px;
  font-size: 1.5rem;
  background: #f6f7eb;
  color: black;
  transform: translateY(-4px);
  font-weight: bolder;
  will-change: transform;
  transition: transform 150ms;
}

button:hover .front {
  cursor: pointer;
  transform: translateY(-6px);
}

button:active .front {
  transform: translateY(-2px);
}
</style>
