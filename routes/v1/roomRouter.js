import express from 'express'
import { getAllRooms, getRoomById, getRoomByLocationId, createRoom, deleteRoom, updateRoom } from '../../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.get('/getAllRooms', getAllRooms)
roomRouter.get('/getRoomById/:roomId', getRoomById)
roomRouter.get('/getRoomByLocationId/:locationId', getRoomByLocationId)
roomRouter.post('/createRoom', createRoom)
roomRouter.put('/updateRoom/:roomId', updateRoom)
roomRouter.delete('/deleteRoom/:roomId', deleteRoom)

export { roomRouter } 