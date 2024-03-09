import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express'
import cors from 'cors'
import 'reflect-metadata'
import 'express-async-errors'
import '@shared/container'
import { router } from './routes'
import { CustomError } from '@shared/error/CustomError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
      return response.status(error.statusCode).json({
        message: error.message,
      })
    }
    return response.status(500).json({
      message: error.message,
    })
  }
)

export { app }
