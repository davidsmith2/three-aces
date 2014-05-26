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
        if (req.params.menugroup) {
            // get all menu items for a menu group
            return Model.where('menu_group').equals(req.params.menugroup).find(function (err, models) {
                sendResponse(err, models, res);
            });
        } else if (req.params.menu) {
            // get all menu items for a menu
            return Model.where('menu').equals(req.params.menu).find(function (err, models) {
                sendResponse(err, models, res);
            });
        } else if (req.params.openmenu) {
            // get all menu items for an open menu
            return Model.where('open_menu').equals(req.params.openmenu).find(function (err, models) {
                sendResponse(err, models, res);
            });
        }
        return Model.find(function (err, models) {
            sendResponse(err, models, res);
        });
    }
});