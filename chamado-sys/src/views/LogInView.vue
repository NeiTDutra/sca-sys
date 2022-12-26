<template>
  <div class="page">
    <h3>Log In</h3>
    <hr>
    <LoginComponent/>
  </div>
</template>

<script>
import LoginComponent from '../components/login/Login.vue'

export default {
  name: 'LogInView',
  components: {
    LoginComponent
  }
}
</script>

<style scoped>

</style>
