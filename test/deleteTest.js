const mocha = require('mocha');
const assert = require('assert');
const myUser = require('../models/User.js');

describe('Deleting a record', function() {
  var user;
  beforeEach(function(done) {
    user = new myUser({
      name: 'Yash'
    });

      user.save().then(function() {
        done();
        console.log(user._id.toString(), user.name);
      });
  });

  it('Deletes one record from the DB', function(done) {
    myUser.findOneAndRemove({name: 'Yash'}).then(function() {
      myUser.findOne({name: 'Yash'}).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });

});
