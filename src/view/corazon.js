export default () => {
    const createDiv = document.createElement('div');
    const corazon = `
    <div> 
       <p> hola </p>
    </div>
    `;
    createDiv.innerHTML = corazon;

    return createDiv;
}