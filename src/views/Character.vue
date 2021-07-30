<template>
    <div>
        <Header/>

            <div class="container izquierda">

                <button class="btn btn-primary" v-on:click="fetch()" >Mostrar Datos</button>
                <br><br>


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
      characters: []
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
      let result = axios.get("https://rickandmortyapi.com/api/character").then(res => {

        //resivimos los personajes
        this.characters = res.data.results;
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
