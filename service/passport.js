var User = require('../models/User');
var passport = require('passport');

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(User.createStrategy());
var JwtStrategyOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'secret'
};
passport.use(new JwtStrategy(JwtStrategyOpts, function (jwt_payload, done) {
    User.findOne({username: jwt_payload.username}, function (err, user) {
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