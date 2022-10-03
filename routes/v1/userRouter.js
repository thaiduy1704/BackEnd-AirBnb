import express from 'express'
import { getAllUsers, getUserById, getAllUserBySearchName, createUser, updateUserById, deleteUser } from '../../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/getAllUsers', getAllUsers)
userRouter.get('/getUserById/:userId', getUserById)
userRouter.post('/createUser', createUser)
userRouter.put('/updateUserById/:userId', updateUserById)
userRouter.delete("/deleteUser/:userId", deleteUser)
userRouter.get('/search/:nameSearch', getAllUserBySearchName)

export { userRouter } 