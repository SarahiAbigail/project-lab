<template>
  <div class="Episodios" id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="hs text success">Personajes</span>
        </h1>
            <button class="button" v-on:click="fetch">Consultar</button>
            <b-button class="Rerescar" v-on:click="fetchRef">Rerescar</b-button>
            <b-button class="Rerescar" v-on:click="MayorMenor">Ordenar Mayor a Menor</b-button>
            <b-button class="Rerescar" v-on:click="MenorMayor">Ordenar Menor a Mayor</b-button>
      </div>
      <div>
        <div class="row-5">
          <b-form-input 
           v-model="search"
           type="text"
           placeholder="Busca tu personaje Favorito"
           v-on:keyup.enter="searchData">
        </b-form-input>
        </div>
        <b-button variant="success" v-on:click="searchData">Buscar</b-button>
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
  </div>

</template>


<script>
import axios from 'axios';

export default {
  name: "App2" ,
  data: function() {
    return {
      characters: [],
      search: ""
    };
  },

    created() {
        this.fetch()
    },
  methods:{
    
    //metodo con parametro para busqueda
    fetch() {
      const params ={
        name:this.search
      }
      
      let result = axios.get("https://rickandmortyapi.com/api/character", { params }).then(res => {

        //resivimos los personajes
        this.characters = res.data.results;
        console.log(res.data);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    },

    //metodo normal
    fetchRef() {
      
      let result = axios.get("https://rickandmortyapi.com/api/character").then(res => {

        //resivimos los personajes
        this.characters = res.data.results;
        
        console.log(res.data);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    },

    //Busqueda
    searchData(){
      this.fetch()
    },

    //Ordena de Mayor a menor
    MayorMenor(){
      //metodo para pasar la consulta a un array
            const characters = fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
            characters.then((datos) => {
            console.log(datos);
            })

        //metodo para ordenar
        this.characters.sort((a, b)=>{
          if (a.name < b.name) {
            return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
        }
          );
    },

    //Ordena de Mayor a menor
    MenorMayor(){
      //metodo para pasar la consulta a un array
            const characters = fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
            characters.then((datos) => {
            console.log(datos);
            })

        //metodo para ordenar
        this.characters.sort((a, b)=>{
          if (a.name > b.name) {
            return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
        }
          );
    }
  
  }

};

</script>