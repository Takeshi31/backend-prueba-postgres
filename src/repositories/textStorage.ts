import { IError } from '../interfaces/error.interface'
import { ITextInput } from '../interfaces/textInput.interface'
import Text from '../config/entities/text'

export class TextStorage {
  async addText (text: string, pageNumber: number = 1, pageSize: number = 10): Promise<ITextInput[] | IError> {
    try {
      const textEntity = new Text()
      textEntity.text = text
      textEntity.date = new Date().toLocaleString()

      await textEntity.save()

      return await this.getAllTexts(pageNumber, pageSize)
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, code: 500 }
      }

      return { message: 'Unknown error occurred', code: 500 }
    }
    // @TODO: Old logic
    // const newTextInput: ITextInput = {
    //   text,
    //   date: new Date().toLocaleString()
    // }
    // this.storageText.push(newTextInput)
  }

  async getAllTexts (pageNumber: number, pageSize: number): Promise<ITextInput[] | IError> {
    try {
      const texts = await Text.find({
        order: { id: 'DESC' },
        select: ['id', 'text', 'date'],
        skip: (pageNumber - 1) * pageSize,
        take: pageSize
      })

      return texts
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, code: 500 }
      }
      return { message: 'Unknown error occurred', code: 500 }
    }
    // @TODO: Old logic
    // return this.storageText
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async delete (id: string): Promise<ITextInput[] | IError> {
    try {
      await Text.delete({ id: parseInt(id) })
      return await this.getAllTexts(1, 10)
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message, code: 500 }
      }
      return { message: 'Unknown error occurred', code: 500 }
    }
  }
}
