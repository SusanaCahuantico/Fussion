import {dataProduct} from '../controller/funciones.js';
export default () => {  
    const createDiv = document.createElement('div');
    const catalogo = `
    <header>
    <nav> 
    <ul> 
       <li> <a href="#/somos"> Quienes Somos </a> </li>
       <li> <a href="#/corazon"> El corazón de Fussion </a> </li>
       <li> <a href="#/impacto"> Impacto </a> </li>
       <li> 
         <a href="#/catalogo"> Catalogo </a>
          <ul> 
            <li> <a href="#/productos"> Productos </a> </li>
            <li> <a href="#/merch"> Merch </a> </li>
          </ul> 
       </li>
       <li> <a href="#/talleres"> Charlas y Talleres </a> </li>
       <li> <a href="#/social"> Social </a> </li>
    </ul>
    </nav>
     <img scr="./image/fussion.jpg">
</header>

  <div>
   <div id="slider1">
       <div> <img src="./image/bolso.jpg" alt=""></div>
       <div> <img src="./image/logo.jpg" alt=""></div>
       <div> <img src="./image/mediobolso.jpg" alt=""></div>
       <div> <img src="./image/modelo.jpg" alt=""></div>
   </div>
  </div>
  <main id="products">
  aqui vaaaaa un funcion 
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
    createDiv.innerHTML = catalogo;
    dataProduct().then((response)=>{
response.forEach((obj)=>{
console.log(obj);
const appendMain=createDiv.querySelector('#products');

const div=document.createElement('div');
const main=  `<div class="card-deck">
<div class="card">
  <img src="${obj.datos.img}" class="card-img-top" alt="..." width ={style: 50%}>
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