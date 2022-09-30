import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { rootRouter } from './routes/index.js'




dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

//Middleware
app.use(morgan('tiny')) //Easy for debug
app.use(express.json());



//Router
app.use('/api', rootRouter)

const start = async () => {
  app.listen(PORT, console.log(`Server is listening on ${PORT}`))
}

start()