import { Request, Response } from 'express'

import { TextController } from '../src/controllers/textController'
import { TextStorage } from '../src/repositories/textStorage'

interface Input {
  text: string
  page: number
  size: number
}

interface DeleteText {
  id: string
}
describe('Test processRequest function', () => {
  it('test_add_text_success', async () => {
    // Arrange
    const mockTextStorage: TextStorage = {
      getAllTexts: jest.fn().mockResolvedValue([{ id: 1, text: 'test', date: '2022-01-01' }]),
      addText: jest.fn().mockResolvedValue([{ id: 1, text: 'test', date: '2022-01-01' }]),
      delete: jest.fn().mockResolvedValue(true)
    }

    const textController = new TextController(mockTextStorage)
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const req = { body: { text: 'test', page: 1, size: 10 } } as Request<{}, {}, Input>
    const res = {
      send: jest.fn(),
      status: jest.fn()
    } as unknown as Response<any, Record<string, any>>

    await textController.addText(req, res)

    // Assert
    expect(mockTextStorage.addText).toHaveBeenCalledWith('test', 1, 10)
    expect(res.send).toHaveBeenCalledWith([{ id: 1, text: 'test', date: '2022-01-01' }])
  })

  // it('test_delete_text_success', async () => {
  //   // Arrange
  //   const mockTextStorage: TextStorage = {
  //     getAllTexts: jest.fn().mockResolvedValue([{ id: 1, text: 'test', date: '2022-01-01' }]),
  //     addText: jest.fn().mockResolvedValue([{ id: 1, text: 'test', date: '2022-01-01' }]),
  //     delete: jest.fn().mockResolvedValue(true)
  //   }
  //   const textController = new TextController(mockTextStorage)
  //   // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  //   const req = { params: { id: '1' } } as Request<DeleteText, {}, {}, {}>
  //   const res = {
  //     send: jest.fn(async (data) => {
  //       console.log(`LOG: res.send called with data ${JSON.stringify(await data)}`)
  //     }),
  //     status: jest.fn()
  //   } as unknown as Response<any, Record<string, any>>

  //   // Act
  //   await textController.deleteText(req, res)

  //   // Wait for a short period of time
  //   await new Promise(resolve => setTimeout(resolve, 4000))
  //   // Assert
  //   expect(mockTextStorage.delete).toHaveBeenCalledWith('1')
  //   console.log(`LOG A: ${JSON.stringify(res.send())}`)
  //   expect(res.send).toHaveBeenCalledWith('1  ')
  // })
})

describe('TextController', () => {
  let mockTextStorage: TextStorage
  let textController: TextController
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const req = { params: { id: '1' } } as Request<DeleteText, {}, {}, {}>
  const res = {
    send: jest.fn(async (data) => {
      console.log(`LOG: res.send called with data ${JSON.stringify(await data)}`)
    }),
    status: jest.fn()
  } as unknown as Response<any, Record<string, any>>

  beforeEach(() => {
    mockTextStorage = {
      delete: jest.fn()
    } as unknown as TextStorage

    textController = new TextController(mockTextStorage)
  })

  describe('deleteText', () => {
    it('should call TextStorage delete method with the id parameter', async () => {
      await textController.deleteText(req, res)

      expect(mockTextStorage.delete).toHaveBeenCalledWith(req.params.id)
    })
  })
})
