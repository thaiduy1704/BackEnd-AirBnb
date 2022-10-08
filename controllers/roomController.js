import { PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()
import { successCode, failCode, errorCode } from '../utils/response.js'


const getAllRooms = async (req, res) => {
  try {
    const data = await prisma.room.findMany()
    if (data) {

      successCode(res, data)
    } else {
      errorCode(res, "No Room")
    }

  } catch (error) {
    failCode(res)
  }
}

const getRoomById = async (req, res) => {
  try {
    const { roomId } = req.params
    const data = await prisma.room.findFirst({
      where: {
        id: Number(roomId)
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
    const { locationId } = req.params

    const data = await prisma.room.findMany({
      where: {
        locationId: Number(locationId)
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
const getRoomPagination = async (req, res) => {
  try {
    let { pageIndex, pageSize } = req.params

    let page = Number(pageIndex)
    if (page === 1) {
      page = 0
    }


    const data = await prisma.room.findMany({
      skip: page,
      take: Number(pageSize)
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


const createRoom = async (req, res) => {
  try {
    let { name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId } = req.body
    let data = {
      name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId: 1
    }
    let createData = await prisma.room.create({
      data
    })
    if (createData) {

      successCode(res, data)
    } else {
      errorCode(res, "No Room")
    }
  } catch (error) {
    console.log(error);
    failCode(res)
  }
}
const updateRoom = async (req, res) => {
  try {
    const { roomId } = req.params

    let { name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId } = req.body
    let data = {
      name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId
    }
    let updateData = await prisma.room.update({
      data, where: {
        id: Number(roomId)
      }
    })
    if (data) {
      successCode(res, updateData)

    } else {
      errorCode(res, "Update Room Fail")
    }

  } catch (error) {
    failCode

  }
}


const deleteRoom = async (req, res) => {
  try {
    let { roomId } = req.params
    await prisma.room.delete({
      where: {
        id: Number(roomId)
      }
    })
    res.send("Success Delete Room")

  } catch (error) {
    failCode(res)
  }
}
const uploadImageRoom = async (req, res) => {
  try {

    const { filename } = req.file
    const { roomId } = req.params
    let getData = await prisma.room.findFirst({
      where: {
        id: Number(roomId)
      }
    })

    let data = { ...getData, image: `/public/img/${filename}` }
    await prisma.room.update({
      data, where: {
        id: Number(roomId)
      }
    })

    if (getData) {
      successCode(res, filename)
    } else {
      errorCode(res, "No upload")
    }

  } catch (error) {
    failCode(res)
  }
}

export { getAllRooms, getRoomById, getRoomByLocationId, createRoom, updateRoom, deleteRoom, getRoomPagination, uploadImageRoom }