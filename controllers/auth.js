'use strict';

var debug = require('debug')('MTaaS-Worker:auth');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var User = require('../models/User');

var auth = {};

auth.register = function (req, res) {
    // var newUser = {
    //     username: req.body.username,
    //     password: req.body.password
    // };

    // User.create(newUser, function (err) {
    //     if (err) {
    //         res.status(500).send();
    //     } else {
    //         res.status(201).send();
    //     }
    // });

    User.register(new User({username: req.body.username}), req.body.password, function (err) {
        if (err) {
            res.status(500).send();
        } else {
            res.status(201).send();
        }
    });
};

auth.login = function (req, res) {
    // User.findOne({username: req.body.username}, function (err, user) {
    //     if (err) {
    //         res.status(500).send();
    //     } else if (!user) {
    //         res.status(404).send();
    //     } else if (user.password !== req.body.password) {
    //         res.status(422).send();
    //     } else {
    //         res.send("Token");
    //     }
    // });
    passport.authenticate('local', {session: false}, function (err, user, info) {
        if (err) {
            return res.status(500).send(info);
        }
        if (!user) {
            return res.status(400).send(info);
        }
        debug(user);
        res.send({token: jwt.sign({username: user.username}, 'secret')});
    })(req, res);
};

auth.logout = function () {
    // TODO
};

module.exports = auth;