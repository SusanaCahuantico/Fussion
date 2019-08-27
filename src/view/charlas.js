export default () => {
    const createDiv = document.createElement('div');
    const charlas = `
    <div class="container">
      <div class="row"> 
        <h3 class="title-charla col-12"> CHARLAS </h3>
        <p>  </p>
        <img src="./image/taller4.jpg" class="img-charla col-4"> 
        <img src="./image/taller2.jpg" class="img-charla col-4"> 
        <img src="./image/taller3.jpg" class="img-charla col-4"> 
      </div>

      <div class="row"> 
        <h3 class="title-charla col-12"> TALLERES </h3>
        <p> </p>
        <img src="./image/charla.jpg" class="img-charla col-4">
        <img src="./image/taller4.jpg" class="img-charla col-4"> 
        <img src="./image/taller2.jpg" class="img-charla col-4"> 
      </div>
    </div>
    `;

    createDiv.innerHTML = charlas;

    return createDiv;
}