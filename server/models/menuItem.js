var mongoose = require('mongoose'),
    menuItemSizeSchema = require('./menuItemSize').schema;

var menuItemSchema = new mongoose.Schema({
    menuItemName: String,
    menuItemDescription: String,
    menuItemPrice: Number,
    menuItemSizes: [menuItemSizeSchema],
    openMenu: String,
    menu: String,
    menuGroup: String
});

module.exports = mongoose.model('menuItem', menuItemSchema);
