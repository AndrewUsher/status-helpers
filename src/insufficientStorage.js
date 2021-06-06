const insufficientStorage = (message, data) => ({
  error: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request',
  statusCode: 507,
  ...(message && { message }),
  ...(data && { data })
})

export { insufficientStorage }
