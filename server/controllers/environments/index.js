var OpenMenu = require('../../models/openMenu');

module.exports = {
	options: {
		name: 'environment'
	},
    index: function (req, res) {
		return OpenMenu
			.findById(req.params.openmenu)
			.exec(function (err, openMenu) {
				if (!err) {
					return res.send(openMenu.get('environment'));
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
					openMenu.environment[key] = req.body[key];
				}
				return openMenu.save(function (err) {
					if (!err) {
						console.log('environment modified');
					} else {
						console.log(err);
					}
					return res.send(openMenu.environment);
				});
			});
	}
};
