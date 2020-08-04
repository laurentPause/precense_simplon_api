/** Model sections
 * @module models/sections
 * @requires mongoose
 */

const mongoose = require('mongoose')
// eslint-disable-next-line no-unused-vars
const ObjectId = mongoose.Schema.Types.ObjectId

/**
 * @name sectionssSchema
 * @requires mongoose
 * @memberof module:models/sections
 * @function
 * @param {array} - Propriétés de mon schéma
 */
const sectionsSchema = mongoose.Schema({

  intitule: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.models.sectionsSchema || mongoose.model('sections', sectionsSchema)
