import express from 'express'
import { getAllLocations, getLocationById, deleteLocation, createLocation, updateLocationById, uploadImageLocation, getLocationPagination } from '../../controllers/locationController.js'
import { storage } from '../../utils/storage.js'
import multer from 'multer'

const locationRouter = express.Router()
const upload = multer({ storage })

locationRouter.post("/upload/:id", upload.single("image"), uploadImageLocation)
locationRouter.get("/getLocationPagination/:pageIndex/:pageSize", getLocationPagination)

locationRouter.get("", getAllLocations)
locationRouter.get('/:locationId', getLocationById)
locationRouter.post('', createLocation)
locationRouter.put('/:locationId', updateLocationById)
locationRouter.delete('/:locationId', deleteLocation)

export { locationRouter } 