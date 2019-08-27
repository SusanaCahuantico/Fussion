import {dataProduct} from '../controller/funciones.js';

export default () => {  
    const createDiv = document.createElement('div');
    const miniCartucheras = `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand logo" href="#"><img src="./image/fussion.jpg"></a>
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
            <a class="dropdown-item" href="#/categories">Productos</a>
            <a class="dropdown-item" href="#">Merch</a>            
        </div>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Charlas y Talleres</a>
        </li>            
    </ul>
    
    </div>
</nav>
</header>
<main id="products" class='products ecobolso'>
 </main>
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
    createDiv.innerHTML = miniCartucheras;
    dataProduct('Eco Bolso').then((response)=>{
response.forEach((obj)=>{
/* console.log(obj); */
const appendMain=createDiv.querySelector('#products');

const div=document.createElement('div');
div.setAttribute('class','content-card');
const main=  `<div class="card-deck" >
<div class="card" >
<div class="product-img-div" >
  <img src="${obj.datos.img}" class="card-img-top" alt="..." width ={style: 50%}>
 </div>
  <div class="card-body">
  ${obj.datos.name !== undefined ? `
  <h5 class="card-title">${obj.datos.name} </h5>` : ''}  
    <p class="card-text">Info:${obj.datos.info}</p>
    <p class="card-text">Impacto:${obj.datos.impacto}</p>
    <p class="card-text"><small class="text-muted"> Precio: S/.${obj.datos.price}</small></p>
  </div>
</div>
</div> `;
div.innerHTML=main;
appendMain.appendChild(div);
});
    })

    return createDiv;
}