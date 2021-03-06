var _ = require('underscore')._;
var MenuItem = require('../../models/menuItem');
var controller = require('../_index.js')(MenuItem);

module.exports = _.extend(controller, {
	index: function (req, res) {
		return MenuItem.find(function (err, menuItems) {
			if (!err) {
				return res.send(menuItems);
			} else {
				return console.log(err);
			}
		});
	}
});
