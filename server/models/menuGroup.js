var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var menuItemSchema = require('./menuItem').schema;

var menuGroupSchema = new Schema({
    group_name: String,
    group_uid: String,
    menu_items: [menuItemSchema],
    menu: String
});

module.exports = mongoose.model('MenuGroup', menuGroupSchema);
