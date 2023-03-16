import processRequest from '../src/repositories/processTextRequest'

describe('Test processRequest function', () => {
  it('Should return an object with text and date properties as string types', async () => {
    const input = 'Lorem ipsum'
    const output = processRequest(input)
    expect(typeof output[0].text).toBe('string')
    expect(typeof output[0].date).toBe('string')
  })
})
