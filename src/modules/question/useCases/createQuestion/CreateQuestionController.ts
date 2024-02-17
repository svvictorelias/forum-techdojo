import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { CreateQuestionUseCase } from './CreateQuestionUseCase'

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const data: IQuestionDTO = request.body
    data.user_id = id
    const createQuestionUseCase = container.resolve(CreateQuestionUseCase)
    await createQuestionUseCase.execute(data)
    return response.status(201).send()
  }
}

export { CreateQuestionController }
