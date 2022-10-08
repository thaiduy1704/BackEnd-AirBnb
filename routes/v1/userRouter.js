import express from 'express'
import multer from 'multer'
import { getAllUsers, getUserById, getAllUserBySearchName, createUser, updateUserById, deleteUser, getUserPagination, uploadImageUser } from '../../controllers/userController.js'
import { storage } from '../../utils/storage.js'

const userRouter = express.Router()
const upload = multer({ storage })


userRouter.get('', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.get("/getUserPagination/pageIndex=:pageIndex/pageSize=:pageSize", getUserPagination)
userRouter.post('', createUser)
userRouter.post('/uploadAvatar/:userId', upload.single("image"), uploadImageUser)
userRouter.put('/:userId', updateUserById)
userRouter.delete("/:userId", deleteUser)
userRouter.get('/search/:nameSearch', getAllUserBySearchName)

export { userRouter } 