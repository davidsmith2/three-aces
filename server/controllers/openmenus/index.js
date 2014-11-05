var _ = require('underscore')._;
var OpenMenu = require('../../models/openMenu');
var controller = require('../_index.js')(OpenMenu);
var mongoose = require('mongoose');

module.exports = _.extend(controller, {
	index: function (req, res) {
		return OpenMenu
			.find({})
			.exec(function (err, openMenus) {
				if (!err) {
					return res.send(openMenus);
				} else {
					return console.log(err);
				}
			});
	},
	show: function (req, res) {
		var _id = mongoose.Types.ObjectId.fromString(req.params.openmenu);
		return OpenMenu
			.findById(_id)
			.exec(function (err, openMenu) {
				if (!err) {
					return res.send(openMenu);
				} else {
					return console.log(err);
				}
			});
	}
});
