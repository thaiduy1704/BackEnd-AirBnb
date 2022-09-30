import express from 'express'
import { getAllRooms, getRoomById, getRoomByLocationId } from '../../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.get('/getAllRooms', getAllRooms)
roomRouter.get('/getRoomById/:id', getRoomById)
roomRouter.get('/getRoomByLocationId/:id', getRoomByLocationId)

export { roomRouter } 