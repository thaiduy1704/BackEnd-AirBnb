import express from 'express'
import { getAllRooms, getRoomById, getRoomByLocationId, createRoom, deleteRoom, updateRoom } from '../../controllers/roomController.js'

const roomRouter = express.Router()

roomRouter.get('', getAllRooms)
roomRouter.get('/:roomId', getRoomById)
roomRouter.get('/getRoomByLocationId/:locationId', getRoomByLocationId)
roomRouter.post('', createRoom)
roomRouter.put('/:roomId', updateRoom)
roomRouter.delete('/:roomId', deleteRoom)

export { roomRouter } 