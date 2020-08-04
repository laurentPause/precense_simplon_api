/** Model users
 * @module models/users
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name usersSchema
 * @requires mongoose
 * @memberof module:models/users
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const usersSchema = mongoose.Schema({

  login: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('users', usersSchema)
