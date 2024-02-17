import prisma from '@database/prismaClient'
import { type ILikeRepository } from './ILikeRepository'
import { type Like } from '../entities/Like'

class LikeRepository implements ILikeRepository {
  async findById(id: string): Promise<Like> {
    return (await prisma.like.findUnique({ where: { id } })) as Like
  }

  async create(idQuestion: string, idUser: string): Promise<void> {
    await prisma.like.create({
      data: { id_question: idQuestion, id_user: idUser },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.like.delete({ where: { id } })
  }

  async deleteMany(idQuestion: string): Promise<void> {
    await prisma.like.deleteMany({ where: { id_question: idQuestion } })
  }
}

export { LikeRepository }
