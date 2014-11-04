var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var menuGroupSchema = require('./menuGroup').schema;

var menuSchema = new Schema({
	menu_name: String,
	currency_symbol: String,
	menu_groups: [menuGroupSchema],
	open_menu: String
});

module.exports = mongoose.model('Menu', menuSchema);
