var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://XXXXXXX', {useNewUrlParser: true, useCreateIndex: true});
var db = mongoose.connection;

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
});

UserSchema.methods.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

UserSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

var User = module.exports = mongoose.model('User', UserSchema);
