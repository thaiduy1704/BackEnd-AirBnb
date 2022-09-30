import express from 'express'
import { bookingRouter } from './v1/bookingRouter.js';
import { commentRouter } from './v1/commentRouter.js';
import { locationRouter } from './v1/locationRouter.js';
import { roomRouter } from './v1/roomRouter.js';
import { userRouter } from './v1/userRouter.js'

const rootRouter = express.Router();

rootRouter.use("/user/v1/", userRouter)
rootRouter.use("/booking/v1", bookingRouter)
rootRouter.use("/comment/v1", commentRouter)
rootRouter.use("/location/v1", locationRouter)
rootRouter.use("/room/v1", roomRouter)


export { rootRouter }