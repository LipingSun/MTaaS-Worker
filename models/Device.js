var mongoose = require('mongoose');

var Device = mongoose.model('device', {
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    occupant: String,
    status: String,
    adb_uri: String,
    mysql_id: String,
    hub: {type: mongoose.Schema.Types.ObjectId, ref: 'hub'},
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Device;