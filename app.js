var express = require('express');
var app = express();
var catalog = require('cpslo-catalog');
var _ = require('lodash');

app.get('/courses/:id', function(req, res) {
  var course = catalog.courses[req.params.id];
  res.send(course ? 200 : 404, course);
});

app.get('/units/:prefix', function(req, res) {
  var unit = catalog.units[req.params.prefix];
  res.send(unit ? 200 : 404, unit);
});

app.get('/units/:prefix/courses', function(req, res) {
  var unit = catalog.units[req.params.prefix];
  if (!unit) return res.send(404);
  res.send(200, _.select(catalog.courses, function(course) {
    return _.contains(unit.courses, course.id);
  }));
});

module.exports = app;
