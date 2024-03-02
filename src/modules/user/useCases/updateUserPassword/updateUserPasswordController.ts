import { type IUserUpdatePasswordDTO } from '@modules/user/dto/IUserDTO'
import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { UpdateUserPasswordUseCase } from './updateUserPasswordUseCase'

class UpdateUserPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, newPassword } = request.body as IUserUpdatePasswordDTO
    const { id } = request.user

    const updateUserPasswordUseCase = container.resolve(
      UpdateUserPasswordUseCase
    )
    await updateUserPasswordUseCase.execute({ password, id, newPassword })
    return response.status(204).send()
  }
}

export { UpdateUserPasswordController }
