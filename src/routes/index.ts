import { Router } from 'express'
import { userRouter } from './user.routes'
import { authRouter } from './auth.routes'
import { questionRouter } from './question.routes'

const router = Router()

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/question', questionRouter)

export { router }
