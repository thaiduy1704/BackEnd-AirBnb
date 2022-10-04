import express from 'express'
import { getAllComments, getCommentByRoomId, createComment, updateComment, deleteComment } from '../../controllers/commentController.js'

const commentRouter = express.Router()

commentRouter.get('', getAllComments)
commentRouter.get('/getCommentByRoomId/:roomId', getCommentByRoomId)
commentRouter.post('', createComment)
commentRouter.put('/:commentId', updateComment)
commentRouter.delete('/:commentId', deleteComment)


export { commentRouter } 