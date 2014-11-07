var mongoose = require('mongoose'),
	restaurantSchema = require('./restaurant'),
	environmentSchema = require('./environment'),
	menuSchema = require('./menu').schema,
	Schema = mongoose.Schema;

var openMenuSchema = new Schema({
	omf_uuid: String,
	omf_updated_timestamp: String,
	restaurant_info: restaurantSchema,
	environment: environmentSchema,
	menus: [menuSchema]
});

module.exports = mongoose.model('OpenMenu', openMenuSchema);
