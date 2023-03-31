import { client, productsCollection } from "../mongoConnect.js";

const getOneProduct = async () => {
  try {
    await client.connect()
    const oneProduct = await productsCollection.findOne({ name: 'Single Scoop' })
    console.log(oneProduct)
  } catch (error) {
    console.log (error)
  } finally {
    await client.close()
  }
}

getOneProduct()
