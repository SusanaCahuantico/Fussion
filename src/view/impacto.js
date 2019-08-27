export default () => {
    const createDiv = document.createElement('div');
    const impacto =  ` 
    <div class="row">
         <div class="col-lg-4 col-md-6 col-xs-12">
         <img src="./image/consumeconsentido.jpg" class="img-impacto">
        </div> 
        <div class="col-lg-4 col-md-6 col-xs-12">
        <img src="./image/reusa.png" class="img-impacto">
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
         <img src="./image/eco1.jpg" class="img-impacto">
         </div>
         <div class="col-lg-4 col-md-6 col-xs-12">
        <img src="./image/bolsas.jpeg" class="img-impacto">
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
        <img src="./image/zero.jpeg" class="img-impacto">
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
        <img src="./image/fondo5.jpg" class="img-impacto">
        </div>
    </div>
    `;

    createDiv.innerHTML = impacto;

    return createDiv;
}