var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var menuItemSizeSchema = require('./menuItemSize').schema;

var menuItemSchema = new Schema({
    menu_item_name: String,
    menu_item_description: String,
    menu_item_price: Number,
    menu_item_sizes: [menuItemSizeSchema],
    menu_group: String
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
