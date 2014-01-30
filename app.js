var express = require('express');
var app = express();
var catalog = require('cpslo-catalog');

app.get('/courses/:id', function(req, res) {
  var course = catalog.courses[req.params.id];
  res.send(course ? 200 : 404, course);
});

module.exports = app;
