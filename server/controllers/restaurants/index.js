var OpenMenu = require('../../models/openMenu');

module.exports = {
	options: {
		name: 'restaurant'
	},
	index: function (req, res) {
		return OpenMenu
			.findById(req.params.openmenu)
			.exec(function (err, openMenu) {
				if (!err) {
					return res.send(openMenu.get('restaurant_info'));
				} else {
					return console.log(err);
				}
			});
	},
	create: function (req, res) {
		return OpenMenu
			.findById(req.params.openmenu)
			.exec(function (err, openMenu) {
				for (var key in req.body) {
					openMenu.restaurant_info[key] = req.body[key];
				}
				return openMenu.save(function (err) {
					if (!err) {
						console.log('restaurant info modified');
					} else {
						console.log(err);
					}
					return res.send(openMenu.restaurant_info);
				});
			});
	}
};
