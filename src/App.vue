<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
import Layout from "@/components/Layout";
export default {
  components: {
    Layout
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, PingFang, Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
