import { type Like } from '../entities/Like'

interface ILikeRepository {
  create(idQuestion: string, idUser: string): Promise<void>
  findById(id: string): Promise<Like>
  delete(id: string): Promise<void>
  deleteMany(idQuestion: string): Promise<void>
}

export type { ILikeRepository }
