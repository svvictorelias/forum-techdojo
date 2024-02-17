import { CreateQuestionController } from '@modules/question/useCases/createQuestion/CreateQuestionController'
import { DeleteQuestionController } from '@modules/question/useCases/deleteQuestion/DeleteQuestionController'
import { FindQuestionController } from '@modules/question/useCases/find/FindController'
import { FindByIdQuestionController } from '@modules/question/useCases/findById/FindByIdController'
import { FindByUserQuestionController } from '@modules/question/useCases/findByUser/FindByUserController'
import { UpdateQuestionController } from '@modules/question/useCases/updateQuestion/UpdateQuestionController'
import { isAuth } from '@shared/middleware/isAuth'
import { Router } from 'express'

const questionRouter = Router()

const createQUestionCOntroller = new CreateQuestionController()
const updateQUestionController = new UpdateQuestionController()
const findByIdQuestionController = new FindByIdQuestionController()
const findByUserQuestionController = new FindByUserQuestionController()
const findQuestionController = new FindQuestionController()
const deleteQuestionController = new DeleteQuestionController()

questionRouter.post('/', isAuth, createQUestionCOntroller.handle)
questionRouter.put('/:id', isAuth, updateQUestionController.handle)
questionRouter.delete('/:id', isAuth, deleteQuestionController.handle)
questionRouter.get('/user', isAuth, findByUserQuestionController.handle)
questionRouter.get('/all', isAuth, findQuestionController.handle)
questionRouter.get('/:id', isAuth, findByIdQuestionController.handle)

export { questionRouter }
