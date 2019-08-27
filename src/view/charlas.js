export default () => {
    const createDiv = document.createElement('div');
    const charlas = `
    <div>
      <div> 
        <h3> CHARLAS </h3>
        <p> lorem ipsum </p>
        <img src="./image/taller.jpg" class="img-fundadora"> 
      </div>

      <div> 
        <h3> TALLERES </h3>
        <p> Lorem ipsum </p>
        <img src="./image/charla.jpg" class="img-fundadora">
      </div>
    </div>
    `;

    createDiv.innerHTML = charlas;

    return createDiv;
}