var mongoose = require('mongoose');

var menuItemSizeSchema = new mongoose.Schema({
    menu_item_size_name: String,
    menu_item_size_price: Number,
    menu_item: String
});

module.exports = mongoose.model('menuItemSize', menuItemSizeSchema);
