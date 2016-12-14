var mongoose = require('mongoose');

var Emulator = mongoose.model('emulator', {
    occupant: String,
    status: String,
    adb_uri: String,
    region: String,
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Emulator;