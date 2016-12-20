var mongoose = require('mongoose');

var Emulator = mongoose.model('emulator', {
    name: String,
    occupant: String,
    status: String,
    adb_uri: String,
    region: String,
    mysql_id: String,
    hub: {type: mongoose.Schema.Types.ObjectId, ref: 'hub'},
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Emulator;