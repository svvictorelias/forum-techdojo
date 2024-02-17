import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { UpdateQuestionUseCase } from './UpdateQuestionUseCase'

class UpdateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: idUser } = request.user
    const { id } = request.params
    const data: IQuestionDTO = request.body
    data.user_id = idUser
    const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase)
    await updateQuestionUseCase.execute({ idQuestion: id, idUser, data })
    return response.status(204).send()
  }
}

export { UpdateQuestionController }
