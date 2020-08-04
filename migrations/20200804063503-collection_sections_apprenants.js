module.exports = {
  async up (db, client) {
    return await db.createCollection('sections_apprenants', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['section', 'apprenant'],
          properties: {
            section: {
              bsonType: 'objectId'
            },
            apprenant: {
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
    return await db.collection('sections_apprenants').drop()
  }
}
