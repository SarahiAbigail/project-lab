<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="fetch()" >Mostrar Datos</button>
                <br><br>


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
      episodes: []
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
    fetch() {
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
    }
  }

};

</script>