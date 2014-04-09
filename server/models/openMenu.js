var mongoose = require('mongoose'),
    menuSchema = require('./menu').schema;

var openMenuSchema = new mongoose.Schema({
    omfUuid: String,
    omfUpdatedTimestamp: String,
    restaurantInfo: {
        restaurantName: String,
        address1: String,
        cityTown: String,
        stateProvince: String,
        postalCode: String,
        country: String,
        phone: String,
        fax: String,
        openMenu: String
    },
    environment: {
        takeoutAvailable: Boolean
    },
    menus: [menuSchema]
});

module.exports = mongoose.model('openMenu', openMenuSchema);
