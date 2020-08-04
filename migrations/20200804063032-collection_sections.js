module.exports = {
  async up (db, client) {
    return await db.createCollection('sections', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['intitule', 'date'],
          properties: {
            intitule: {
              bsonType: 'string'
            },
            date: {
              bsonType: 'date'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('sections').drop()
  }
}
