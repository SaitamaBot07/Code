import { Request, Response } from 'express'

export default class ErrorController {

    notFound = (_req: Request, res: Response):void => {
            res.status(400).json({message: 'Not Found, escriba de nuevo manito '})

    }
}

//la ratiya _req es para especficiar que dicho objeto se puede usar o no 