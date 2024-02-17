import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { FindByUserQuestionUseCase } from './FindByUserUseCase'

class FindByUserQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const findByUserQuestionUseCase = container.resolve(
      FindByUserQuestionUseCase
    )

    const questions = await findByUserQuestionUseCase.execute(id)
    return response.send(questions)
  }
}

export { FindByUserQuestionController }
