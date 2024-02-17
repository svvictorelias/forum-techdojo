import { type IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { UserRepository } from '@modules/user/infra/repositories/UserRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
