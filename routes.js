module.exports = function (app) {
  const sheet = require('./controllers/c_sheet');
  const section = require('./controllers/c_section')
  const formateur = require('./controllers/c_formateur')
  const fiche = require('./controllers/c_fiche')
  const lien = require('./controllers/c_lien')
  

  // Sheet routes
  app.route('/sheet/:id')
    .get(sheet.vue);
  
  // Section routes
  app.route('/section')
    .post(section.add)
    .get(section.all)

  app.route('/section/assoce')
    .post(section.assoce)
  
  // Formateur routes
  app.route('/formateur')
    .post(formateur.add)
    .get(formateur.all)
  
  app.route('/formateur/find')
    .post(formateur.find)
  
  // Fiche routes
  app.route('/fiche')
    .post(fiche.add)
    .get(fiche.all)
    .put(fiche.update)
    .delete(fiche.delete)
  
  app.route('/fiche/:id')
    .get(fiche.one)
    .put(fiche.update)
    .delete(fiche.delete)
  
  // Signature routes
  app.route('/signature')
    .put(fiche.signature)

  // Lien routes
  app.route('/lien')
    .post(lien.add)
};
