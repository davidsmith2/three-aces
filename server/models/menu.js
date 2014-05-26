var mongoose = require('mongoose'),
    menuGroupSchema = require('./menuGroup').schema;

var menuSchema = new mongoose.Schema({
    currency_symbol: String,
    menu_group: [menuGroupSchema],
    menu_name: String,
    open_menu: String
});

module.exports = mongoose.model('menu', menuSchema);
