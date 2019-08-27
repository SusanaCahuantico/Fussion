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
            <a class="nav-link" href="#/somos">Quienes somos <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#/corazon">El corazon de Fussion</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Impacto</a>
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
            <li class="nav-item">
            <a class="nav-link" href="#">Charlas y Talleres</a>
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
// Quienes somos

    <div> 
        <div>
            <div class="box-que col-5">
            <h3> ¿Que es Fussion? </h3>
            <p class="p-somos"> FUSSION es una marca de productos de diseño con valor sostenible hechos
            en base a la recuperación y transformación de bolsas plásticas recolectadas
            dentro del proceso de reciclaje diario </p>
            <p> Recuperamos bolsas plásticas como materia primaa para nuestros productos,
            tenemos claro que cada diseño es más que solo una cartera, monedero o cartuchera hecho de reciclaje, 
            pues detrás de cada uno hay un motivo, un concepto, hay menos bolsas en el mar </p>
            </div>
            <div class="col-5">
                <img src="./image/tortuga.jpg" class="img-somos">
                </div>
            </div>
            <div>
            <div class="box-que col-5">
            <h3> Misión </h3>
            <p class="p-somos"> Somos una empresa de impacto y socialmente responsable que busca promover la moda
            sostenible en el Perú, sensibilizar a la comunidad sobre el cuidado del medio ambiente
            a través de una cultura de consumo responsable y consciente teniendo como eje 
            principal las 3Rs del Reciclaje </p>
            </div>
            <div class="col-5">
            <img src="./image/fotosface1.jpg" class="img-somos">
            </div>
            </div>
            <div>
            <div class="box-que col-5"> 
            <h3> Visión </h3>
            <p class="p-somos"> Buscamos ser la primera opción de productos responsables y sostenibles, ser reconocidos como
            marca de impacto con sentido y seguir sumando esfuerzos por el desarrollo sostenible del Perú y
            el mundo a través de nuestro trabajo. </p>
            </div>
            <div class="col-5">
            <img src="./image/tortuga.jpg" class="img-somos">
            </div>
            </div>
            <div>
            <div class="box-que col-5">
            <h3> Valores </h3>
            <p class="p-somos">  Coherencia - Creatividad – Innovación - Ética - Sostenibilidad - Responsable </p>
            </div>
            <div class="col-5">
                <img src="./image/save.jpg" class="img-somos">
            </div>
        </div>
    </div>





// El corazon de fussion
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