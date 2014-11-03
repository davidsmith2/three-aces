var mongoose = require('mongoose');

var environmentSchema = new mongoose.Schema({
    takeout_available: Boolean,
    open_menu: String
});

module.exports = mongoose.model('environment', environmentSchema);
