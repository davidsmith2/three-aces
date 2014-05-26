var mongoose = require('mongoose'),
    menuSchema = require('./menu').schema;

var openMenuSchema = new mongoose.Schema({
    omf_uuid: String,
    omf_updated_timestamp: String,
    restaurant_info: {
        address_1: String,
        city_town: String,
        country: String,
        fax: String,
        open_menu: String,
        phone: String,
        postal_code: String,
        restaurant_name: String,
        state_province: String
    },
    environment: {
        open_menu: String,
        takeout_available: Boolean
    },
    menus: [menuSchema]
});

module.exports = mongoose.model('openMenu', openMenuSchema);
