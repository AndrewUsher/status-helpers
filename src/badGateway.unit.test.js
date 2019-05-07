import { badGateway } from './badGateway'

describe('badGateway', () => {
  test('Returns correct status code', () => {
    const { statusCode } = badGateway()
    expect(statusCode).toBe(504)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'This gateway is not very nice'
    const { message } = badGateway(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Naughty gateway',
      isCurrent: true
    }
    const { data } = badGateway(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
