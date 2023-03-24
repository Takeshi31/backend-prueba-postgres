import { IError } from '../interfaces/error.interface'
import { ITextInput } from '../interfaces/textInput.interface'
import Text from '../config/entities/text'

export class TextStorage {
  async addText (text: string, pageNumber: number = 1, pageSize: number = 10): Promise<ITextInput[] | IError | undefined> {
    try {
      const textEntity = new Text()

      textEntity.text = text
      textEntity.date = new Date().toLocaleString()
      await textEntity.save()
      const result = await this.getAllTexts(pageNumber, pageSize)
      console.log(textEntity)
      return result
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, code: 500 }
      }
    }

    // @TODO: Old logic
    // const newTextInput: ITextInput = {
    //   text,
    //   date: new Date().toLocaleString()
    // }
    // this.storageText.push(newTextInput)
  }

  // TODO: For test
  async getAllTexts (pNumber: number, pSize: number): Promise<(ITextInput[] | IError | undefined)> {
    const pageNumber: number = pNumber
    const pageSize: number = pSize
    try {
      const texts = await Text.find({
        order: { id: 'DESC' },
        select: ['text', 'date'],
        skip: (pageNumber - 1) * pageSize,
        take: pageSize
      })
      console.log(`GET: ${JSON.stringify(texts)}`)
      return texts
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, code: 500 }
      }
    }
    // @TODO: Old logic
    // return this.storageText
  }
}
