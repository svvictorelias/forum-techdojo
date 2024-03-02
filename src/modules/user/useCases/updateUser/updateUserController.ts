import { type IUserUpdateDTO } from '@modules/user/dto/IUserDTO'
import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserUseCase } from './updateUserUseCase'

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body as IUserUpdateDTO
    const { id } = request.user

    const updateUserUseCase = container.resolve(UpdateUserUseCase)
    await updateUserUseCase.execute({ email, id, name })
    return response.status(204).send()
  }
}

export { UpdateUserController }
