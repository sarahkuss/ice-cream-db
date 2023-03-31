import { client, productsCollection } from "../mongoConnect.js";

const editProduct = async () => {
  try {
    await client.connect()
    const updatedProduct = await productsCollection.findOneAndUpdate(
      { name: 'Sundae'},
      { $set: {name: 'Milkshake'}}
    )
    console.log(updatedProduct)
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
}

editProduct()