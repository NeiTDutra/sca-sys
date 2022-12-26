<template>
  <div class="bg-white w-50 pb-3 pt-2">
    <form class="m-5" action="" @submit.prevent>
      <div class="form-group pt-3 row">
        <label for="exampleInputEmail1" class="col-sm-2 col-form-label">E-mail</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
        </div>
      </div>
      <div class="form-group mt-3 row">
        <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Senha</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
        </div>
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
