import { serviceUnavailable } from './serviceUnavailable'

describe('serviceUnavailable', () => {
  test('Returns correct status code', () => {
    const { statusCode } = serviceUnavailable()
    expect(statusCode).toBe(503)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'Sorry, server is unavailable'
    const { message } = serviceUnavailable(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Who knows?',
      isCurrent: true
    }
    const { data } = serviceUnavailable(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
