const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//const rating = require("../models/Rating");
const saltRounds = 10;


const userSchema = new mongoose.Schema({
  index: {type: Number, required: true, unique: true},
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  ratings: [{type: Object}]
});


userSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

userSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

const UserSchema = mongoose.model('User', userSchema);
module.exports = UserSchema;