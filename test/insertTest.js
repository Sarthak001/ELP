const mocha = require('mocha');
const assert = require('assert');
const myUser = require('../models/User.js');

describe('Inserting a record', function() {

  it('Inserts a record to the DB', function(done) {

    var user = new myUser({
      name: 'Sajal'
    });

      user.save().then(function() {
        assert(user.isNew === false);
        done();
      });
  });
});


// describe('Test 1', function() {
//   it('Testing', function() {
//     assert(2+3 === 5);
//   });
// });
