var _ = require('underscore')._;
var MenuGroup = require('../../models/menuGroup');
var controller = require('../_index.js')(MenuGroup);

module.exports = _.extend(controller, {
    index: function (req, res) {
        return MenuGroup
        	.find({
            	menu: req.params.menu
        	})
            .exec(function (err, menuGroups) {
                if (!err) {
                    return res.send(menuGroups);
                } else {
                    return console.log(err);
                }
            });
    }
});
