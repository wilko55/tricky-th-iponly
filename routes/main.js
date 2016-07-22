var flash = require('connect-flash');
var moment = require('moment');
var models = require('../data/models/index');
var Base64 = require('js-base64').Base64;
var config = require('../config').config();

var emails = require('../data/emails');

module.exports = function(app) {
  app.get('/', function(req,res, next) {
    // emailServices.testEmail();
    res.render('home', { messages: req.flash('info'), error: req.flash('error') })
  })
}
