import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { type Question } from '../entities/question'
import { type IQuestionRepository } from './IQuestionRepository'
import prisma from '@database/prismaClient'

class QuestionRepository implements IQuestionRepository {
  async create(data: IQuestionDTO): Promise<void> {
    await prisma.question.create({ data })
  }

  async find(): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: { deleted_at: null },
    })
    return questions as Question[]
  }

  async findById(id: string): Promise<Question> {
    const question = await prisma.question.findUnique({
      where: { id, deleted_at: null },
    })
    return question as Question
  }

  async findByUser(userId: string): Promise<Question[]> {
    const questions = await prisma.question.findMany({
      where: { user_id: userId, deleted_at: null },
    })
    return questions as Question[]
  }

  async update(id: string, data: IQuestionDTO): Promise<void> {
    await prisma.question.update({ where: { id }, data })
  }

  async delete(id: string): Promise<void> {
    await prisma.question.update({
      where: { id },
      data: { deleted_at: new Date() },
    })
  }
}

export { QuestionRepository }
