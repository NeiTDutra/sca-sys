<template>
  <div class="page">
    <h3>Home</h3>
    <hr>
    <HomeComponent/>
  </div>
</template>

<script>
import HomeComponent from '../components/home/Home.vue'

export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}
</script>

<style scoped>

</style>
