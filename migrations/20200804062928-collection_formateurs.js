module.exports = {
  async up (db, client) {
    return await db.createCollection('formateurs', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['nom', 'prenom'],
          properties: {
            nom: {
              bsonType: 'string'
            },
            prenom: {
              bsonType: 'string'
            }
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    })
  },

  async down (db, client) {
    return await db.collection('formateurs').drop()
  }
}
