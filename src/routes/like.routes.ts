import { CreateLikeQuestionController } from '@modules/like/useCases/createLikeQuestion/CreateLikeQuestionController'
import { DeleteLikeQuestionController } from '@modules/like/useCases/deleteLikeQuestion/DeleteLikeQuestionController'
import { isAuth } from '@shared/middleware/isAuth'
import { Router } from 'express'

const likeRouter = Router()

const createLikeQuestionController = new CreateLikeQuestionController()
const deleteLikeQuestionController = new DeleteLikeQuestionController()

likeRouter.post('/question/:id', isAuth, createLikeQuestionController.handle)
likeRouter.delete('/:id', isAuth, deleteLikeQuestionController.handle)

export { likeRouter }
