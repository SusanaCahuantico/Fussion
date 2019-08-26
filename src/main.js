// configuracion de firebase
import {init} from './route.js'

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCBHmvIWBvszHV2NJerZaCH6FZ_ZppXYcA",
        authDomain: "fussion-1011e.firebaseapp.com",
        databaseURL: "https://fussion-1011e.firebaseio.com",
        projectId: "fussion-1011e",
        storageBucket: "fussion-1011e.appspot.com",
        messagingSenderId: "181776851381",
        appId: "1:181776851381:web:4a408151ceca24e2"
    };
      firebase.initializeApp(firebaseConfig);
    }
    
    window.addEventListener('load', () =>  {
        initFirebase()
        init()
    });
    
    $('#slider1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: true
      });