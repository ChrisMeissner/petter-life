const mongoose = require('mongoose');
require ("dotenv").config();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/a-petter-life', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;