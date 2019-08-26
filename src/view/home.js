export default () => {
    const createDiv = document.createElement('div');
    const home = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#">Quienes somos <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">El corazon de Fussion</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Impacto</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Catalogo
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Productos</a>
                <a class="dropdown-item" href="#">Merch</a>            
            </div>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Charlas y Talleres</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Social</a>
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
                <img class="d-block w-100" src="./image/img-1.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./image/img-2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="./image/img-3.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class=" fas fa-arrow-alt-circle-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="fas fa-arrow-alt-circle-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    

    </div>


    <footer>
    <div>
        <p> Siguenos </p>
        <i class="fab fa-instagram"></i>   
        <i class="fab fa-facebook"></i>
        <i class="fas fa-envelope-square"></i>
        <i class="fab fa-whatsapp"></i>
    </div>
    </footer>
    `;
    createDiv.innerHTML = home;

    return createDiv;
}


