import express from 'express'
import { getAllLocations } from '../../controllers/locationController.js'

const locationRouter = express.Router()

locationRouter.get('/getAllLocations', getAllLocations)

export { locationRouter } 