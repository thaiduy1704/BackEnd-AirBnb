import express from 'express'
import { getAllUsers, getUserById, getAllUserBySearchName, createUser, updateUserById, deleteUser, getUserPagination } from '../../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.get("/getUserPagination/pageIndex=:pageIndex/pageSize=:pageSize", getUserPagination)
userRouter.post('', createUser)
userRouter.put('/:userId', updateUserById)
userRouter.delete("/:userId", deleteUser)
userRouter.get('/search/:nameSearch', getAllUserBySearchName)

export { userRouter } 