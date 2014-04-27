var _ = require('underscore')._;
var Model = require('../../models/menu');
var controller = require('../generic/index.js')(Model);

module.exports = _.extend(controller, {
    index: function (req, res) {
        return Model
            .where('openMenu')
            .equals(req.params.openmenu)
            .find(function (err, models) {
                if (!err) {
                    return res.send(models);
                } else {
                    return console.log(err);
                }
            });
    }
});