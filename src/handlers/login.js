const loginServices = require('../services/user')

module.exports = async (req, handler) => {
  if (!req.payload.username) {
    return Boom.notFound({ message: 'Bad Request' })
  }

  if (!req.payload.password) {
    return Boom.notFound({ message: 'Bad Request' })
  }

  const response = await loginServices(req.payload, handler)

  return response
}
