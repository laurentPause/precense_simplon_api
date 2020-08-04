/** Model sections_formateurs
 * @module models/sections_formateurs
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name sections_formateurssSchema
 * @requires mongoose
 * @memberof module:models/sections_formateurs
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const sections_formateursSchema = mongoose.Schema({

  section: {
    type: ObjectId,
    required: true,
    ref: 'sections'
  },
  formateur: {
    type: ObjectId,
    required: true,
    ref: 'formateurs'
  }
})

module.exports = mongoose.models.sections_formateursSchema || mongoose.model('sections_formateurs', sections_formateursSchema)
