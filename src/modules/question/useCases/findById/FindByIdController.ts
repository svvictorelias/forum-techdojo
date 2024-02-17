import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { FindByIdQuestionUseCase } from './FindByIdUseCase'

class FindByIdQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const findByIdQuestionUseCase = container.resolve(FindByIdQuestionUseCase)
    const question = await findByIdQuestionUseCase.execute(id)
    return response.send(question)
  }
}

export { FindByIdQuestionController }
