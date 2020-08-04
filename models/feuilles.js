/** Model feuilles
 * @module models/feuilles
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name feuillessSchema
 * @requires mongoose
 * @memberof module:models/feuilles
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const feuillesSchema = mongoose.Schema({

  urlSheet: {
    type: String,
    required: true
  },
  logo: {
    type: Buffer,
    required: true
  },
  section: {
    type: ObjectId,
    required: true
  }
})

module.exports = mongoose.models.feuillesSchema || mongoose.model('feuilles', feuillesSchema)
