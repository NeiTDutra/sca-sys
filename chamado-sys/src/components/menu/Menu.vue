<template>
  <div class="menu m-1 p-2">
    <h3 class="text-center">Menu</h3>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/customer">Customer</router-link>
      </li>
      <li>
        <router-link to="/tecnical">Tecnical</router-link>
      </li>
    </ul>
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
