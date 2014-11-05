var _ = require('underscore')._;
var Environment = require('../../models/environment');
var controller = require('../_index.js')(Environment);

module.exports = _.extend(controller, {
	options: {
		name: 'environment'
	},
    index: function (req, res) {
        return Environment
            .find({
            	open_menu: req.params.openmenu
            })
            .exec(function (err, environments) {
                if (!err) {
                    return res.send(environments);
                } else {
                    return console.log(err);
                }
            });
    }
});
