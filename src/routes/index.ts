import { Router } from 'express'
import { userRouter } from './user.routes'
import { authRouter } from './auth.routes'
import { questionRouter } from './question.routes'
import { likeRouter } from './like.routes'

const router = Router()

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/question', questionRouter)
router.use('/like', likeRouter)

export { router }
