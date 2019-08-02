const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");


// // GET SIGNUP page
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

// POST SIGNUP page
router.post('/signup', (req, res, next) => {

  const {username, password,
    bitcoin,
    ethereum,
    litecoin, 
    xrp } = req.body
 
  if (username === "" || password === "") {
    res.render("signup", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }
  
  User.findOne({username: username})
  .then(user => {

    user !== null ? res.render('signup', {errorMessage2: "username already exists in the db!"}) : console.log('its ok');
    

  
    bcrypt.hash(req.body.password, 10, (error, hash) => {
      if(error) throw new Error("Encryption error");

      let newUser = {
        username: username, 
        password: hash,
        bitcoin: bitcoin,
        ethereum: ethereum,
        litecoin: litecoin, 
         xrp: xrp
      }

      User.create(newUser)
      .then((user)=> {
        res.redirect('/');
      })
      .catch((err)=> {
        res.send("error");
      })
    });
  })


});


// Authenticate the user if the username and passwords are correct
router.post("/login", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("/index", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("/index", {
          errorMessage: "Incorrect username or password."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        req.session.currentUser = user;
        res.redirect("/home");
      } else {
        res.render("/index", {
          errorMessage: "Incorrect username or password."
        });
      }
  })
  .catch(error => {
    next(error);
  })
});




// Logout 
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/views/index.hbs");
  });
});
router.post('/home')


// Prevent users who are not logged from accessing home page
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next(); 
  } else {                          
    res.redirect("/");        
  }                                
});                               


module.exports = router;