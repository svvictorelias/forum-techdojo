import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { CustomError } from '@shared/error/CustomError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  idUser: string
  idQuestion: string
  data: IQuestionDTO
}

@injectable()
class UpdateQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute({ idUser, idQuestion, data }: IRequest): Promise<void> {
    const existQuestion = await this.questionRepository.findById(idQuestion)

    if (!existQuestion) {
      throw new CustomError('Question not found', 404)
    }

    if (existQuestion.user_id !== idUser) {
      throw new CustomError('Owner not match with question', 401)
    }

    await this.questionRepository.update(idQuestion, data)
  }
}

export { UpdateQuestionUseCase }
