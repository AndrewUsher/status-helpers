const networkAuthRequired = (message, data) => ({
  error: 'The client needs to authenticate to gain network access',
  statusCode: 511,
  ...(message && { message }),
  ...(data && { data })
})

export { networkAuthRequired }
