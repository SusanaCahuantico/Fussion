export default () => {
    const createDiv = document.createElement('div');
    const corazon = `
    <div class="container"> 
       <div class="row">
         <div class="col text-center"> 
         <h3 class="fundadora"> Fundadora </h3>
          <div class="col-sm">
             <img src="./image/fundadora.jpeg" class="img-fundadora col-5">
             <p class="parrafo col-5"> Directora General 
             Paula Tamayo tiene 28 años, es mercadologa de profesión y diseñadora / artista autodidacta vocacional, 
            su experiencia en sostenibilidad lo aprendió de la web, lleva 7 años emprendiendo un proyecto de manejo
            y transformación de residuos sólidos, Paula identificó una problemática latente que no solo comprendía a Perú, 
            si no también a toda Latinoamérica y el mundo, es así que empezó a estudiar el proceso de transformación 
            de bolsas plásticas, una vez con la fórmula perfeccionada y conociendo a detalle dicho residuo, 
            lanzó su primera marca de moda sostenible FUSSION, donde crea cuero plástico hecho en base a 
           bolsas plásticas recicladas y diseña accesorios de moda, ideales para el uso diario y 100% estéticos. </p>
          </div>
        </div>
       </div>
       <div class="row">
       <div class="text-center">
           <h3 class="fundadora"> Nuestro Equipo </h3>
           <div class="col-sm">
               <p class="parrafo col-5"> En FUSSION trabajamos día a día por la conservación de nuestros océanos, 
              desde hace 7 años venimos recuperando
              alrededor de 10000 bolsas plásticas evitando estas lleguen al mar. </p>
             <img src="./image/fotogrupo.jpg" class="img-fundadora col-5">
           </div>
        </div>
      </div>
       </div>
    `;
    createDiv.innerHTML = corazon;

    return createDiv;
}