var mongoose = require('mongoose'),
	menuSchema = require('./menu').schema,
	Schema = mongoose.Schema;

var openMenuSchema = new Schema({
	omf_uuid: String,
	omf_updated_timestamp: String,
	restaurant_info: {
		restaurant_name: String,
		address_1: String,
		city_town: String,
		state_province: String,
		postal_code: String,
		country: String,
		phone: String,
		fax: String,
		open_menu: String
	},
	environment: {
		takeout_available: Boolean,
		open_menu: String
	},
	menus: [menuSchema]
});

module.exports = mongoose.model('OpenMenu', openMenuSchema);
