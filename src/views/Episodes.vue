<template>
  <div class="Episodios">
    <h1>Aquí irán todas las Peliculas</h1>
  </div>

</template>

<script>

import { request as fetchGQL } from "graphql-request";//import statement


export default {

    //Función donde trabajamos las parte funcional de vue
    setup(){

        fetchGQL('https://rickandmortyapi.com/graphql', 
        / * GraphQL * / `
         query{
            episodes {
               info {
                   count
                   pages
                   next
                   prev
               }
               results {
                    id
                    name
                    air_date
                    episode
                    created
                    }
                }
                }
             ` ).then((data)  => 
                    {
                    console.log(data);
                    });
                },
    };




</script>