import express from 'express'
import { getAllComments } from '../../controllers/commentController.js'

const commentRouter = express.Router()

commentRouter.get('/getAllComments', getAllComments)

export { commentRouter } 