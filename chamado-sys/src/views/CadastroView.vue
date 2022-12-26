<template>
  <div class="page">
    <h3>Cadastro</h3>
    <hr>
    <CadastroComponent/>
  </div>
</template>

<script>
import CadastroComponent from '../components/cadastro/Cadastro.vue'

export default {
  name: 'CadastroView',
  components: {
    CadastroComponent
  }
}
</script>

<style scoped>

</style>
