import { PrismaClient } from '@prisma/client'
import e from 'express'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllUsers = async (req, res) => {
  try {
    const data = await prisma.user.findMany()
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No Users")
    }

  } catch (error) {
    failCode(res)
  }
}
const getAllUserBySearchName = async (req, res) => {
  try {
    const { nameSearch } = req.params
    const data = await prisma.user.findMany({
      where: {
        name: {
          contains: nameSearch
        }
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No Users")
    }


  } catch (error) {
    failCode(res)
  }
}
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params
    const data = await prisma.user.findFirst({
      where: {
        id: Number(userId)
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No User")
    }
  } catch (error) {
    failCode(res)
  }
}
const createUser = async (req, res) => {
  try {
    let { name, password, email, phone, birthday, gender, role } = req.body
    let data = { name, password, email, phone, birthday, gender, role }
    let createData = await prisma.user.create({
      data
    })
    if (createData) {
      successCode(res, createData)
    } else {
      errorCode(res, "Don't create User")
    }
  } catch (error) {
    failCode(res)
  }
}
const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params
    let { name, password, email, phone, birthday, gender, role } = req.body
    let data = { name, password, email, phone, birthday, gender, role }
    let updateData = await prisma.user.update({
      data,
      where: {
        id: Number(userId)
      }
    })
    if (updateData) {
      successCode(res, updateData)
    } else {
      errorCode(res, "Don't update User")
    }

  } catch (error) {
    failCode(res)
  }
}
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params
    await prisma.user.delete({
      where: {
        id: Number(userId)
      }
    })
    res.send("Delete User Succesfull")
  } catch (error) {
    failCode(res)
  }
}


export { getAllUsers, getUserById, getAllUserBySearchName, createUser, updateUserById, deleteUser }