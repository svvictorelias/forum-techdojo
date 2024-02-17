import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { CustomError } from '@shared/error/CustomError'
import { inject, injectable } from 'tsyringe'

@injectable()
class DeleteQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(id: string, idUser: string): Promise<void> {
    const existQuestion = await this.questionRepository.findById(id)

    if (!existQuestion) {
      throw new CustomError('Question not found', 404)
    }

    if (existQuestion.user_id !== idUser) {
      throw new CustomError('Owner not match with question', 401)
    }

    await this.questionRepository.delete(id)
  }
}

export { DeleteQuestionUseCase }
