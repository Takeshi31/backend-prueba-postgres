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

app.listen(3000, () => {})
