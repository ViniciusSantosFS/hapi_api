const services = require('../services/user')

const createUser = async (req, handler) => {
  if (!req.payload.username) {
    return Boom.notFound({ message: 'Bad Request' })
  }

  const response = await services.createUser(req.payload, handler)

  return response
}

module.exports = {
  createUser,
}
