<template>
    <div>
        <Header/>

            <div class="container izquierda">

              <div class="hero is-white is-gradient is-bold">
                  <div class="hero-body">

                    <h1 class="title">
                      <span class="hs text success">Episodios</span>
                    </h1>

                    <div class="column">
                      <div class="control row-5">
                        <b-form-input 
                        v-model="search" 
                        type="text" 
                        placeholder="Busca tu Episodio Favorito"
                        v-on:keyup.enter="searchData" id="input">
                        </b-form-input>

                        <b-button variant="success" v-on:click="searchData">Buscar</b-button>
                        <b-button class="Rerescar" v-on:click="fetchRef">Rerescar</b-button>
                        <b-button class="Rerescar" v-on:click="MayorMenor">Ordenar Mayor a Menor</b-button>
                        <b-button class="Rerescar" v-on:click="MenorMayor">Ordenar Menor a Mayor</b-button>                     
                      </div>
                    </div>
                    
                  </div>
                </div>

                <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">air_date</th>
                        <th scope="col">url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="episode in episodes" :key="episode.id">
                        <td>{{ episode.name }}</td>
                        <td>{{ episode.air_date }}</td>
                        <td>{{ episode.url }}</td>
                    </tr>

                </tbody>
                </table>

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
      episodes: [],
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
      
      let result = axios.get("https://rickandmortyapi.com/api/episode", { params }).then(res => {

        //resivimos los personajes
        this.episodes = res.data.results;
        console.log(res.data);
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    },
    //metodo normal
    fetchRef() {
      let result = axios.get("https://rickandmortyapi.com/api/episode").then(res => {

        //resivimos los personajes
        this.episodes = res.data.results;
        //setemos las paginas
        this.page = res.data.info.pages;
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
            const episodes = fetch("https://rickandmortyapi.com/api/episode").then(res => res.json());
            episodes.then((datos) => {
            console.log(datos);
            })

        //metodo para ordenar
        this.episodes.sort((a, b)=>{
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
            const episodes = fetch("https://rickandmortyapi.com/api/episode").then(res => res.json());
            episodes.then((datos) => {
            console.log(datos);
            })

        //metodo para ordenar
        this.episodes.sort((a, b)=>{
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

<style scoped>

h1{
  text-align: center;
  margin: 10px;
  padding: 10px;
}


#input {

  padding: 20px;
  margin:20px;

}

</style>