var {defineSupportCode} = require('cucumber');
var server = require('../../../server/server');
var dataSource = server.dataSource('db', {adapter: 'memory'});
var request = require('supertest')(server);
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
  var self = this;

  When('I make a GET request to {string}', function(url, callback) {
    request.get(url).end(function(err, res) {
      self.res = res;
      callback();
    });
  });

  Then('The status code should be {int}', function(status, callback) {
    assert.equal(self.res.status, status, 'Status code is not equals to ' + status);
    callback();
  });

  Then('The content type should be {string}', function(contentType, callback) {
    assert.equal(self.res.type, 'application/' + contentType, 'Content type is not equals to ' + contentType);
    callback();
  });
});
