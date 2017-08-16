
var assert = require('assert');

describe('Person model', function() {
  it('valid that lastname is required', function(done) {
    var server = require('../../../server/server');
    var dataSource = server.dataSource('db', {adapter: 'memory'});

    var Person = server.models.Person;
    var joe = new Person({firstname: 'joe'});
    joe.save(function(err) {
      assert(err, 'should get a validation error');
      assert(joe.errors.lastname, 'model should have lastname error');
      done();
    });
  });
});
