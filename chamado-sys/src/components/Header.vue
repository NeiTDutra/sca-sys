<template>
  <div id="header" class="w-100 bg-light p-2 text-center border border-info">
    <div class="row">
      <div class="col col-sm-4">
        <h1 class="text-danger">Sistema de Chamados</h1>
      </div>
      <div class="col col-sm-4 mt-2">
        <h2 class="text-warning">Sistema Em Desenvolvimento</h2>
      </div>
      <div class="col col-sm-4 mt-2">
        <span>
          <router-link to="/login">
            <button class="btn btn-sm btn-primary">
              Log In
            </button>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
#header {
  position: fixed;
  top: 0%;
}
</style>
