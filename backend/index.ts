import express from 'express'
import cors from 'cors'
import { boomErrorHandler, generalErrorHandler, logError, prismaErrorHandler } from './middlewares/error_handler'
import useRoutes from './routes'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

useRoutes(app)

app.use(logError)
app.use(prismaErrorHandler)
app.use(boomErrorHandler)
app.use(generalErrorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
