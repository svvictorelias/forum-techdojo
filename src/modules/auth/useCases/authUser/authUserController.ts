import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { AuthUserUseCase } from './authUserUseCase'

class AuthUserContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authUserUseCase = container.resolve(AuthUserUseCase)
    const auth = await authUserUseCase.execute(
      email as string,
      password as string
    )

    return response.send(auth)
  }
}

export { AuthUserContoller }
