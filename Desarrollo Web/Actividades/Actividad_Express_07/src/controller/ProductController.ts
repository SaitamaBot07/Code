import { Request, Response } from 'express'
import ProductModel from '../model/ProductModel'
import path from 'path'

export default class ProductController {

    constructor(private readonly productModel: ProductModel){

    }

    getProducts = (_req: Request, res: Response):void => {
        const products = this.productModel.getProducts()
        products.then((products) => {

            res.status(200).json({products: products})
        }).catch((error) => {
            res.status(500).json({error: error})
        })

    }

    getProductImage = (req: Request, res: Response):void => {
        const { id } = req.params
        // TODO: validar id se deberia
        if (id !== undefined) {
            const isProduct = this.productModel.findId(id)
            isProduct.then((isProduct) => {
                if(isProduct) {
                    res.status(200).sendFile(path.resolve(`${__dirname}/../assets/${id}.jpg`))
                } else {
                    res.status(404).json({error: 'Product image not found'})
                }
            })
        }
    }
}

//la ratiya _req es para especficiar que dicho objeto se puede usar o no 