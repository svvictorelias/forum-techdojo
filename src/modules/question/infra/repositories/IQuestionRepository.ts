import { type IQuestionDTO } from '@modules/question/dto/IQuestionDTO'
import { type Question } from '../entities/question'

interface IQuestionRepository {
  create(data: IQuestionDTO): Promise<void>
  find(): Promise<Question[]>
  findByUser(userId: string): Promise<Question[]>
  findById(id: string): Promise<Question>
  update(id: string, data: IQuestionDTO): Promise<void>
  delete(id: string): Promise<void>
}

export type { IQuestionRepository }
