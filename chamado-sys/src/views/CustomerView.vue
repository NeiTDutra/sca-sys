<template>
  <div class="page">
    <h3>Cliente</h3>
    <hr>
    <button
      class="btn btn-primary"
      v-if="newCall"
      @click="newCall = false">
      Abrir Novo Chamado
    </button>
    <button
      class="btn btn-primary"
      v-else
      @click="newCall = true">
      Ver Lista de Chamados
    </button>
    <ClienteNovoChamado v-if="!newCall"/>
    <ClienteChamados v-else/>
  </div>
</template>

<script>
import ClienteChamados from '../components/cliente/ClienteChamados.vue'
import ClienteNovoChamado from '../components/cliente/ClienteNovoChamado.vue'

export default {
  name: 'CustomerView',
  components: {
    ClienteChamados,
    ClienteNovoChamado
  },
  data() {
    return {
      newCall: true
    }
  }
}
</script>

<style scoped>

</style>
