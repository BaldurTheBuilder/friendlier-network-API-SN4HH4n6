const { connect, connection } = require('mongoose');

connect('mongodb://localhost/unit18Challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
