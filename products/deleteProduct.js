import { client, productsCollection } from "../mongoConnect.js";

const deleteProduct = async () => {
  try {
    await client.connect()
    const productDeleted = await productsCollection.deleteOne({name: 'Banana Split'})
    console.log(productDeleted)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

deleteProduct()