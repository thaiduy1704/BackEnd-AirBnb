import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllBookings = async (req, res) => {
  try {
    const data = await prisma.booking.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}
const getBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params
    const data = await prisma.booking.findFirst({
      where: {
        id: Number(bookingId)
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No Booking")
    }

  } catch (error) {
    failCode(res)
  }
}
const getAllBookingByUserId = async (req, res) => {
  try {
    const { userId } = req.params
    const data = await prisma.booking.findMany({
      where: {
        userId: Number(userId)
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, 'No Room')
    }

  } catch (error) {
    failCode(res)
  }
}
const createBooking = async (req, res) => {
  try {
    let { roomId, checkIn, checkOut, numberOfGuests, userId } = req.body
    let data = { roomId, checkIn: new Date(checkIn), checkOut: new Date(checkOut), numberOfGuests, userId }
    let createData = await prisma.booking.create({
      data
    })
    if (createData) {
      successCode(res, createData)
    } else {
      errorCode(res, "Don't Create Booking ")
    }

  } catch (error) {
    failCode(res)
  }
}

const updateBooking = async (req, res) => {
  try {
    const { bookingId } = req.params
    let { roomId, checkIn, checkOut, numberOfGuests, userId } = req.body
    let data = { roomId, checkIn: new Date(checkIn), checkOut: new Date(checkOut), numberOfGuests, userId }
    let updateData = await prisma.booking.update({
      data, where: {
        id: Number(bookingId)
      }
    })
    if (updateData) {
      successCode(res, updateData)
    } else {
      errorCode(res, "Don't Update Booking ")
    }

  } catch (error) {
    failCode(res)
  }
}
const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params
    await prisma.booking.delete({
      where: {
        id: Number(bookingId)
      }
    })
    res.send("SuccesFul Delete Booking")
  } catch (error) {
    failCode(res)
  }
}



export { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking, getAllBookingByUserId }