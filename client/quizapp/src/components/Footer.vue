<template>
  <footer>
    <div class="container">
      <div class="custom">
        <p>{{ footerText }}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footerText: "Güncel Sorularla Genel Kültür Testi",
    };
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
footer {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  text-align: center;
  background-color: black;
  color: white;
  padding: 24px;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  width: 100%;
  height: auto;
}
</style>>
