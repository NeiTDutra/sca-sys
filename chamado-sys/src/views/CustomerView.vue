<template>
  <div class="page">
    <h3>Cliente</h3>
    <hr>
    <button
      class="btn btn-primary"
      v-if="newCall"
      @click="novoChamado()">
      Abrir Novo Chamado
    </button>
    <button
      class="btn btn-primary"
      v-else
      @click="newCall = true">
      Ver Lista de Chamados
    </button>
    <ClienteNovoChamado v-if="!newCall" :idCh="newIdCh"/>
    <ClienteChamados v-else @newMessage="sendMessage"/>
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
      newCall: true,
      newIdCh: ''
    }
  },
  methods: {
    sendMessage(e) {
      this.newCall = false
      this.newIdCh = e
    },
    novoChamado() {
      this.newCall = false
      this.newIdCh = ''
    }
  }
}
</script>

<style scoped>

</style>
