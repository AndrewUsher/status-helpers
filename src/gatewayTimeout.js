const gatewayTimeout = (message, data) => ({
  error: 'Gateway Timeout',
  statusCode: 504,
  ...(message && { message }),
  ...(data && { data })
})

export { gatewayTimeout }
