var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mers = require('mers');
var passport = require('./service/passport');

var User = require('./models/User');
var Hub = require('./models/Hub');
var Device = require('./models/Device');
var Emulator = require('./models/Emulator');
var EmulatorHost = require('./models/EmulatorHost');
var auth = require('./controllers/auth');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose.connect(process.env.MONGODB_URI);

app.post('/register', auth.register);
app.post('/login', auth.login);
// app.use('/api/v1', passport.authenticate('jwt', { session: false }));
app.use('/api/v1', mers({mongoose: mongoose}).rest());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});


module.exports = app;
