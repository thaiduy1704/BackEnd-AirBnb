import express from 'express'
import { login, register } from '../../controllers/authController.js'
const authRouter = express.Router()
import { authorization, authentication } from '../../middlewares/index.js'
authRouter.post("/login", authorization, login)
authRouter.post("/register", register)

export { authRouter }