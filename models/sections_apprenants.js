/** Model sections_apprenants
 * @module models/sections_apprenants
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name sections_apprenantssSchema
 * @requires mongoose
 * @memberof module:models/sections_apprenants
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const sections_apprenantsSchema = mongoose.Schema({

  section: {
    type: ObjectId,
    required: true,
    ref: 'sections'
  },
  apprenant: {
    type: ObjectId,
    required: true,
    ref: 'apprenants'
  }
})

module.exports = mongoose.models.sections_apprenantsSchema || mongoose.model('sections_apprenants', sections_apprenantsSchema)
