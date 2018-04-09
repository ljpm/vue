<template lang="html">
  <div class="animated fadeInDown">
  <div v-if="cargando">
    <p>Cargando...</p>
  </div>
  <div class="users col-md-8 offset-4">
    <h1>User component</h1>
    <h3 v-if="Object.entries(user).length === 0">No existe ese usuario</h3>
     <p v-else>{{ user }}</p>

  </div>
</div>
</template>

<script>
var url = 'https://jsonplaceholder.typicode.com/users/';
import axios from 'axios'
export default {
  data(){
    return {
      cargando: true,
      user: {}
    }
  },
  methods: {
    getUser(){
      var id = this.$route.params.id;
      axios.get(url + id).then(response => {
        this.cargando = false;
        this.user = response.data;
        }).catch(error => {
          this.cargando = false;
        });
    },

  },
  created: function(){
    this.getUser();
  }
}
</script>

<style>
.users{
  background-color: #dedede;
}
</style>
