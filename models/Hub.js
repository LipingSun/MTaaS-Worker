var mongoose = require('mongoose');

var Hub = mongoose.model('hub', {
    occupant: String,
    status: String,
    uri: String,
    region: String,
    mysql_id: String,
    aws_id: String,
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Hub;