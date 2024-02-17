import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { DeleteLikeQuestionUseCase } from './DeleteLikeQuestionUseCase'

class DeleteLikeQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: idUser } = request.user
    const { id } = request.params

    const deleteLikeQuestionUseCase = container.resolve(
      DeleteLikeQuestionUseCase
    )
    await deleteLikeQuestionUseCase.execute(id, idUser)
    return response.status(204).send()
  }
}

export { DeleteLikeQuestionController }
