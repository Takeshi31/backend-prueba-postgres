import { ITextInput } from '../interfaces/textInput.interface'

export class TextStorage {
  private readonly storageText: ITextInput[] = []

  public addText (text: string): void {
    const newTextInput: ITextInput = {
      text,
      date: new Date().toLocaleString()
    }
    this.storageText.push(newTextInput)
  }

  // TODO: For test
  public getAllTexts (): ITextInput[] {
    return this.storageText
  }
}
