import app from '..'
import { ITextInput } from '../interfaces/textInput.interface'

const processRequest = (textInput: string): ITextInput[] => {
  const storageTexts = app.locals.storageText

  const newTextInput: ITextInput = {
    text: textInput,
    date: new Date().toLocaleString()
  }

  storageTexts.push(newTextInput)

  console.log(`Storage: ${JSON.stringify(storageTexts)}`)

  return storageTexts
}

export default processRequest
