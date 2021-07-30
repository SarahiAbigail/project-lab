<template>
  <div class="home">

    <main class="container">

        <div class="row" id="entertainment">
            <div class="col-md-6 text-center">
                <img src="../assets/logo.png" alt="" id="img-uno">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">La más completa plataforma de streaming</h1>
                <h1> Hola</h1>

                <p>Te damos acceso a las mejores series, películas   documentales desde la comodidad de tu hogar.</p>
                <button class="btn btn-dark" id="btn">Suscríbete ahora</button>
            </div>
        </div>

        <div class="row flex-row-reverse" id="peliculas">
            <div class="col-md-6 text-center">
                <img src="../assets/logo.png" alt="" id="img-dos">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">Películas de todo género para toda la familia</h1>
                <p>Comedia, Acción, Romance, Ciencia ficción, Animadas, Terror... El género que prefieras.</p>
                
            </div>
        </div>

        <div class="row" id="series">
            <div class="col-md-6 text-center">
                <img src="../assets/logo.png" alt="" id="img-tres">
            </div>
    
            <div class="col-md-6 text-left my-auto">
                <h1 class="fw-bold">Las mejores y entretenidas series en un solo lugar</h1>
                <p>Series largas, mini-series, k-dramas, sit-com y más, la que desees ver están acá.</p>
                
            </div>
        </div>
    </main>

    <footer class="bg-dark">

        <div class="container">

            <div class="row text-center py-3">
                <div class="col-md-6 fw-light" id="footer">
                    <div>Entertainment®</div>
                    <div>Entretenimiento en casa</div>
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
    height: 400px;
    width: 450px;
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