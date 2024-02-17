import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { CreateLikeQuestionUseCase } from './CreateLikeQuestionUseCase'

class CreateLikeQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: idUser } = request.user
    const { id } = request.params
    const createLikeQuestionUseCase = container.resolve(
      CreateLikeQuestionUseCase
    )
    await createLikeQuestionUseCase.execute(id, idUser)
    return response.send()
  }
}

export { CreateLikeQuestionController }
