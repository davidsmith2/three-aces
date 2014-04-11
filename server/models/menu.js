var mongoose = require('mongoose'),
    menuGroupSchema = require('./menuGroup').schema;

var menuSchema = new mongoose.Schema({
    currencySymbol: String,
    menuGroup: [menuGroupSchema],
    menuName: String,
    openMenu: String
});

module.exports = mongoose.model('menu', menuSchema);
