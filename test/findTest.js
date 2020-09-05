const mocha = require('mocha');
const assert = require('assert');
const myUser = require('../models/User.js');

describe('Finding a record', function() {
  var user;
  before(function(done) {
    user = new myUser({
      name: 'samriti'
    });

      user.save().then(function() {
        done();
      });
  });

  it('finds one record from the DB', function(done) {
    myUser.findOne({name: 'samriti'}).then(function(result) {
      assert(result.name === 'samriti');
      done();
    });
  });

  it('finds one record by ID from the DB', function(done) {
    myUser.findOne({_id: user._id}).then(function(result) {
      assert(result._id.toString() === user._id.toString());
      console.log(result._id.toString(), result.name);
      done();
    });
  });

});
