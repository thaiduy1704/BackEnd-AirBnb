import express from 'express'
import { getAllLocations, getLocationById, deleteLocation, createLocation, updateLocationById } from '../../controllers/locationController.js'

const locationRouter = express.Router()

locationRouter.get('/getAllLocations', getAllLocations)
locationRouter.get('/getLocationById/:locationId', getLocationById)
locationRouter.post('/createLocation', createLocation)
locationRouter.put('/updateLocation/:locationId', updateLocationById)
locationRouter.delete('/deleteLocationById/:locationId', deleteLocation)

export { locationRouter } 