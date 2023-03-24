import 'reflect-metadata'
import app from './app'

import { TextController } from './controllers/textController'
import { TextStorage } from '../src/repositories/textStorage'
import { AppDataSource } from './config/dataSource'

const textStorage = new TextStorage()
const textController = new TextController(textStorage)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main () {
  try {
    await AppDataSource.initialize()
    console.log('Database connected')
    app.listen(3000, () => {})
    console.log('Server listening in port 3000')
  } catch (error) {
    console.log(error)
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/add-text', textController.addText.bind(textController))
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.delete('/delete-text/:id', textController.deleteText.bind(textController))

void main()
