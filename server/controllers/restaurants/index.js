var _ = require('underscore')._;
var Restaurant = require('../../models/restaurant');
var controller = require('../_index.js')(Restaurant);

module.exports = _.extend(controller, {
    index: function (req, res) {
        return Restaurant
            .find({
            	open_menu: req.params.openmenu
            })
            .exec(function (err, restaurants) {
                if (!err) {
                    return res.send(restaurants);
                } else {
                    return console.log(err);
                }
            });
    }
});
