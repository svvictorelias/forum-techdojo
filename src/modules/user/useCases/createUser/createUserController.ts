import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase'
import { type IUserDTO } from '@modules/user/dto/IUserDTO'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IUserDTO = request.body
    const createUserUseCase = container.resolve(CreateUserUseCase)
    await createUserUseCase.execute(data)
    return response.status(201).send()
  }
}

export { CreateUserController }
