import { gatewayTimeout } from './gatewayTimeout'

describe('gatewayTimeout', () => {
  test('Returns correct status code', () => {
    const { statusCode } = gatewayTimeout()
    expect(statusCode).toBe(504)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'The gateway needs a break'
    const { message } = gatewayTimeout(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Bye gateway...',
      isCurrent: true
    }
    const { data } = gatewayTimeout(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
