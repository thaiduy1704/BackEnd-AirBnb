import express from 'express'
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from '../../controllers/bookingController.js'

const bookingRouter = express.Router()

bookingRouter.get('/getAllBookings', getAllBookings)
bookingRouter.get('/getBookingId/:bookingId', getBookingById)
bookingRouter.post('/createBooking', createBooking)
bookingRouter.put('/updateBooking/:bookingId', updateBooking)
bookingRouter.delete('/deleteBooking/:bookingId', deleteBooking)
export { bookingRouter } 