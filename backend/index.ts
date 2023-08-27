import express from 'express'
import cors from 'cors'
import useRoutes from './routes'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

useRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
