module.exports = {
  async up (db, client) {
    return await db.createCollection('sections_formateurs', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['section', 'formateur'],
          properties: {
            section: {
              bsonType: 'objectId'
            },
            formateur: {
              bsonType: 'objectId'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('sections_formateurs').drop()
  }
}
