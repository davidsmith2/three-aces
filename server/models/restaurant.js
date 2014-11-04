var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    restaurant_name: String,
    address_1: String,
    city_town: String,
    state_province: String,
    postal_code: String,
    country: String,
    phone: String,
    fax: String,
    open_menu: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
