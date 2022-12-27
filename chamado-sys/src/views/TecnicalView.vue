<template>
  <div class="page">
    <h3>Técnica</h3>
    <hr>
    <TecnicaChamados v-if="!newAt" @newRes="resNew"/>
    <AtendimentoResposta v-else @resCancel="resCancel"/>
  </div>
</template>

<script>
import TecnicaChamados from '../components/empresa/TecnicaChamados.vue'
import AtendimentoResposta from '../components/empresa/AtendimentoResposta.vue'

export default {
  name: 'TecnicalView',
  components: {
    TecnicaChamados,
    AtendimentoResposta
  },
  data() {
    return {
      newAt: false
    }
  },
  methods: {
    resNew() {
      this.newAt = true
    },
    resCancel() {
      this.newAt = false
    }
  }
}
</script>

<style scoped>

</style>
