var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    restaurantName: String,
    address1: String,
    cityTown: String,
    stateProvince: String,
    postalCode: String,
    country: String,
    phone: String,
    fax: String,
    openMenu: String
});

module.exports = mongoose.model('restaurant', restaurantSchema);
