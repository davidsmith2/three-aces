var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var restaurantSchema = require('./restaurant').schema;
var environmentSchema = require('./environment').schema;
var menuSchema = require('./menu').schema;

var openMenuSchema = new Schema({
	omf_uuid: String,
	omf_updated_timestamp: String,
	restaurant_info: [restaurantSchema],
	environment: [environmentSchema],
	menus: [menuSchema]
});

module.exports = mongoose.model('OpenMenu', openMenuSchema);
