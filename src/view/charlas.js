export default () => {
    const createDiv = document.createElement('div');
    const charlas = `
    <div>
      <p> hola </p>
    </div>
    `;
    
    createDiv.innerHTML = charlas;

    return createDiv;
}