export default () => {
    const createDiv = document.createElement('div');
    const merch = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand logo" href="#"><img src="./image/fussion.jpg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#somos">Quienes somos <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#/corazon">El corazon de Fussion</a>
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
                <a class="dropdown-item" href="#/merch">Merch</a>            
            </div>
            </li>
                       
        </ul>  
        </div>
    </nav>
 
    <div class="fondo-merch">
       <form action="https://formspree.io/iloverecycling.peru@gmail.com" method="POST" />
         <h2> CONTACTO </h2>
         <input type="text" name="name" id="nombre" placeholder="Nombre">
         <input type="text" name="name" id="correo" placeholder="Correo">
         <input type="number" name="name" id="telefono" placeholder="Teléfono">
         <textarea name="name" placeholder="Escriba aquí su mensaje"></textarea>
         <input type="submit" name="name" value="ENVIAR" id="boton">
       </form>
       <div id="pintar-input">
       </div>
    </div>
    <footer>
    <div class="cont-footer">
        <div >
            <p> Siguenos: </p>
            <div class="cont-redes">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            </div>

        </div>
        <div>
            <div class="cont-icon">
                <i class="fas fa-envelope-square"></i><span> contacto@fussionperu.com</span>
            </div>
            <div class="cont-icon">
                <i class="fab fa-whatsapp"></i><span> +51 955 816 180</span>
            </div>
        </div>     
    </div>
    </footer>
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