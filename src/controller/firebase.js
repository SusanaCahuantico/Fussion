export const getProduct = () => {
    return firebase.firestore().collection("productos").get()
 }
 export const getCategories = () => {
    return firebase.firestore().collection("categorias").get()
 }
 export const getProductsFilteredByCategory = (category) => {
    return firebase.firestore().collection("productos").where("category", "==", category).get()
 }