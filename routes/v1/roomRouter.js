import express from 'express'
import { getAllRooms, getRoomById, getRoomByLocationId, createRoom, deleteRoom } from '../../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.get('/getAllRooms', getAllRooms)
roomRouter.get('/getRoomById/:roomId', getRoomById)
roomRouter.get('/getRoomByLocationId/:locationId', getRoomByLocationId)
roomRouter.post('/createRoom', createRoom)
roomRouter.delete('/deleteRoom/:roomId', deleteRoom)

export { roomRouter } 