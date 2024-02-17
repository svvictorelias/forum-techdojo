import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { FindQuestionUseCase } from './FindUseCase'

class FindQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findQuestionUseCase = container.resolve(FindQuestionUseCase)

    const questions = await findQuestionUseCase.execute()
    return response.send(questions)
  }
}

export { FindQuestionController }
