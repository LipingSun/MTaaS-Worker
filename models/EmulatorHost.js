var mongoose = require('mongoose');

var EmulatorHost = mongoose.model('emulator_host', {
    status: String,
    uri: String,
    region: String,
    spec: mongoose.Schema.Types.Mixed
});

module.exports = EmulatorHost;