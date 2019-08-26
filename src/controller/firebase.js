export const getProduct = () => {
    return firebase.firestore().collection("productos").get()
 }