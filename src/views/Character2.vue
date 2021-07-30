<template>
  <div class="Episodios" id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="hs text success">Personajes</span>
        </h1>
            <button class="button" v-on:click="fetch">Consultar</button>
      </div>

    </div>

      <div class="container">

        <div class="column is-12-mobile is-4-desktop" v-for="character of characters" v-bind:key="character.id">
          
          <div class="card">
            <div class="card-header"><img v-bind:src="character.image" v-bind:alt="character.name">
            </div>

          <div class="card-content">
            
            <h3 class="title">{{ character.name }}</h3>
            <button class="button is-succes is-small">ver mas</button>

          </div>

        </div>

      </div>

  </div>

    

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