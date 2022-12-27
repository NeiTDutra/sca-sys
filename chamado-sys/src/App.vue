<template>
  <div>
    <Header/>
    <div class="row pt-3">
      <div class="col col-sm-2">
        <MenuCliente v-if="cli"/>
        <MenuEmpresa v-if="tec"/>
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
import MenuCliente from './components/menu/MenuCliente.vue'
import MenuEmpresa from './components/menu/MenuEmpresa.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Pages,
    Header,
    Footer,
    MenuCliente,
    MenuEmpresa
  },
  data() {
    return {
      cli: true,
      tec: true
    }
  },
  mounted() {
    if (!this.cli && !this.tec) {
      this.$router.push('/login')
    }
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
  margin-bottom: 5%;
  padding-bottom: 5%;
}
</style>
