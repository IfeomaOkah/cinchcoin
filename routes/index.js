const express = require('express');
const router = express.Router();
const Wallet = require('../models/cryptowallet'); 


// Get login page 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


  // Get home page
  router.get("/home", (req, res, next) => {
    res.render("home");
  });

// Get bitcoin page
router.get("/bitcoin", (req, res, next) => {
  res.render("bitcoin");
});


// GET Total Balance 
router.get("/totalbalance", (req, res, next) => {
  res.render("totalbalance");
});

// GET User Account 
router.get("/useraccount", (req, res, next) => {
  res.render("useraccount");
});


// Add Coins to database 

router.get('/totalbalance', (req, res, next) => {
  res.render("totalbalance")
}); 

router.post('/home', (req,  res, next) => {
 const { bitcoin, ethereum, litecoin, xrp } = req.body; 
 const newTotal = new Total ({
  bitcoin, ethereum, litecoin, xrp})
   newTotal.save()
     .then((total) => {
       res.redirect('/home');
     })
     .catch((error) => {
       console.log(error);
     })
}); 

router.get("/market", (req, res, next) => {
  res.render("market");
});


module.exports = router;
