<template>
  <div class="mt-3">
    <h4>Lista de chamados</h4>
    <div class="p-3 bg-white border border-info">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Descrição</th>
            <th scope="col">Criação</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ch in listaChamados" :key="ch.codigo">
            <th scope="row">{{ch.codigo}}</th>
            <td>{{ch.descricao}}</td>
            <td>{{ch.data}}</td>
            <td>{{ch.status}}</td>
            <td>
              <button
                class="btn btn-sm btn-primary"
                @click="novaResposta()">
                Responder
              </button>
              |
              <button class="btn btn-sm btn-success">
                Atualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TecnicaChamadosComponent',
  data() {
    return {
      listaChamados: [
        {
          codigo: '01',
          descricao: 'descrição 001',
          data: '01/12/2022',
          status: 'Aguardando'
        },
        {
          codigo: '02',
          descricao: 'descrição 002',
          data: '02/12/2022',
          status: 'Aguardando'
        },
        {
          codigo: '03',
          descricao: 'descrição 003',
          data: '03/12/2022',
          status: 'Aguardando'
        }
      ]
    }
  },
  methods: {
    novaResposta() {
      this.$emit('newRes')
    }
  }
}
</script>
