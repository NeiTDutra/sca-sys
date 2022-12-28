<template>
  <div class="mt-3">
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
          <tr v-for="ch in listaChamados" :key="ch.id">
            <td>{{ch.codigo_produto}}</td>
            <td>{{ch.descricao}}</td>
            <td>{{ch.data}}</td>
            <td>{{ch.status}}</td>
            <td>
              <button class="btn btn-sm btn-danger">
                Excluir
              </button>
              |
              <button
                class="btn btn-sm btn-warning"
                @click="sendMessage(ch.id)">
                Mensagens
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
  name: 'ClienteChamadosComponent',
  data() {
    return {
      listaChamados: [
        {
          id: '01',
          codigo_produto: '01',
          descricao: 'descrição 001',
          data: '01/12/2022',
          status: 'Aguardando'
        },
        {
          id: '02',
          codigo_produto: '02',
          descricao: 'descrição 002',
          data: '02/12/2022',
          status: 'Aguardando'
        },
        {
          id: '03',
          codigo_produto: '03',
          descricao: 'descrição 003',
          data: '03/12/2022',
          status: 'Aguardando'
        }
      ]
    }
  },
  methods: {
    sendMessage(id) {
      this.$emit('newMessage', id)
    }
  }
}
</script>
