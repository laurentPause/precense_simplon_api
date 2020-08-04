module.exports = function (app) {
  const sheet = require('./controllers/c_sheet');
  
  app.route('/test')
    .get(sheet.vue);
};