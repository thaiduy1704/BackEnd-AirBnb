import express from 'express'
import { authRouter } from './v1/authRouter.js';
import { bookingRouter } from './v1/bookingRouter.js';
import { commentRouter } from './v1/commentRouter.js';
import { locationRouter } from './v1/locationRouter.js';
import { roomRouter } from './v1/roomRouter.js';
import { userRouter } from './v1/userRouter.js'

const rootRouter = express.Router();

rootRouter.use("/users", userRouter)
rootRouter.use("/booking", bookingRouter)
rootRouter.use("/comment", commentRouter)
rootRouter.use("/location", locationRouter)
rootRouter.use("/room", roomRouter)
rootRouter.use("/auth", authRouter)


export { rootRouter }