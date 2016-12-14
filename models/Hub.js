var mongoose = require('mongoose');

var Hub = mongoose.model('hub', {
    occupant: String,
    status: String,
    uri: String,
    region: String,
    spec: mongoose.Schema.Types.Mixed
});

module.exports = Hub;