const connection = require('../config/index')

module.exports = async (user, handler) => {
  const { password, username } = user
  if (!user.hasOwnProperty('password') || !user.hasOwnProperty('username')) {
    return handler.response({ message: 'name cannot be empty' }).code(401)
  }

  const loginField = [password, username]

  if (loginField.includes('')) {
    return handler.response({ message: 'fields cannot be empty' }).code(401)
  }

  try {
    await connection.authenticate()
    await connection.query(
      `INSERT INTO User (username, password, name, email) VALUES ('${username}', '${password}');`
    )
    return handler.response(user).code(200)
  } catch (error) {
    throw new Error(error)
  }
}
