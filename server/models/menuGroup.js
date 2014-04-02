var mongoose = require('mongoose'),
    menuItemSchema = require('./menuItem').schema;

var menuGroupSchema = new mongoose.Schema({
    groupName: String,
    groupUid: String,
    menuItems: [menuItemSchema]
});

module.exports = mongoose.model('menuGroup', menuGroupSchema);
