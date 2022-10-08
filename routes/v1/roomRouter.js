import express from 'express'
import multer from 'multer'

import { getAllRooms, getRoomById, getRoomByLocationId, createRoom, deleteRoom, updateRoom, getRoomPagination, uploadImageRoom } from '../../controllers/roomController.js'
import { storage } from '../../utils/storage.js'


const roomRouter = express.Router()
const upload = multer({ storage })


roomRouter.get('', getAllRooms)
roomRouter.get('/:roomId', getRoomById)
roomRouter.get('/getRoomByLocationId/:locationId', getRoomByLocationId)
roomRouter.get("/getRoomPagination/pageIndex=:pageIndex/pageSize=:pageSize", getRoomPagination)
roomRouter.post('', createRoom)
roomRouter.post('/uploadRoom/:roomId', upload.single("image"), uploadImageRoom)
roomRouter.put('/:roomId', updateRoom)
roomRouter.delete('/:roomId', deleteRoom)

export { roomRouter } 