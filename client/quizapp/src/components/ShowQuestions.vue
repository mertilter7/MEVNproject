<template>
  <div class="container">
    <form @submit.prevent="sendingAnswers" method="POST" class="customForm">
      <div class="descr">
        <h2>{{ testDescription }}</h2>
      </div>
      <div v-for="(q, index) in quiz" :key="index">
        <ul>
          <li>
            {{ q.question }}
            <br />
            <input type="text" v-model="answer[index]" />
          </li>
        </ul>
      </div>
      <div class="btn">
        <button type="submit">Cevapları Gönder</button>
      </div>
    </form>
  </div>
</template>
<script>
import quiz from "../quiz.json";
import axios from "axios";
export default {
  name: "ShowQuestions",
  data() {
    return {
      quiz: quiz,
      answer: [],
      testDescription:
        "Bütün Soruları Cevapladıktan Sonra Doğru Cevapları Gör Sayfasına Giderek Cevaplara Ulaşabilirsiniz",
    };
  },
  methods: {
    sendingAnswers() {
      axios
        .post("http://localhost:5000/answers", { answer: this.answer })
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
    },
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
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button {
  padding: 10px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
}
button:hover {
  padding: 10px;
  color: black;
  background-color: white;
  border: 1px solid black;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
}
li {
  text-align: center;
  list-style-type: none;
  padding: 10px;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
}
input {
  padding: 5px;
  margin-top: 6px;
  border: 2px solid darkred;
  border-radius: 5px;
}
input:hover {
  border: 2px solid green;
}
.customForm {
  margin-top: 50px;
  margin-bottom: 50px;
}
.descr {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  color: red;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
