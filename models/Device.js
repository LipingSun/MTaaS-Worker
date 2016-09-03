var mongoose = require('mongoose');

var Device = mongoose.model('Device', {
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status: String,
    adb_uri: String,
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Device;