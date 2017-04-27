var express = require('express');
var router = express.Router();
var knex = require('../server/knexdb');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('welcome to users page');
});

router.post('/create/:username/:age/:country', function (req, res, next) {
    var username = req.params['username'];
    var age = req.params['age'];
    var country = req.params['country'];
    knex.createUser(username, age, country)
        .then(function () {
            res.send('user created successfully');
        }, function (err) {
            res.send('cant create user. ' + err.toString());
        });
});

router.get('/show', function (req, res, next) {
    knex.getUsers().then(function (users) {
        res.send(users);
    })
});


module.exports = router;
