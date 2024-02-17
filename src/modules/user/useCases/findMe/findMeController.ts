import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { FindMeUseCase } from './findMeUseCase'

class FindMeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const findMeUseCase = container.resolve(FindMeUseCase)

    const me = await findMeUseCase.execute(id)

    return response.send(me)
  }
}

export { FindMeController }
