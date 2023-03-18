import { TextStorage } from '../src/repositories/textStorage'

describe('Test processRequest function', () => {
  it('Should return an object with text and date properties as string types', async () => {
    const textStorage = new TextStorage()
    const input = 'Lorem ipsum'
    textStorage.addText(input)
    const output = textStorage.getAllTexts()
    expect(typeof output[0].text).toBe('string')
    expect(typeof output[0].date).toBe('string')
  })
})
