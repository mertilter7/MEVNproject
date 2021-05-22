<template>
  <div class="container">
    <form @submit.prevent="createUser" method="POST">
      <label>{{ userLoginText }}</label>
      <br />
      <input v-model="userName" type="text" placeholder="Kullanıcı Adı girin" />
      <router-link to="/">
        <button class="btn" type="submit">Giriş Yap</button>
      </router-link>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "userlogin",
  data() {
    return {
      userLoginText: "Kullanıcı Adı Girin",
      userName: [],
    };
  },
  methods: {
    createUser() {
      axios
        .post("http://localhost:5000/users", { userName: this.userName })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 800px;
}
form {
  margin-top: 200px;
}
button {
  padding: 10px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
}
button:hover {
  padding: 10px;
  color: black;
  background-color: white;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
input {
  text-align: center;
  padding: 5px;
  margin-top: 6px;
  border: 1px solid black;
  border-radius: 5px;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
}
input:hover {
  border: 2px solid black;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
}
label {
  font-weight: bolder;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>