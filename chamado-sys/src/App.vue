<template>
  <div>
    <Header/>
    <div class="row pt-3">
      <div class="col col-sm-2">
        <Menu/>
      </div>
      <div class="col col-sm-9 bg-light">
        <Pages/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Pages from './components/Pages.vue'
import Header from './components/Header.vue'
import Menu from './components/menu/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Pages,
    Header,
    Footer,
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#app .page {
  justify-content: center;
}
</style>
