var mongoose = require('mongoose'),
    menuItemSchema = require('./menuItem').schema;

var menuGroupSchema = new mongoose.Schema({
    group_name: String,
    group_uid: String,
    menu: String,
    menu_items: [menuItemSchema]
});

module.exports = mongoose.model('menuGroup', menuGroupSchema);
