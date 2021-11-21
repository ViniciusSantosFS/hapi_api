const userHandler = require('./handlers/users')
const login = require('./handlers/login')

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: userHandler.createUser,
  },

  {
    method: 'POST',
    path: '/login',
    handler: login,
  },

  {
    method: 'GET',
    path: '/products',
    handler: () => 'Produtos',
  },
]
