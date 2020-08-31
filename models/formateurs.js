/** Model formateurs
 * @module models/formateurs
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name formateurssSchema
 * @requires mongoose
 * @memberof module:models/formateurs
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const formateursSchema = mongoose.Schema({

  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
})

module.exports = mongoose.models.formateursSchema || mongoose.model('formateurs', formateursSchema)
