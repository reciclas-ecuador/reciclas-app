import express from 'express'
import cors from 'cors'
import { boomErrorHandler, generalErrorHandler, logError, prismaErrorHandler } from './middlewares/error_handler'
import useRoutes from './routes'

const app = express()
const PORT = process.env.PORT ?? 3000

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
app.use(cors({
  origin: (origin, callback) => {
    // if (origin === undefined) return new Error('Not allowed by CORS')
    if (origin === undefined || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))
app.use(express.json())

useRoutes(app)

app.use(logError)
app.use(prismaErrorHandler)
app.use(boomErrorHandler)
app.use(generalErrorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
