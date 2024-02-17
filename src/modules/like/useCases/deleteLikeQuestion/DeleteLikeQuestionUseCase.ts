import { ILikeRepository } from '@modules/like/infra/repositories/ILikeRepository'
import { CustomError } from '@shared/error/CustomError'
import { inject, injectable } from 'tsyringe'

@injectable()
class DeleteLikeQuestionUseCase {
  constructor(
    @inject('LikeRepository')
    private readonly likeRepository: ILikeRepository
  ) {}

  async execute(id: string, idUser: string): Promise<void> {
    const existLike = await this.likeRepository.findById(id)
    if (!existLike) {
      throw new CustomError('Like question not found', 404)
    }
    if (idUser !== existLike.id_user) {
      throw new CustomError('Like question not match with user', 401)
    }
    await this.likeRepository.delete(id)
  }
}

export { DeleteLikeQuestionUseCase }
