var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.post('/', function(req, res){
    console.log(req.body);
})

module.exports = router;