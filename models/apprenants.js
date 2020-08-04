/** Model apprenants
 * @module models/apprenants
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name apprenantssSchema
 * @requires mongoose
 * @memberof module:models/apprenants
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const apprenantsSchema = mongoose.Schema({

  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  }
})

module.exports = mongoose.models.apprenantsSchema || mongoose.model('apprenants', apprenantsSchema)
