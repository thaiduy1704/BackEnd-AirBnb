import { PrismaClient } from '@prisma/client'
import { comparePassword, hashPassword } from '../utils/bcrypt.js'
import { createJWT, verifyJWT } from '../utils/jwt.js'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const data = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    console.log(data);
    if (!data) {

      errorCode(res, "No data")
    }
    const checkPassword = comparePassword(password, data.password)
    if (!checkPassword) {

      errorCode(res, "Wrong password")
    }
    res.status(200).send("Login successfully")

    



  } catch (error) {
    failCode(res)
  }
}

const register = async (req, res) => {
  try {

    let { name, password, email, phone, birthday, gender, role } = req.body
    const hashedPassword = hashPassword(password)

    let data = { name, password: hashedPassword, email, phone, birthday, gender, role }
    let createData = await prisma.user.create({
      data
    })
    if (createData) {
      successCode(res, createData)
    } else {
      errorCode(res, "Don't create User")
    }
    createJWT()
  } catch (error) {
    failCode(res)
  }
}

export { login, register }