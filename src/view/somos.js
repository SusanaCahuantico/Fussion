export default () => {
    const createDiv = document.createElement('div');
    const somos = `
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
    `;
    createDiv.innerHTML = somos;

    return createDiv;
}