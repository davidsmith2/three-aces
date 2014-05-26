var mongoose = require('mongoose'),
    menuGroupSchema = require('./menuGroup').schema;

var menuSchema = new mongoose.Schema({
    menu_name: String,
    currency_symbol: String,
    menu_groups: [menuGroupSchema],
    open_menu: String
});

module.exports = mongoose.model('menu', menuSchema);
