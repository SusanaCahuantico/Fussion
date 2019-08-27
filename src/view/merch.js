export default () => {
    const createDiv = document.createElement('div');
    const merch = `
    <div class="fondo-merch">
       <form action="">
         <h2> CONTACTO </h2>
         <input type="text" name="nombre" id="nombre" placeholder="Nombre">
         <input type="text" name="correo" id="correo" placeholder="Correo">
         <input type="number" name="telefono" id="telefono" placeholder="Teléfono">
         <textarea name="mensaje" placeholder="Escriba aquí su mensaje"></textarea>
         <input type="button" value="ENVIAR" id="boton">
       </form>
       <div id="pintar-input">
       </div>
    <div>
    `;

    createDiv.innerHTML = merch;
 
    const nombre = createDiv.querySelector('#nombre').value;
    const correo = createDiv.querySelector('#correo').value;
    const telefono = createDiv.querySelector('#telefono').value;
    const boton = createDiv.querySelector('#boton');
    const pintarInput = createDiv.querySelector('#pintar-input');

    boton.addEventListener('click', () => {
        pintarInput.innerHTML = nombre + correo + telefono;
    })

    return createDiv;
}