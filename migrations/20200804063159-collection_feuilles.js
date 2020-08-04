module.exports = {
  async up (db, client) {
    return await db.createCollection('feuilles', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['urlSheet', 'logo', 'section'],
          properties: {
            urlSheet: {
              bsonType: 'string'
            },
            logo: {
              bsonType: 'string'
            },
            section: {
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
    return await db.collection('feuilles').drop()
  }
}
