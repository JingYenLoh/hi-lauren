var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  user.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  user.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  user.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  user.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  user.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function(req, res, next) {
  user.findOne({email: req.body.email, password: req.body.password}, function(err, use){
    if(err){
      console.log(err);
      return res.status(500).send;
    }
    if(!use){
      return res.status(404).send;
    }
    return res.status(200).send;
  });

});

/*router.post('/logi', function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  user.findOne({email: email, password: password}, function(err, use){
    if(err){
      console.log(err);
      return res.status(500).send;
    }
    if(!use){
      return res.status(404).send;
    }
    return res.status(200).send;
  });
});*/

module.exports = router;