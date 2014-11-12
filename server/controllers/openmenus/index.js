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
    },
    create: function (req, res) {
        var openMenu = new OpenMenu(req.body);
        openMenu.save(function (err, model) {
            var restaurant = model.get('restaurant_info');
            var environment = model.get('environment');
            restaurant.open_menu = model.get('_id');
            environment.open_menu = model.get('_id');
            if (!err) {
                console.log('open menu created');
                return res.send(openMenu);
            } else {
                return console.log(err);
            }
        });
    }
});
