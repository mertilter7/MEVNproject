<template>
  <nav>
    <div class="container">
      <router-link to="/answers">Doğru Cevapları Gör</router-link>
      <router-link to="/">Teste Geri Dön</router-link>
      <router-link to="/userlogin">Giriş Sayfası</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {
  width: 100%;
  height: auto;
  background-color: black;
  font-weight: bold;
  padding: 24px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
}
a {
  display: inline-block;
  margin-left: 60px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>