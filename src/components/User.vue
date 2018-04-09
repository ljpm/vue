<template lang="html">
  <div>
  <div v-if="cargando">
    <p>Cargando...</p>
  </div>
  <div class="users col-md-8 offset-4">
    <h1>User component</h1>
      <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
            <th>Username</th>
            <th>email</th>
            <th>&nbsp;</th>
             </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>
                <router-link :to="'/' + user.id">Ver</router-link>
              </td>
            </tr>
          </tbody>
        </tr>
      </table>
  <input type="text" v-model="firstName">
  <input type="text" v-model="lastName">
  <input type="button" value="guardar">  
  </div>
</div>
</template>

<script>
var url = 'https://jsonplaceholder.typicode.com/users/';
import axios from 'axios'
export default {
  data(){
    return {
      firstName: '',
      lastName: '',
      users: [],
      cargando: true,
    }
  },
  methods: {
    getUsers(){
      axios.get(url).then(response => {
        this.cargando = false;
        this.users = response.data;
        });
    },

  },
  created: function(){
    this.getUsers();
  }
}
</script>

<style>
.users{
  background-color: #dedede;
}
</style>
