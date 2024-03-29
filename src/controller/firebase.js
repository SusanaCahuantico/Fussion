export const getProduct = () => {
    return firebase.firestore().collection("productos").get()
 }
 export const getCategories = () => {
    return firebase.firestore().collection("categorias").get()
 }
 export const getProductsFilteredByCategory = (category) => {
    return firebase.firestore().collection("productos").where("category", "==", category).get()
 }

 export const getPedidos = (category) => {
   return firebase.firestore().collection("productos").where("category", "==", category).get()
}

 export const getProductsInRealTime = (callback) => {
   firebase.firestore().collection('products')
.onSnapshot((querySnapshot) => {
     const data = [];
     querySnapshot.forEach((doc) => {
    
      data.push({id:doc.id,...doc.data()}
       );
     });
   callback(data);
   })
 }
