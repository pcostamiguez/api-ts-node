import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()

//#region GET
router.get('/', (_, res) => {
  return res.send('Hello, world!')
})

router.get('/teste', (_, res) => {
  return res.send('Teste!')
})

router.get('/teste/:id', (req, res) => {
  console.log(req.params.id)
  return res.json(req.body)
})
//#endregion

//#region POST
router.post('/teste', (req, res) => {
  return res.status(StatusCodes.OK).json(req.body)
})
//#endregion

//#region PUT

//#endregion

//#region PATCH

//#endregion

//#region DELETE

//#endregion

export { router }