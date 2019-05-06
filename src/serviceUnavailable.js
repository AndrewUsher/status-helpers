const serviceUnavailable = (message, data) => ({
  error: 'Service Unavailable',
  statusCode: 503,
  ...(message && message),
  ...(data && data)
})

console.log(serviceUnavailable())

export { serviceUnavailable }
