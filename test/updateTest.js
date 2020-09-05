const mocha = require('mocha');
const assert = require('assert');
const myUser = require('../models/User.js');

describe('Updating a record', function() {

  var user;
  beforeEach(function(done) {
    user = new myUser({
      name: 'Sarthak'
    });

      user.save().then(function() {
        done();
      });
  });

  it('Update a record in the DB', function(done) {
    myUser.findOneAndUpdate({name: 'Sarthak'}, {name: 'Sarthak Tiwari'}).then(function() {
      myUser.findOne({_id: user._id}).then(function(result) {
        assert(result.name === 'Sarthak Tiwari');
        done();
      });
    });
  });
});


// describe('Test 1', function() {
//   it('Testing', function() {
//     assert(2+3 === 5);
//   });
// });
