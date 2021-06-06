const loopDetected = (message, data) => ({
  error: 'The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".',
  statusCode: 508,
  ...(message && { message }),
  ...(data && { data })
})

export { loopDetected }
