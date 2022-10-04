import express from 'express'
import { getAllComments, getCommentByRoomId, createComment, updateComment, deleteComment } from '../../controllers/commentController.js'

const commentRouter = express.Router()

commentRouter.get('/getAllComments', getAllComments)
commentRouter.get('/getCommentByRoomId/:roomId', getCommentByRoomId)
commentRouter.post('/createComment', createComment)
commentRouter.put('/updateComment/:commentId', updateComment)
commentRouter.delete('/deleteComment/:commentId', deleteComment)


export { commentRouter } 