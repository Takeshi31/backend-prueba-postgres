// import express from 'express'
// import processTextRequest from './repositories/processTextRequest'
// import cors from 'cors'

// import textsRoutes from './routes/texts'

// const app = express()
// const PORT: string = '3000'

// app.locals.storageText = []

// app.use(express.json())

// // app.use(cors)

// // app.use('/add-text', textsRoutes)
// app.get('/add-text', cors(), (req: express.Request, res: express.Response) => {
//   const textInput = req.query.text

//   if (typeof textInput !== 'string') {
//     res.status(400).send({ message: 'Type input invalid' })
//   }

//   res.send(processTextRequest(textInput as string))
// })

// app.listen(PORT, () => { })

// export default app

import express, { Application } from 'express'
import cors from 'cors'

import { TextController } from './controllers/textController'
import { TextStorage } from '../src/repositories/textStorage'

const app: Application = express()

app.use(express.json())
app.use(cors())

const textStorage = new TextStorage()
const textController = new TextController(textStorage)

app.get('/add-text', textController.addText.bind(textController))

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
