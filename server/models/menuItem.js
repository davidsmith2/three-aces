var mongoose = require('mongoose'),
    menuItemSizeSchema = require('./menuItemSize').schema;

var menuItemSchema = new mongoose.Schema({
    menuItemName: String,
    menuItemDescription: String,
    menuItemPrice: Number,
    menuItemSizes: [menuItemSizeSchema],
    itemUid: ''
});

module.exports = mongoose.model('menuItem', menuItemSchema);
