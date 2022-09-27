import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import userRouter from './routes/userRoutes.js'


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

//Middleware
app.use(morgan('tiny')) //Easy for debug
app.use(express.json());



//Router
app.use('/api/users', userRouter)

const start = async () => {
  app.listen(PORT, console.log(`Server is listening on ${PORT}`))
}

start()