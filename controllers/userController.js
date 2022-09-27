import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllUsers = async (req, res) => {
  try {
    const data = await prisma.user.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}

export { getAllUsers }