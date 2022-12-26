<template>
  <div class="pb-3 bg-white w-50">
    <form class="m-5" action="" @submit.prevent>
      <div class="form-group pt-3">
        <label for="InputName">Nome</label>
        <input type="text" class="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Seu nome">
      </div>
      <div class="form-group pt-3">
        <label for="InputTel">Telefone</label>
        <input type="tel" class="form-control" id="InputTel" aria-describedby="telHelp" placeholder="Seu telefone">
      </div>
      <div class="form-group pt-3">
        <label for="InputEmail1">E-mail</label>
        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
      </div>
      <div class="form-group mt-3">
        <label for="InputPassword1">Senha</label>
        <input type="text" class="form-control" id="InputPassword1" placeholder="Sua senha">
      </div>
      <div class="form-group mt-3">
        <label for="InputPassword2">Repita senha</label>
        <input type="text" class="form-control" id="InputPassword2" placeholder="Repita sua senha">
      </div>
      <div class="text-center mt-3">
        <button class="btn btn-sm btn-outline-primary">
            Cadastrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroComponent'
}
</script>

<style scoped>

</style>
