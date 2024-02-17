import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(data: IQuestionDTO): Promise<void> {
    await this.questionRepository.create(data)
  }
}

export { CreateQuestionUseCase }
