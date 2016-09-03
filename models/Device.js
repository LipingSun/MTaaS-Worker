var mongoose = require('mongoose');

var Device = mongoose.model('Device', {
    imei: String,
    brand: String,
    model: String,
    os_release: String,
    os_version: String,
    cpu: String,
    memory: String,
    status: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = Device;