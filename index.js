var app = require('./app');
var config = require('nconf').argv().env().file('config.json');

app.listen(config.get('PORT'));
