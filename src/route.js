import { components } from './view/index.js'

const changetmp = (hash) => {
    if(hash === "" || hash ==='#' || hash === '#/'){
        return changeView('#/home')
    }else if (hash === '#/home' || hash === '#/somos') {
        return changeView(hash);
    } else if (hash === '#home' || hash === '#/catalogo'){
        return changeView(hash);
    } else if(hash === '#/home' || hash === '#/merch'){
        return changeView(hash);
    } else if(hash === '#/home' || hash === '#/corazon'){
        return changeView(hash);
    } else {
        return changeView('#/home');
    }
}

const changeView = (route) => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    switch (route) {
        case '#/home':  root.appendChild(components.home())
        break;
     case '#/somos': root.appendChild(components.somos())
        break;
        case '#/catalogo': root.appendChild(components.catalogo())
        break;
        case '#/merch': root.appendChild(components.merch())
        break;
        case '#/corazon': root.appendChild(components.corazon())
        break;
        default:
            break;
    }       
}

export const init = () => {
    window.addEventListener('load',changetmp(window.location.hash))
    if(("onhashchange" in window)) window.onhashchange = () => changetmp(window.location.hash)
}