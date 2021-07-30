<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <div class="hero is-white is-gradient is-bold">
                  <div class="hero-body">

                    <h1 class="title">
                      <span class="hs text success">Personajes</span>
                    </h1>

                    <div class="column">
                      <div class="control row-5">
                        <b-form-input 
                        v-model="search" 
                        type="text" 
                        placeholder="Busca tu personaje Favorito"
                        v-on:keyup.enter="searchData">
                        </b-form-input>

                        <b-button variant="success" v-on:click="searchData">Buscar</b-button>
                        <b-button class="Rerescar" v-on:click="fetchRef">Rerescar</b-button>
                        <b-button class="Rerescar" v-on:click="Almacena">Ordenar</b-button>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div class="container">
                  
                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">species</th>
                        <th scope="col">gender</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="character in characters" :key="character.id">
                        <td>{{ character.id }}</td>
                        <td>{{ character.name }}</td>
                        <td>{{ character.species }}</td>
                        <td>{{ character.gender }}</td>
                        <td>{{ character.status }}</td>

                    </tr>
            
                </tbody>
                </table>
                  

                </div>

              
            </div>


        <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: "App2" ,
  data: function() {
    return {
      characters: [],
      search: ""
    };
  },
      components:{
        Header,
        Footer
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
    //Almacenar Busqueda en un Arreglo
    Almacena(){
            const characters = fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
            characters.then((datos) => {
            console.log(datos);
        });

        characters.sort((a, b)=>{
          if (a.name > b.name) {
            return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
             // a must be equal to b
            return 0;
        }
          );
    }
  
  }

};

</script>
