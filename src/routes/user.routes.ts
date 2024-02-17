import { CreateUserController } from '@modules/user/useCases/createUser/createUserController'
import { FindMeController } from '@modules/user/useCases/findMe/findMeController'
import { isAuth } from '@shared/middleware/isAuth'
import { Router } from 'express'

const userRouter = Router()
const createUserController = new CreateUserController()
const findMeController = new FindMeController()
userRouter.get('/me', isAuth, findMeController.handle)
userRouter.post('/', createUserController.handle)

export { userRouter }
