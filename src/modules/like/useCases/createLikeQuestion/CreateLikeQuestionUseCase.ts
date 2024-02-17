import { ILikeRepository } from '@modules/like/infra/repositories/ILikeRepository'
import { IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { CustomError } from '@shared/error/CustomError'
import { inject, injectable } from 'tsyringe'

@injectable()
class CreateLikeQuestionUseCase {
  constructor(
    @inject('LikeRepository')
    private readonly likeRepository: ILikeRepository,
    @inject('QuestionRepository')
    private readonly questionRepository: IQuestionRepository
  ) {}

  async execute(idQuestion: string, idUser: string): Promise<void> {
    const existQuestion = await this.questionRepository.findById(idQuestion)

    if (!existQuestion) {
      throw new CustomError('Question not found', 404)
    }

    await this.likeRepository.create(idQuestion, idUser)
  }
}

export { CreateLikeQuestionUseCase }
