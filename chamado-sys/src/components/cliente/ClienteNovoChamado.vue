<template>
  <div class="mt-3">
    <div class="pb-2 bg-white border border-info" v-if="idForMessage === ''">
      <form class="m-3" action="" @submit.prevent>
        <div class="form-group pt-3 row">
          <label for="InputCodigo" class="col-sm-3 col-form-label">Codigo do Produto</label>
          <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="InputCodigo"
                aria-describedby="codigoHelp"
                placeholder="Código do produto">
          </div>
        </div>
        <div class="form-group pt-3 row">
          <label for="InputDescricao" class="col-sm-3 col-form-label">Descrição do Problema</label>
          <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="InputDescricao"
                aria-describedby="cpfHelp"
                placeholder="Descrição do problema">
          </div>
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-primary">
              Salvar
          </button>
        </div>
      </form>
    </div>
    <div class="pb-2 mt-2 bg-white border border-info" v-if="idForMessage !== ''">
      <h5 class="m-3">Mensagens para o chamado: {{idForMessage}}</h5>
      <div class="m-3 p-3 mh25 bg-secondary">
        <div class="bg-light w-75 p-3 m-2" v-for="mess in messages" :key="mess.id">
          <div class="w-100" v-if="mess.cli">
            <p class="text-end size-sm-sm text-secondary">Você</p>
            <p class="text-end">{{mess.mensagem}}</p>
            <p class="size-sm text-end text-secondary">{{mess.dataCriacao}}</p>
          </div>
          <div class="w-100" v-else>
            <p class="text-start size-sm-sm text-secondary">Atendimento</p>
            <p class="text-start">{{mess.mensagem}}</p>
            <p class="size-sm text-start text-secondary">{{mess.dataCriacao}}</p>
          </div>
        </div>
      </div>
      <hr>
      <form class="m-3 p-3 bg-light" action="" @submit.prevent>
        <div class="form-group pt-3 row">
          <label for="InputMessage" class="col-sm-1 col-form-label">Mensagem</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" id="InputMessage" aria-describedby="messageHelp" placeholder="Nova Mensagem">
          </div>
          <div class="col-sm-1">
            <button class="btn btn-primary">
                Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClienteNovoChamadoComponent',
  data() {
    return {
      idForMessage: '',
      messages: [
        {
          id: '01',
          mensagem: 'Olá mensagem numero um...',
          dataCriacao: '12/12/2022',
          cli: true
        },
        {
          id: '02',
          mensagem: 'Olá mensagem numero dois...',
          dataCriacao: '12/12/2022',
          cli: false
        },
        {
          id: '03',
          mensagem: 'Olá mensagem numero tres...',
          dataCriacao: '12/12/2022',
          cli: true
        }
      ]
    }
  },
  props: {
    idCh: String
  },
  watch: {
    idCh: {
      handler(newIdCh) {
        this.idForMessage = newIdCh
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.size-sm {
  font-size: 0.8rem;
}
.size-sm-sm {
  font-size: 0.6rem;
}
.mh25 {
  height: 250px !important;
  overflow-y: scroll;
}
</style>
