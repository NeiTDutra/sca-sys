<template>
  <div class="pb-3 pt-2 bg-white w-75">
    <form class="m-5" action="" @submit.prevent>
      <div class="form-group pt-3 row">
        <label for="InputName" class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="InputName" aria-describedby="nameHelp" placeholder="Seu nome">
        </div>
      </div>
      <div class="form-group pt-3 row">
        <label for="InputCpf" class="col-sm-2 col-form-label">CPF</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="InputCpf" aria-describedby="cpfHelp" placeholder="Seu cpf">
        </div>
      </div>
      <div class="form-group pt-3 row">
        <label for="InputTel" class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-sm-10">
            <input type="tel" class="form-control" id="InputTel" aria-describedby="telHelp" placeholder="Seu telefone">
        </div>
      </div>
      <div class="form-group pt-3 row">
        <label for="InputEmail1" class="col-sm-2 col-form-label">E-mail</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Seu email">
        </div>
      </div>
      <div class="form-group mt-3 row">
        <label for="InputPassword1" class="col-sm-2 col-form-label">Senha</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="InputPassword1" placeholder="Sua senha">
        </div>
      </div>
      <div class="form-group mt-3 row">
        <label for="InputPassword2" class="col-sm-2 col-form-label">Repita senha</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="InputPassword2" placeholder="Repita sua senha">
        </div>
      </div>
      <div class="form-check form-check-inline mt-4">
        <input class="form-check-input" type="radio" name="tipo" id="inlineRadio1" value="cliente">
        <label class="form-check-label" for="inlineRadio1">Sou cliente</label>
      </div>
      <div class="form-check form-check-inline mt-4">
        <input class="form-check-input" type="radio" name="tipo" id="inlineRadio2" value="colaborador">
        <label class="form-check-label" for="inlineRadio2">Sou colaborador</label>
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
