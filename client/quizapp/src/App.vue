<template>
  <div>
    <Navi />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navi from "@/components/Navi";
import Footer from "@/components/Footer";
export default {
  components: {
    Navi,
    Footer,
  },
};
</script>
<style>
</style>
