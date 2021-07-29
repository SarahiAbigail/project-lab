<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Episodes">Episodios</router-link> |
      <router-link to="/Series">Series</router-link> |
    </div>
    <router-view/>

    <div>
        <div  id="app1">
    <h1>Personajes</h1>
    <button v-on:click="fetch">Consultar</button>
    <div v-for="location of locations" v-bind:key="location.id">
    {{ location }}
  </div>
  </div>
    </div>
    
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "App1" ,
  data: function() {
    return {
      locations: []
    };
  },
  methods:{
    fetch() {
      let result = axios.get("https://rickandmortyapi.com/api/location").then(res => {
        this.locations = res.data.results;
        console.log(res.data);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

    };




</script>






<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
