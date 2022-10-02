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
const createRoom = async (req, res) => {
  try {
    let { name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId } = req.body
    let data = {
      name, numberOfGuests, bedroom, bed, bathroom, description, washer, iron, television, airConditioner, wifi, kitchen, garage, pool, image, price, locationId
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
    failCode(res)
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
    res.send("Succes Delete Room")

  } catch (error) {
    failCode(res)
  }
}

export { getAllRooms, getRoomById, getRoomByLocationId, createRoom, deleteRoom }