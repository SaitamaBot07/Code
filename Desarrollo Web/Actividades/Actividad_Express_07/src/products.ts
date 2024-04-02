import ErrorController from './controller/ErrorController'
import ProductController from './controller/ProductController'
import ExpressServer from './express/ExpressServer'
import ProductModel from './model/ProductModel'
import ProductView from './view/ProductView'
import ErrorView from './view/ErrorView'

const server = new ExpressServer(
    new ProductView(
        new ProductController(
            new ProductModel()
        )
    ),
    new ErrorView(
        new ErrorController()
    )
)
server.start()