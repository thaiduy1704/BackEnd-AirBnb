import express from 'express'
import { getAllLocations, getLocationById, deleteLocation, createLocation, updateLocationById } from '../../controllers/locationController.js'

const locationRouter = express.Router()

locationRouter.get("", getAllLocations)
locationRouter.get('/:locationId', getLocationById)
locationRouter.post('', createLocation)
locationRouter.put('/:locationId', updateLocationById)
locationRouter.delete('/:locationId', deleteLocation)

export { locationRouter } 