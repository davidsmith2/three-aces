var _ = require('underscore')._;
var MenuGroup = require('../../models/menuGroup');
var controller = require('../_index.js')(MenuGroup);

module.exports = _.extend(controller, {
    index: function (req, res) {
        return MenuGroup.find(function (err, menuGroups) {
            if (!err) {
                return res.send(menuGroups);
            } else {
                return console.log(err);
            }
        });
    }
});
