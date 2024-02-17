import { AuthUserContoller } from '@modules/auth/useCases/authUser/authUserController'
import { Router } from 'express'

const authRouter = Router()
const authUserController = new AuthUserContoller()

authRouter.post('/', authUserController.handle)

export { authRouter }
