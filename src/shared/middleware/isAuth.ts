import { CustomError } from '@shared/error/CustomError'
import { type NextFunction, type Request, type Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  id: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function isAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const tokenHeader = request.headers.authorization
  if (!tokenHeader) throw new CustomError('Token not found', 401)
  try {
    const [, token] = tokenHeader.split(' ')
    const { id } = verify(token, process.env.ENCODED_AUTH!) as IPayload

    request.user = { id }
    return next()
  } catch (error: any) {
    if (error.message === 'jwt expired') {
      throw new CustomError('token expired', 401)
    } else {
      throw new CustomError('token error', 401)
    }
  }
}
