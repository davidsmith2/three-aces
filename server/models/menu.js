var mongoose = require('mongoose'),
    menuGroupSchema = require('./menuGroup').schema;

var menuSchema = new mongoose.Schema({
    menuName: String,
    menuUid: String,
    menuGroups: [menuGroupSchema]
});

module.exports = mongoose.model('menu', menuSchema);
