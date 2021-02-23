const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: String,
  passwordDigest: String,
  messages : { type : Array , "default" : [] }
});

// methods for login go here

UserSchema.statics.createSecure = (username, password,callback) => {
  bcrypt.genSalt((err, salt) => {
    console.log('brypt salt:', salt)
    bcrypt.hash(password, salt, (err, passwordHAash) => {
      User.create({username, passwordDigest: passwordHAash}, callback)
    })
  });

};

var User = mongoose.model("User", UserSchema);

// export user model
module.exports = User;
