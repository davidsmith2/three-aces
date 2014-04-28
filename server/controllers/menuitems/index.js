var _ = require('underscore')._;
var Model = require('../../models/menuItem');
var controller = require('../generic/index.js')(Model);

module.exports = _.extend(controller, {
    index: function (req, res) {
        return Model
            .where('menuGroup')
            .equals(req.params.menugroup)
            .find(function (err, models) {
                if (!err) {
                    return res.send(models);
                } else {
                    return console.log(err);
                }
            });
    }
});