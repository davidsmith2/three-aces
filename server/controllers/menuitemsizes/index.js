var _ = require('underscore')._;
var MenuItemSize = require('../../models/menuItemSize');
var controller = require('../_index.js')(MenuItemSize);

module.exports = _.extend(controller, {
	index: function (req, res) {
		return MenuItemSize.find(function (err, menuItemSizes) {
			if (!err) {
				return res.send(menuItemSizes);
			} else {
				return console.log(err);
			}
		});
	}
});
