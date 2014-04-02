var mongoose = require('mongoose'),
    restaurantSchema = require('./restaurant').schema,
    environmentInfoSchema = require('./environmentInfo').schema,
    menuSchema = require('./menu').schema;

var omfSchema = new mongoose.Schema({
    omfUuid: String,
    restaurantInfo: [restaurantSchema],
    environmentInfo: [environmentInfoSchema],
    menus: [menuSchema]
});

module.exports = mongoose.model('omf', omfSchema);
