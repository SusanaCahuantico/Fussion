import { components } from './view/index.js'

const changetmp = (hash) => {
    if(hash === "" || hash ==='#' || hash === '#/'){
        return changeView('#/home')
    }else if (hash === '#/home' || hash === '#/somos') {
        return changeView(hash);
    } else if (hash === '#home' || hash === '#/productos'){
        return changeView(hash);
    } else if(hash === '#/home' || hash === '#/preparado'){
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
        case '#/productos': root.appendChild(components.catalogo())
        break;
        case '#/preparado': root.appendChild(components.preparado())
        break;
        default:
            break;
    }       
}

export const init = () => {
    window.addEventListener('load',changetmp(window.location.hash))
    if(("onhashchange" in window)) window.onhashchange = () => changetmp(window.location.hash)
}