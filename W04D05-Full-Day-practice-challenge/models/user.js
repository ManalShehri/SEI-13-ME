const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// Manal
const UserSchema = new mongoose.Schema({
    username : String,
    passwordDigest : String,
    bio : String,
    email : String,
    name: String,
    image: String,
  
    followers: [{type: mongoose.Schema.Types.ObjectId , ref : 'user' }],
    following: [{type: mongoose.Schema.Types.ObjectId , ref : 'user'}],

})



// User functions 
// statics will works as a class method for the UserSchema
UserSchema.statics.createSecure = (username, password, bio, email, name, image, callback) => {
    console.log("I received this username, password :", username, password);
  
    bcrypt.genSalt((err, salt) => {
      console.log('brypt salt:', salt)
      bcrypt.hash(password, salt, (err, passwordHAash) => {
        console.log('password:', password)
        console.log('passwordHAash:', passwordHAash)
       
        User.create({username, passwordDigest: passwordHAash, bio, email, name, image,}, callback)
        // .then( (user) => {
        //   console.log(user);
        // });
      })
    });
  
  };
  
  //Auth the pass in login 
  UserSchema.statics.authenticate = (username, password,callback) => {
    // find the user 
    User.findOne({username})
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
  

  UserSchema.statics.follow = function (toFollow) {
    // User.findOne({theUser})
    // .then((theUserData) =>
    // {
      User.findById(toFollow)
      .then((toFollowUser) => {
        console.log('...........................')
        console.log('you are trying to  add the user to follow list', toFollowUser.name)

    })
  //  })
  .catch((err) => console.log("Error: User not found ", err));
  }
    

    //  User.findById(toFollow)
    //  .then((toFollowUser) => {
    //   .then( (companies) => {
    //     console.log(companies)
    //     console.log('...........................')
    //     console.log(cars)
    //     res.render('company/Edit.ejs', {cars, company: companies})
    // })





  // console.log('you hit the button')
  // var toFollow =  req.body.toFollow
  // console.log('tofollw is ', toFollow)
  // User.findOne({ _id: req.session.userId })
  // User.findById(toFollow)
  // .then((toFollowUser) => {
  //     res.render('profile', { user: toFollowUser });
  // })
  // .catch((err) => console.log("Error: User not found ", err));


const User = mongoose.model('user' , UserSchema)
module.exports = User 