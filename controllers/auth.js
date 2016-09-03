'use strict';

var debug = require('debug')('MTaaS-Worker:auth');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var User = require('../models/User');

var auth = {};

auth.register = function (req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(generateResponse(user));
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
        res.send(generateResponse(user));
    })(req, res);
};

auth.logout = function () {
    // TODO
};

function generateResponse(user) {
    return {
        user_id: user._id,
        token: 'JWT ' + jwt.sign({user_id: user._id}, process.env.JWT_SECRET)
    }
}

module.exports = auth;