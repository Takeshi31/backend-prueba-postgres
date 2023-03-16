import express from 'express'

import processTextRequest from '../repositories/processTextRequest'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  const textInput = req.query.text

  if (typeof textInput !== 'string') {
    res.status(400).send({ message: 'Type input invalid' })
  }

  res.send(processTextRequest(textInput as string))
})

export default router
