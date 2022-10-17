import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { rootRouter } from './routes/index.js'
import { notFoundMiddleware } from './middlewares/index.js'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'
import swaggerJSDoc from 'swagger-jsdoc'
import {swaggerDefinition} from './swagger.js'
  import YAML from 'yamljs';



const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};


const swaggerDocument = YAML.load('./document.yaml');


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

//Middleware
app.use(morgan('tiny')) //Easy for debug
app.use(express.json());


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//Router
app.use('/api', rootRouter)
app.use(notFoundMiddleware)

const start = async () => {
  app.listen(PORT, console.log(`Server is listening on ${PORT}`))
}

start()