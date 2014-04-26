var mongoose = require('mongoose'),
    menuItemSchema = require('./menuItem').schema;

var menuGroupSchema = new mongoose.Schema({
    groupName: String,
    groupUid: String,
    menuItems: [menuItemSchema],
    openMenu: String
});

module.exports = mongoose.model('menuGroup', menuGroupSchema);
