<template>
  <div class="Episodios" id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="hs text success">Serie que vamosa mostrar</span>
        </h1>
            <button class="button" v-on:click="fetch">Consultar</button>
      </div>

    </div>
    hero.is-white.is-gradient.is-bold
    <h1>Aquí irán todas las Peliculas</h1>
    <div v-for="character of characters" v-bind:key="character.id">
    {{ character }}
  </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "App" ,
  data: function() {
    return {
      characters: []
    };
  },
  methods:{
    fetch() {
      let result = axios.get("https://rickandmortyapi.com/api/character").then(res => {
        this.characters = res.data.results;
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