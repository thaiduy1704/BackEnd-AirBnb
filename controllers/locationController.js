import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllLocations = async (req, res) => {
  try {
    const data = await prisma.location.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}
const getLocationById = async (req, res) => {
  try {
    const { locationId } = req.params

    const data = await prisma.location.findFirst({
      where: {
        id: Number(locationId)
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No Location")
    }

  } catch (error) {
    failCode(res)
  }
}
const deleteLocation = async (req, res) => {
  try {
    const { locationId } = req.params
    await prisma.location.delete({
      where: {
        id: Number(locationId)
      }
    })
    res.send('Success Delete Location')
  } catch (error) {
    failCode(res)
  }
}

const createLocation = async (req, res) => {
  try {
    let { name, province, country, image } = req.body
    let data = { name, province, country, image }
    const createData = await prisma.location.create({
      data
    })
    if (createData) {
      successCode(res, createData)
    } else {
      errorCode(res, "Don't Create Location")
    }
  } catch (error) {
    failCode(res)
  }
}
const updateLocationById = async (req, res) => {
  try {
    const { locationId } = req.params
    let { name, province, country, image } = req.body
    let data = { name, province, country, image }
    const updateData = await prisma.location.update({
      data,
      where: {
        id: Number(locationId)
      }
    })
    if (updateData) {
      successCode(res, updateData)
    } else {
      errorCode(res, "Don't Update Location")
    }

  } catch (error) {
    failCode(res)

  }
}

export { getAllLocations, getLocationById, deleteLocation, createLocation, updateLocationById }