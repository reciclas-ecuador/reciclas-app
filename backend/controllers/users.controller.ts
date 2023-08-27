import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

/** Add the necessary endpoints */

export default router
