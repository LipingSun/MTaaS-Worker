var mongoose = require('mongoose');

var EmulatorHost = mongoose.model('emulator_host', {
    status: String,
    uri: String,
    region: String,
    aws_id: String,
    emulators: [{type: mongoose.Schema.Types.ObjectId, ref: 'emulator'}],
    spec: mongoose.Schema.Types.Mixed
});

module.exports = EmulatorHost;