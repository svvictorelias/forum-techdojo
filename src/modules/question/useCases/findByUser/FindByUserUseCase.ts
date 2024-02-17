import { type Question } from '@modules/question/infra/entities/question'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindByUserQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(user: string): Promise<Question[]> {
    const questions = await this.questionRepository.findByUser(user)
    return questions
  }
}

export { FindByUserQuestionUseCase }
