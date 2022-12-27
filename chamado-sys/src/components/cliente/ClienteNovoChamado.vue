<template>
  <div class="mt-3">
    <h4>Novo chamado</h4>
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
        <div class="text-center mt-5">
          <button class="btn btn-primary">
              Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClienteNovoChamadoComponent'
}
</script>

<style scoped>

</style>
