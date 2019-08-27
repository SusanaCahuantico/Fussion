export default () => {
    const createDiv = document.createElement('div');
    const merch = `
    <div class="fondo-merch">
       <form action="">
         <h2> CONTACTO </h2>
         <input type="text" name="nombre" placeholder="Nombre">
         <input type="text" name="correo" placeholder="Correo">
         <input type="text" name="telefono" placeholder="Teléfono">
         <textarea name="mensaje" placeholder="Escriba aquí su mensaje"></textarea>
         <input type="button" value="ENVIAR" id="boton">
       </form>
    <div>
    `;

    createDiv.innerHTML = merch;

    return createDiv;
}