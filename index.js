/**
 * @fileoverview Echo server for testing.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, no-store');
  next();
});

app.use(bodyParser.json());

app.post('/echo', function (req, res) {
  res.json(req.body);
});

app.all('/echo/param/:id', function (req, res) {
  res.json({
    param: req.params.id
  });
});

app.post('/echo/headers', function (req, res) {
  res.json(req.headers);
});

app.get('/echo/qs', function (req, res) {
  res.json(req.query);
});

module.exports = function (port) {
  return app.listen(port);
};
