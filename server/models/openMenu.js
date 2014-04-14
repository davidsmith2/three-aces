var mongoose = require('mongoose'),
    menuSchema = require('./menu').schema;

var openMenuSchema = new mongoose.Schema({
    omfUuid: String,
    omfUpdatedTimestamp: String,
    restaurantInfo: {
        address1: String,
        cityTown: String,
        country: String,
        fax: String,
        openMenu: String,
        phone: String,
        postalCode: String,
        restaurantName: String,
        stateProvince: String
    },
    environment: {
        openMenu: String,
        takeoutAvailable: Boolean
    },
    menus: [menuSchema]
});

module.exports = mongoose.model('openMenu', openMenuSchema);
