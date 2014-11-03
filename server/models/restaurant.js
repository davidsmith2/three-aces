var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
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

module.exports = mongoose.model('restaurant', restaurantSchema);
