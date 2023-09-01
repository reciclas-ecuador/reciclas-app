import { Router } from 'express'

const routerAdmin = Router()

routerAdmin.get('/admintest', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

/** Add the necessary endpoints */

export default routerAdmin
