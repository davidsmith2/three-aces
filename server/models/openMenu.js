var mongoose = require('mongoose'),
    restaurantSchema = require('./restaurant').schema,
    environmentInfoSchema = require('./environmentInfo').schema,
    menuSchema = require('./menu').schema;

var openMenuSchema = new mongoose.Schema({
    omfUuid: String,
    omfUpdatedTimestamp: String,
    restaurantInfo: [restaurantSchema],
    environmentInfo: [environmentInfoSchema],
    menus: [menuSchema]
});

module.exports = mongoose.model('openMenu', openMenuSchema);
