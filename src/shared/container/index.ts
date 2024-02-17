import { type IQuestionRepository } from '@modules/question/infra/repositories/IQuestionRepository'
import { QuestionRepository } from '@modules/question/infra/repositories/QuestionRepository'
import { type IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { UserRepository } from '@modules/user/infra/repositories/UserRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IQuestionRepository>(
  'QuestionRepository',
  QuestionRepository
)
