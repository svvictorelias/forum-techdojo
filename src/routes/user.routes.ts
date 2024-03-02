import { CreateUserController } from '@modules/user/useCases/createUser/createUserController'
import { FindMeController } from '@modules/user/useCases/findMe/findMeController'
import { UpdateUserController } from '@modules/user/useCases/updateUser/updateUserController'
import { UpdateUserPasswordController } from '@modules/user/useCases/updateUserPassword/updateUserPasswordController'
import { isAuth } from '@shared/middleware/isAuth'
import { Router } from 'express'

const userRouter = Router()
const createUserController = new CreateUserController()
const findMeController = new FindMeController()
const updateUserController = new UpdateUserController()
const updateUserPasswordController = new UpdateUserPasswordController()

userRouter.get('/me', isAuth, findMeController.handle)
userRouter.post('/', createUserController.handle)
userRouter.put('/me', isAuth, updateUserController.handle)
userRouter.patch('/me/password', isAuth, updateUserPasswordController.handle)

export { userRouter }
