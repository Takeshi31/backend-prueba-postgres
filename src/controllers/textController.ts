import { Request, Response } from 'express'
import { TextStorage } from '../repositories/textStorage'

interface Input {
  text: string
  page: number
  size: number
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
}
