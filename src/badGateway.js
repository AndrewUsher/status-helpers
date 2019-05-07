const badGateway = (message, data) => ({
  error: 'Bad Gateway',
  statusCode: 504,
  ...(message && { message }),
  ...(data && { data })
})

export { badGateway }
