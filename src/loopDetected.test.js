import { loopDetected } from './loopDetected'

describe('loopDetected', () => {
  test('Returns correct status code', () => {
    const { statusCode } = loopDetected()
    expect(statusCode).toBe(508)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".'
    const { message } = loopDetected(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Who knows?',
      isCurrent: true
    }
    const { data } = loopDetected(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
