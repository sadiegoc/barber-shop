<template>
  <div class="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Content from './components/templates/Content.vue';
import Footer from './components/templates/Footer.vue';
import Header from './components/templates/Header.vue';

export default {
  name: 'App',
  components: { Header, Content, Footer }
}
</script>

<style>
:root {
  --header-h: 100px;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

body {
  width: 100%; height: 100%;
  margin: 0; padding: 0;
}
</style>
