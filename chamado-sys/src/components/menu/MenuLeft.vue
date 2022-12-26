<template>
  <div class="menu m-3 p-2">
    <h4 class="text-center">Navegação</h4>
    <hr>
    <div class="list-group">
      <router-link to="/home" class="list-group-item list-group-item-action list-group-item-dark">Home</router-link>
      <router-link to="/customer" class="list-group-item list-group-item-action list-group-item-dark">Customer</router-link>
      <router-link to="/tecnical" class="list-group-item list-group-item-action list-group-item-dark">Tecnical</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style scoped>
.menu {
  border-right: 2px solid gray;
}
li a {
  text-decoration: none;
}
li {
  padding-left: 20px;
  list-style-type: none;
}
</style>
