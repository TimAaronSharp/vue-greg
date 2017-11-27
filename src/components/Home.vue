<template>
  <div class="home container text-center">
    <h1>WELCOME TO GREGS' LIST!</h1>
    <div class="row">
      <div class="col-sm-6">
        <router-link :to="{name: 'automotive'}">Automotive</router-link>  
      </div>
      <div class="col-sm-6">
        <router-link :to="{name: 'properties'}">Properties</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
