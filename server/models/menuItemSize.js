var mongoose = require('mongoose');

var menuItemSizeSchema = new mongoose.Schema({
    menuItemSizeName: String,
    menuItemSizePrice: Number,
    menuItem: String
});

module.exports = mongoose.model('menuItemSize', menuItemSizeSchema);
