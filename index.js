// import { client, productsCollection } from "./mongoConnect.js";

// const addProduct = async () => {
//   const myProduct = {
//     name: 'Banana Split',
//     isDelicious: true,
//     price: 10
//   }
//   try {
//     await client.connect()
//     const addedProduct = await productsCollection.insertOne(myProduct)
//     console.log(addedProduct)
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await client.close()
//   }
// }
// addProduct()

