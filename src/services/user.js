const connection = require('../config/index')

const createUser = async (user, handler) => {
  const { name, password, email, username } = user
  if (
    !user.hasOwnProperty('name') ||
    !user.hasOwnProperty('password') ||
    !user.hasOwnProperty('email') ||
    !user.hasOwnProperty('username')
  ) {
    return handler.response({ message: 'name cannot be empty' }).code(401)
  }

  const userFields = [name, password, email, username]

  if (userFields.includes('')) {
    return handler.response({ message: 'fields cannot be empty' }).code(401)
  }

  try {
    await connection.authenticate()
    await connection.query(
      `INSERT INTO User (username, password, name, email) VALUES ('${username}', '${password}', '${name}', '${email}');`
    )
    return handler.response(user).code(201)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
}
