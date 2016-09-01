'use strict';

var debug = require('debug')('MTaaS-Worker:auth');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var User = require('../models/User');

var auth = {};

auth.register = function (req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function (err) {
        if (err) {
            res.status(500).send();
        } else {
            res.status(201).send();
        }
    });
};

auth.login = function (req, res) {
    passport.authenticate('local', {session: false}, function (err, user, info) {
        if (err) {
            return res.status(500).send(info);
        }
        if (!user) {
            return res.status(400).send(info);
        }
        // debug(user);
        res.send({token: 'JWT ' + jwt.sign({username: user.username}, process.env.JWT_SECRET)});
    })(req, res);
};

auth.logout = function () {
    // TODO
};

module.exports = auth;