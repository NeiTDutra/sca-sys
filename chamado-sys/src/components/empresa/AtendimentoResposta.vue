<template>
  <div class="mt-3">
    <h4>Resposta de chamado</h4>
    <div class="pb-2 bg-white border border-info">
      <form class="m-3" action="" @submit.prevent>
        <div class="form-group pt-3 row">
          <label for="InputCodigo" class="col-sm-3 col-form-label">Codigo do Produto</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" id="InputCodigo" aria-describedby="codigoHelp" placeholder="Código do produto">
          </div>
        </div>
        <div class="form-group pt-3 row">
          <label for="InputDescricao" class="col-sm-3 col-form-label">Descrição do Problema</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" id="InputDescricao" aria-describedby="cpfHelp" placeholder="Descrição do problema">
          </div>
        </div>
        <div class="form-group pt-3 row">
          <label for="InputSolucao" class="col-sm-3 col-form-label">Solução do Problema</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" id="InputSolucao" aria-describedby="cpfHelp" placeholder="Solução do problema">
          </div>
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-primary">
              Enviar
          </button>
          <span>/</span>
          <button
            class="btn btn-secondary"
            @click="cancelRes()">
              Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtendimentoRespostaComponent',
  methods: {
    cancelRes() {
      this.$emit('resCancel')
    }
  }
}
</script>

<style scoped>

</style>
