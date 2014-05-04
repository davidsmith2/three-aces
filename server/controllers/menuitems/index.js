var _ = require('underscore')._;
var Model = require('../../models/menuItem');
var controller = require('../generic/index.js')(Model);

var sendResponse = function (err, models, res) {
    if (!err) {
        return res.send(models);
    } else {
        return console.log(err);
    }
};

module.exports = _.extend(controller, {
    index: function (req, res) {
        if (!req.params.menugroup) {
            return Model.find(function (err, models) {
                sendResponse(err, models, res);
            });
        } else {
            return Model.where('menuGroup').equals(req.params.menugroup).find(function (err, models) {
                sendResponse(err, models, res);
            });
        }
    }
});