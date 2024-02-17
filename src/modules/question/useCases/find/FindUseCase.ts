import { type Question } from '@modules/question/infra/entities/question'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(): Promise<Question[]> {
    const questions = await this.questionRepository.find()
    return questions
  }
}

export { FindQuestionUseCase }
