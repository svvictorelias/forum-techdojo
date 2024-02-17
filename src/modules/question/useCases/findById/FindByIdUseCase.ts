import { type Question } from '@modules/question/infra/entities/question'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindByIdQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(id: string): Promise<Question> {
    const question = await this.questionRepository.findById(id)
    return question
  }
}

export { FindByIdQuestionUseCase }
