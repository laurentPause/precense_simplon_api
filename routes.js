module.exports = function (app) {
  const sheet = require('./controllers/c_sheet');
  
  app.route('/sheet/:id')
    .get(sheet.vue);
};