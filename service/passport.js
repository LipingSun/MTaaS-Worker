var User = require('../models/User');
var passport = require('passport');

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(User.createStrategy());
var JwtStrategyOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: process.env.JWT_SECRET
};
passport.use(new JwtStrategy(JwtStrategyOpts, function (jwt_payload, done) {
    User.findOne({_id: jwt_payload.user_id}, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
}));

module.exports = passport;