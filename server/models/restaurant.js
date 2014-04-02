var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    omfUuid: String,
    restaurantName: String,
    address1: String,
    cityTown: String,
    stateProvince: String,
    postalCode: String,
    country: String,
    phone: String,
    fax: String
});

module.exports = mongoose.model('restaurant', restaurantSchema);
