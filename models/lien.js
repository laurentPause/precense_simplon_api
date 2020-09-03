/** Model liens
 * @module models/liens
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name lienssSchema
 * @requires mongoose
 * @memberof module:models/liens
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const liensSchema = mongoose.Schema({

  idFiche: {
    type: ObjectId,
    required: true,
    ref: 'feuilles'
  },
  links: {
    type: Array,
    required: true
  },
  created: {
      type: Date,
      reqired: true
  }

})

module.exports = mongoose.models.liensSchema || mongoose.model('liens', liensSchema)
