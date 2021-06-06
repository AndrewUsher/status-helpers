import { networkAuthRequired } from './networkAuthRequired'

describe('networkAuthRequired', () => {
  test('Returns correct status code', () => {
    const { statusCode } = networkAuthRequired()
    expect(statusCode).toBe(511)
  })

  test('Returns message when passed in', () => {
    const MESSAGE_TEXT = 'The client needs to authenticate to gain network access'
    const { message } = networkAuthRequired(MESSAGE_TEXT)
    expect(message).toBe(MESSAGE_TEXT)
  })

  test('Returns data when passed in', () => {
    const MESSAGE_DATA = {
      type: 'Who knows?',
      isCurrent: true
    }
    const { data } = networkAuthRequired(null, MESSAGE_DATA)
    expect(data).toBe(MESSAGE_DATA)
  })
})
