var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	restaurantSchema = require('./restaurant').schema,
	environmentSchema = require('./environment').schema,
	menuSchema = require('./menu').schema;

var openMenuSchema = new Schema({
    omf_uuid: String,
    omf_updated_timestamp: String,
    restaurant_info: [restaurantSchema],
    environment: [environmentSchema],
    menus: [menuSchema]
});

module.exports = mongoose.model('openMenu', openMenuSchema);
