import { PrismaClient } from '@prisma/client'



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

const getUserPagination = async (req, res) => {
  try {
    let { pageIndex, pageSize } = req.params

    let page = Number(pageIndex)
    if (page === 1) {
      page = 0
    }


    const data = await prisma.user.findMany({
      skip: page,
      take: Number(pageSize)
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
    res.send("Delete User Successfully")
  } catch (error) {
    failCode(res)
  }
}
const uploadImageUser = async (req, res) => {
  try {

    const { filename } = req.file
    const { userId } = req.params
    let getData = await prisma.user.findFirst({
      where: {
        id: Number(userId)
      }
    })

    let data = { ...getData, image: `/public/img/${filename}` }
    await prisma.user.update({
      data, where: {
        id: Number(userId)
      }
    })

    if (getData) {
      successCode(res, filename)
    } else {
      errorCode(res, "No upload")
    }

  } catch (error) {
    console.log(error);
    failCode(res)
  }
}

export { getAllUsers, getUserById, getAllUserBySearchName, createUser, updateUserById, deleteUser, getUserPagination, uploadImageUser }