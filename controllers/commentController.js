import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllComments = async (req, res) => {
  try {
    const data = await prisma.comment.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}
const getCommentByRoomId = async (req, res) => {
  try {
    const { roomId } = req.params
    const data = await prisma.comment.findMany({
      where: {
        roomId: Number(roomId)
      }
    })
    if (data) {
      successCode(res, data)
    } else {
      errorCode(res, "No Comment")
    }
  } catch (error) {
    failCode(res)
  }
}

const createComment = async (req, res) => {
  try {
    let { roomId, userId, date, description, ratting } = req.body
    let data = {
      roomId, userId, date: new Date(date), description, ratting

    }
    let createData = await prisma.comment.create({
      data
    })
    if (createData) {
      successCode(res, createData)
    } else {
      errorCode(res, "Don't create comment")
    }
  } catch (error) {
    console.log(error
    );
    failCode(res)
  }
}
const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params
    let { roomId, userId, date, description, ratting } = req.body
    let data = {
      roomId, userId, date: new Date(date), description, ratting

    }
    let updateData = await prisma.comment.update({
      data,
      where: {
        id: Number(commentId)
      }
    })
    if (updateData) {
      successCode(res, updateData)
    } else {
      errorCode(res, "Don't update comment")
    }

  } catch (error) {
    console.log(error);
    failCode(res)
  }
}
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params
    await prisma.comment.delete({
      where: {
        id: Number(commentId)
      }
    })
    res.send("SuccesFul Delete Comment")
  } catch (error) {
    failCode(res)
  }
}




export { getAllComments, getCommentByRoomId, createComment, updateComment, deleteComment, }