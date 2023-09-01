import express from 'express'
import cors from 'cors'
import useCollaboratorsRoutes from './src/collaborators/routes/collaborators_routes'
import { boomErrorHandler, logError } from './middlewares/error_handler'
import useRoutesAdmin from './src/admin/routes/admin_routes'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

useCollaboratorsRoutes(app)
useRoutesAdmin(app)

app.use(logError)
app.use(boomErrorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
