var mongoose = require('mongoose');

var Device = mongoose.model('Device', {
    imei: String,
    cpu: String
});

module.exports = Device;