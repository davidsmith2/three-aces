var mongoose = require('mongoose'),
    menuItemSizeSchema = require('./menuItemSize').schema;

var menuItemSchema = new mongoose.Schema({
    menuGroup: String,
    menuItemName: String,
    menuItemDescription: String,
    menuItemPrice: Number,
    menuItemSizes: [menuItemSizeSchema]
});

module.exports = mongoose.model('menuItem', menuItemSchema);
