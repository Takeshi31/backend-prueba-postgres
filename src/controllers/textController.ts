import { Request, Response } from 'express'
import { IError } from '../interfaces/error.interface'
import { ITextInput } from '../interfaces/textInput.interface'
import { TextStorage } from '../repositories/textStorage'

interface Input {
  text: string
  page: number
  size: number
}

interface DeleteText {
  id: string
}

export class TextController {
  private readonly textStorage: TextStorage

  constructor (textStorage: TextStorage) {
    this.textStorage = textStorage
  }

  async addText (req: Request<{}, {}, Input>, res: Response): Promise<void> {
    const { text, page, size } = req.body
    const response: IError | ITextInput[] = await this.textStorage.addText(text, page, size)

    if (typeof response === 'object' && response !== null && 'code' in response) {
      res.status(response?.code).send(response)
    }

    if (response instanceof Array) res.send(response)
  }

  async deleteText (req: Request<DeleteText, {}, {}, {}>, res: Response): Promise<void> {
    const { id } = req.params
    const result: IError | ITextInput[] = await this.textStorage.delete(id)

    if (typeof result === 'object' && result !== null && 'code' in result) {
      res.status(result?.code).send(result)
    }

    if (result instanceof Array) res.send(result)
  }
}
