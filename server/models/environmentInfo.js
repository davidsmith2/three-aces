var mongoose = require('mongoose');

var environmentInfoSchema = new mongoose.Schema({
    takeoutAvailable: Boolean
});

module.exports = mongoose.model('environmentInfo', environmentInfoSchema);
