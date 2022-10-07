import express from 'express'
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking, getAllBookingByUserId } from '../../controllers/bookingController.js'

const bookingRouter = express.Router()

bookingRouter.get('', getAllBookings)
bookingRouter.get('/:bookingId', getBookingById)
bookingRouter.get('/getAllBookingByUserId/:userId', getAllBookingByUserId)
bookingRouter.post('', createBooking)
bookingRouter.put('/:bookingId', updateBooking)
bookingRouter.delete('/:bookingId', deleteBooking)
export { bookingRouter } 