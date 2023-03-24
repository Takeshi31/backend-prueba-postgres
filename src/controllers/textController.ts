import { Request, Response } from 'express'
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

  async addText (req: Request<{}, {}, {}, Input>, res: Response): Promise<void> {
    const { text, page, size } = req.query

    const response = await this.textStorage.addText(text, page, size)
    res.send(response)
  }

  async deleteText (req: Request<DeleteText, {}, {}, {}>, res: Response): Promise<void> {
    const { id } = req.params
    console.log(`ID => ${id}`)
    const result = await this.textStorage.delete(id)
    res.send(result)
  }
}
