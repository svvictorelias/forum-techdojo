import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { DeleteQuestionUseCase } from './DeleteQuestionUseCase'

class DeleteQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: idUser } = request.user
    const { id } = request.params
    const data: IQuestionDTO = request.body
    data.user_id = idUser
    const deleteQuestionUseCase = container.resolve(DeleteQuestionUseCase)
    await deleteQuestionUseCase.execute(id, idUser)
    return response.status(204).send()
  }
}

export { DeleteQuestionController }
