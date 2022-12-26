<template>
  <div class="bg-white w-50 pb-3">
    <form class="m-5" action="" @submit.prevent>
      <div class="form-group pt-3">
        <label for="exampleInputEmail1">E-mail</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
      </div>
      <div class="form-group mt-3">
        <label for="exampleInputPassword1">Senha</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-outline-primary">
          Entrar
        </button>
      </div>
    </form>
    <div class="text-center">
      <span>Ou cadastre-se <router-link to="./cadastro">aqui</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent'
}
</script>

<style scoped>

</style>
