/* import {getProduct} from './firebase.js'; */
import {getProductsFilteredByCategory} from './firebase.js'
import {getCategories} from './firebase.js';
export const dataProduct = (category) => {
    return getProductsFilteredByCategory(category)
    .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach(function(doc) {
            array.push({
                id: doc.id,
                datos: doc.data()
            })
            // doc.data() is never undefined for query doc snapshots
        });
        return array;
    }); 
}

export const dataCategories = () => {
    return getCategories()
    .then((querySnapshot) => {
        const array = [];
        querySnapshot.forEach(function(doc) {
            array.push({
                id: doc.id,
                datos: doc.data()
            })
            // doc.data() is never undefined for query doc snapshots
        });
        return array;
    }); 
}