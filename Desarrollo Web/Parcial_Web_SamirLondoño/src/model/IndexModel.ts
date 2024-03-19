import ProductInterface from "../types/ProductInterface"

export default class IndexModel {

    constructor (){

    }

    public async getProducts (): Promise<ProductInterface[]> {
        return await new Promise((resolve, reject) => {
            const response = fetch('../productos.json',{
            method: 'GET',
            })
            response.then((products) => {
                console.log(response)
                resolve(products.json())
            }).catch((err) => {
                reject(err)
            })
        })
    }
}