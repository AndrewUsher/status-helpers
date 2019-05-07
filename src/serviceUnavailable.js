const serviceUnavailable = (message, data) => ({
  error: 'Service Unavailable',
  statusCode: 503,
  ...(message && { message }),
  ...(data && { data })
})

export { serviceUnavailable }
