import express from 'express'

const app = express()

app.use('/', (req, res) => {
  res.send('Hello word')
})

const start = async () => {
  app.listen(8080, console.log(`Server is listening on port`))
}

start()