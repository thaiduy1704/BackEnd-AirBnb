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

export { getAllLocations }