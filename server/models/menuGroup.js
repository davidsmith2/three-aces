var mongoose = require('mongoose'),
    menuItemSchema = require('./menuItem').schema;

var menuGroupSchema = new mongoose.Schema({
    group_name: String,
    group_uid: String,
    menu_items: [menuItemSchema],
    menu: String
});

module.exports = mongoose.model('menuGroup', menuGroupSchema);
