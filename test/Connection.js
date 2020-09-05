var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(function(done) {
  mongoose.connect('mongodb://localhost/practice', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });

  mongoose.connection.once('open', function() {
    console.log('Connection Successful');
    done();
  }).on('error', function() {
    console.log('Connection Failed', error);
  });
});

before(function(done) {
  mongoose.connection.collections.users.drop(function() {
    done();
  });
});
