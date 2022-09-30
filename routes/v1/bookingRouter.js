import express from 'express'
import { getAllBookings } from '../../controllers/bookingController.js'

const bookingRouter = express.Router()

bookingRouter.get('/getAllBookings', getAllBookings)

export { bookingRouter } 