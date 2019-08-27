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
      } else if(hash === '#/home' || hash === '#/categories'){
            return changeView(hash);           
            
    }else if (hash === '#/home' || hash === '#/fussion-minicartucheras'){
        return changeView(hash);   
    } 
    else if (hash === '#/home' || hash === '#/fussion-ecobolso'){
        return changeView(hash);   
    }
    else if (hash === '#/home' || hash === '#/fussion-portatablets'){
        return changeView(hash);   
    }
    else if (hash === '#/home' || hash === '#/fussion-minibolsos'){
        return changeView(hash);   
    }
    else if (hash === '#/home' || hash === '#/fussion-minimonederos'){
        return changeView(hash);   
    }
    else if (hash === '#/home' || hash === '#/fussion-billeteras'){
        return changeView(hash);   
    }
    else if (hash === '#/home' || hash === '#/fussion-llaveros'){
        return changeView(hash);   
    }
    else {
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
        case '#/categories': root.appendChild(components.categories())
        break;
        case '#/fussion-minicartucheras': root.appendChild(components.miniCartucheras())
        break;
        case '#/fussion-ecobolso': root.appendChild(components.ecoBolso())
        break;
        case '#/fussion-portatablets': root.appendChild(components.portaTablets())
        break;
        case '#/fussion-minibolsos': root.appendChild(components.miniBolsos())
        break;
        case '#/fussion-minimonederos': root.appendChild(components.miniMonederos())
        break;
        case '#/fussion-billeteras': root.appendChild(components.billeteras())
        break;
        case '#/fussion-llaveros': root.appendChild(components.llaveros())
        break;
        default:
            break;
    }       
}

export const init = () => {
    window.addEventListener('load',changetmp(window.location.hash))
    if(("onhashchange" in window)) window.onhashchange = () => changetmp(window.location.hash)
}