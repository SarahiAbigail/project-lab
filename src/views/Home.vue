<template>
  <div class="home">

    <main class="container">

        <div class="row" id="entertainment">
            <div class="col-md-6 text-center">
                <img src="../assets/img1.jpg" alt="" id="img-uno">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">El mejor sitio para ver Rick and Morty</h1>
                <p>Te damos acceso a los episodios de la serie y también te contamos sobre sus personajes</p>
                <button class="btn btn-dark" id="btn">Comenzar Serie</button>
            </div>
        </div>

        <div class="row flex-row-reverse" id="peliculas">
            <div class="col-md-6 text-center">
                <img src="../assets/img2.jpg" alt="" id="img-dos">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">Vistazo a la serie</h1>
                <p>Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal.</p>
                
            </div>
        </div>

        <div class="row" id="series">
            <div class="col-md-6 text-center">
                <img src="../assets/img3.jpg" alt="" id="img-tres">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">Conoce los personajes</h1>
                <p>Descubre y conoce cada personaje de la serie. ¿Que personaje prefieres?</p>
                
            </div>
        </div>
    </main>

    <footer class="bg-dark">

        <div class="container">

            <div class="row text-center py-3">
                <div class="col-md-6 fw-light" id="footer">
                    <div>Rick and Morty Home®</div>
                    <div>El mejor sitio para fans de la serie</div>
                </div>

                <div class="col-md-6 fw-light" id="footer">
                    <div>Políticas de privacidad</div>
                    <div>Contacto</div>
                </div>
            </div>
        </div>
    </footer>


  </div>

  
</template>

<script>

</script>


<style scoped>
body{

    background-color: #eee;
   
}

/***Imágenes del main***/
#img-uno, #img-dos, #img-tres{
    height: 360px;
    width: 360px;
    margin: 50px;
    padding: 10px;
    cursor: pointer;




}

.container{
    max-width: 1100px;
}


/****footer***/

#footer{

    color:#fff;
    margin-top: 4px;
}
</style>