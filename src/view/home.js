export default () => {
    const createDiv = document.createElement('div');
    const home = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand logo" href="#"><img src="./image/fussion.jpg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#somos">Quienes somos <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#corazon">El corazon de Fussion</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#/impacto">Impacto</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Catalogo
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#/categories">Productos</a>
                <a class="dropdown-item" href="#/merch">Merch</a>            
            </div>
            </li>


            
        </ul>
        
        </div>
    </nav>
    <div class="cont-slider">

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100 img-desktop" src="./image/img-1.jpg" alt="First slide">
                <img class="d-block w-100 img-mob" src="./image/img-1-mob.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 img-desktop" src="./image/img-2.jpg" alt="Second slide">
                <img class="d-block w-100 img-mob" src="./image/img-2-mob.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 img-desktop" src="./image/img-3.jpg" alt="Third slide">
                <img class="d-block w-100 img-mob" src="./image/img-3-mob.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 img-desktop" src="./image/img-4.jpg" alt="Third slide">
                <img class="d-block w-100 img-mob" src="./image/img-4-mob.jpg" alt="First slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="fas fa-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="fas fa-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>


    <div>
        <div id="somos" class="cont-somos left">
           
            <div class="cont-informacion somos">
           <div class="cont-mitad  cont-img img-mob-cont">
              <img src="./image/fondo6.jpg" class="img-somos">
           </div>
           <div class="box-que cont-mitad">
              <p class="p-somos"> <span>FUSSION</span> es una marca de moda sostenible que trabaja a favor de la conservación de los océanos.
            Diseña productos hechos en base a la recuperación de bolsas plásticas recolectadas dentro del proceso de reciclaje diario en la comunidad.
                 
              </p>
              <p> Cada producto FUSSION significa menos bolsas plásticas en el mar, sumando con ello, al desarrollo sostenible de Perú, Latinoamérica  y el mundo.
                 
              </p>
           </div>
        </div
        </div>
        <div class="cont-mision-vision">
        <div class="cont-somos right">
           <h3> Misión </h3>
           <div class="cont-informacion">
           <div class="box-que cont-mitad">
              <p class="p-somos"> Somos una empresa de impacto y socialmente responsable que busca promover la moda
                 sostenible en el Perú, sensibilizar a la comunidad sobre el cuidado del medio ambiente
                 a través de una cultura de consumo responsable y consciente teniendo como eje 
                 principal las 3Rs del Reciclaje 
              </p>
           </div>
           <div class="cont-mitad  cont-img">
              <img src="./image/fotosface1.jpg" class="img-somos">
           </div>
        </div>
        </div>
        <div class="cont-somos right">
           <h3> Visión </h3>
           <div class="cont-informacion">
           <div class="cont-mitad cont-img">
              <img src="./image/tortuga.jpg" class="img-somos">
           </div>
           <div class="box-que cont-mitad">
              <p class="p-somos"> Buscamos ser la primera opción de productos responsables y sostenibles, ser reconocidos como
                 marca de impacto con sentido y seguir sumando esfuerzos por el desarrollo sostenible del Perú y
                 el mundo a través de nuestro trabajo. 
              </p>
           </div>
        </div>
        </div>
        <div class="cont-somos right">
           <h3> Valores </h3>
           <div class="cont-informacion">
           <div class="box-que cont-mitad">
              <p class="p-somos">  Coherencia - Creatividad – Innovación - Ética - Sostenibilidad - Responsable </p>
           </div>
           <div class="cont-mitad  cont-img">
              <img src="./image/save.jpg" class="img-somos">
           </div>
        </div>
        </div>
        </div>
     </div>



     <div id="corazon" class="cont-corazon"> 
     <div class="row flex-reves" style="background-color: rgb(230, 230, 230);">       
         <div class="col-lg-6 col-xs-12 text-center"> 
             <img src="./image/fundadora.jpeg" class="img-fundadora">
         </div>
         <div class="col-lg-6 col-xs-12  text-flex">
             <h3 class="fundadora"> Fundadora </h3>
             <p class="parrafo ">  
                     Paula Tamayo tiene 28 años, es mercadologa de profesión y diseñadora / artista autodidacta y vocacional.
                     Su experiencia en sostenibilidad lo aprendió de la web; en el 2012 y con 22 años, emprendío su primer proyecto sobre recuperación de residuos sólidos; 
                     el mismo año identificó una problemática latente, la contaminación del océanos a causa de los plásticos, que no solo comprendía a Perú, 
                     sino también a Latinoamérica y el mundo, problemática que tomó como una nueva oportunidad de emprender, transformando este nuevo residuo
                     "bolsas plásticas"en cuero plástico, es así que después de 7 años de perfeccionar la técnica, lanza en el año 2018,
                     FUSSION su primera marca de moda sostenible, donde crea cuero plástico hecho en base a 
                     bolsas plásticas recicladas y diseña accesorios de moda sostenible, de uso diario, prácticos y 100% estéticos  </p>
 
         </div>
     </div>
     <div class="row">
         <div class="col-lg-6 col-xs-12  text-flex">
                 <h3 class="fundadora"> Nuestro Equipo </h3>
             <p class="parrafo"> En FUSSION trabajamos día a día por la conservación de nuestros océanos, 
            desde hace 7 años venimos recuperando
            alrededor de 10000 bolsas plásticas evitando estas lleguen al mar. </p>
         </div>
            <div class="col-lg-6 col-xs-12  text-center">
            <img src="./image/fotogrupo.jpg" class="img-fundadora">              
            </div>    
         </div>
     </div>



     




    <footer>
    <div class="cont-footer">
        <div >
            <p> Siguenos: </p>
            <div class="cont-redes">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            </div>

        </div>
        <div>
            <div class="cont-icon">
                <i class="fas fa-envelope-square"></i><span> contacto@fussionperu.com</span>
            </div>
            <div class="cont-icon">
                <i class="fab fa-whatsapp"></i><span> +51 955 816 180</span>
            </div>
        </div>     
    </div>
    </footer>
    `;
    createDiv.innerHTML = home;

    return createDiv;
}