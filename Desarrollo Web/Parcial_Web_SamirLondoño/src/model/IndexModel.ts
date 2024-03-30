import ProductInterface from "../types/ProductInterface"

export default class IndexModel {

    constructor (){

    }

    public async getProducts (): Promise<ProductInterface[]> {
        return await new Promise((resolve, reject) => {
            const response = fetch('http://localhost:1802/eco/products ',{
            method: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
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