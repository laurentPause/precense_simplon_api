module.exports = function (app) {
  const sheet = require('./controllers/c_sheet');
  const section = require('./controllers/c_section')
  const formateur = require('./controllers/c_formateur')
  const fiche = require('./controllers/c_fiche')
  
  app.route('/sheet/:id')
    .get(sheet.vue);
  
  app.route('/section')
    .post(section.add)
    .get(section.all)
  
  app.route('/formateur')
    .post(formateur.add)
    .get(formateur.all)
  
  app.route('/formateur/find')
    .post(formateur.find)
  
  app.route('/section/assoce')
    .post(section.assoce)
  
  app.route('/fiche')
    .post(fiche.add)
    .get(fiche.all)
    .put(fiche.update)
    .delete(fiche.delete)


};