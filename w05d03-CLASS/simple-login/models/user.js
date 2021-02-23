const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: String,
  passwordDigest: String,
});

// methods for login go here

// statics will works as a class method for the UserSchema
UserSchema.statics.createSecure = (email, password,callback) => {
  console.log("I received this email, password :", email, password);

  bcrypt.genSalt((err, salt) => {
    console.log('brypt salt:', salt)
    bcrypt.hash(password, salt, (err, passwordHAash) => {
      console.log('password:', password)
      console.log('passwordHAash:', passwordHAash)
     
      User.create({email, passwordDigest: passwordHAash}, callback)
      // .then( (user) => {
      //   console.log(user);
      // });
    })
  });

};

//Auth the pass in login 
UserSchema.statics.Auth = (email, password,callback) => {
  // find the user 
  User.findOne({email})
  .then(foundUser => {
    if(!foundUser) {
      callback("Error: no user found", null)
    }
    else if (foundUser.checkPassword(password))
    {
      callback(null, foundUser)
    }
    else
    {
      callback("Error: wrong password", null)
    }

    console.log('Auth: foundUser', foundUser);
  }).catch(err => console.log(err))

};

UserSchema.methods.checkPassword = function (password)  {
  return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model("User", UserSchema);

// export user model
module.exports = User;
