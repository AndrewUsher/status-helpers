import { insufficientStorage } from './insufficientStorage'

describe('insufficientStorage', () => {
  test('Returns correct status code', () => {
    const { statusCode } = insufficientStorage()
    expect(statusCode).toBe(507)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request'
    const { message } = insufficientStorage(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Who knows?',
      isCurrent: true
    }
    const { data } = insufficientStorage(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
