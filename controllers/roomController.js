import { PrismaClient } from '@prisma/client'
import e from 'express'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllRooms = async (req, res) => {
  try {
    const data = await prisma.room.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}

const getRoomById = async (req, res) => {
  try {
    const { roomId } = req.params
    const data = await prisma.room.findFirst({
      where: {
        id: roomId
      }
    })
    if (data) {

      successCode(res, data)
    } else {
      errorCode(res, "No Room")
    }
  } catch (error) {
    failCode(res)

  }
}

const getRoomByLocationId = async (req, res) => {
  try {
    const { location_id } = req.params
    const data = await prisma.room.findMany({
      where: {
        locationId: location_id
      },
      include: {
        locationId: true
      }
    })
    if (data) {

      successCode(res, data)
    } else {
      errorCode(res, "No Room")
    }
  } catch (error) {
    failCode(res)

  }
}

export { getAllRooms, getRoomById, getRoomByLocationId }