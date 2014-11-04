var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var environmentSchema = new Schema({
    takeout_available: Boolean,
    open_menu: String
});

module.exports = mongoose.model('Environment', environmentSchema);
