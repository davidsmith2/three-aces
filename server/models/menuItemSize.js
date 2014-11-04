var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var menuItemSizeSchema = new Schema({
    menu_item_size_name: String,
    menu_item_size_price: Number,
    menu_item: String
});

module.exports = mongoose.model('MenuItemSize', menuItemSizeSchema);
