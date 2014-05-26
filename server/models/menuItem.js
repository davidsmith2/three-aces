var mongoose = require('mongoose'),
    menuItemSizeSchema = require('./menuItemSize').schema;

var menuItemSchema = new mongoose.Schema({
    menu_item_name: String,
    menu_item_description: String,
    menu_item_price: Number,
    menu_item_sizes: [menuItemSizeSchema],
    menu_group: String
});

module.exports = mongoose.model('menuItem', menuItemSchema);
