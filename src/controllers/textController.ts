import { Request, Response } from 'express'
import { TextStorage } from '../repositories/textStorage'

interface Input {
  text: string
}

export class TextController {
  private readonly textStorage: TextStorage

  constructor (textStorage: TextStorage) {
    this.textStorage = textStorage
  }

  public addText (req: Request<{}, {}, {}, Input>, res: Response): void {
    const { text } = req.query

    this.textStorage.addText(text)
    res.send(this.textStorage)
  }
}
