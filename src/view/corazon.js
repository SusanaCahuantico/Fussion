export default () => {
    const createDiv = document.createElement('div');
    const corazon = `
    <div class="container"> 
       <div class="row center-block">
        <h3> Fundadora </h3>
        <img src="./image/fundadora.jpeg" class="img-fundadora">
        <p> Directora General </p>
       </div>
       <div class="row center-block">
       <h3> Nuestro Equipo </h3>
       <p> En FUSSION trabajamos día a día por la conservación de nuestros océanos, desde hace 7 años venimos recuperando
       alrededor de 10000 bolsas plásticas evitando estas lleguen al mar. </p>
       <img src="./image/fotogrupo.jpg" class="img-equipo">
       </div>
    </div>
    `;
    createDiv.innerHTML = corazon;

    return createDiv;
}