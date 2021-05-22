<template>
  <div id="correctAnswers">
    <div class="container">
      <div v-for="(c, index) in correct" :key="index" class="custom">
        <ul>
          <li>{{ c.cevap }}</li>
        </ul>
      </div>
    </div>
    <div id="userAnswers">
      <div class="container">
        <div>to be continue</div>
      </div>
    </div>
  </div>
</template>
<script>
import correct from "../correct.json";
export default {
  name: "correctAnswer",
  data() {
    return {
      correct: correct,
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: auto;
  margin-top: 35px;
  margin-bottom: 35px;
}
.custom {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  list-style-type: none;
  padding: 5px;
  color: green;
  font-size: 1.5rem;
}
</style>>
