var _ = require('underscore')._;
var Menu = require('../../models/menu');
var controller = require('../_index.js')(Menu);

module.exports = _.extend(controller, {
    index: function (req, res) {
        if (req.params.openmenu) {
            return Menu.find({open_menu: req.params.openmenu}).exec(function (err, menus) {
                if (!err) {
                    return res.send(menus);
                } else {
                    return console.log(err);
                }
            });
        } else {
            return Menu.find(function (err, menus) {
                if (!err) {
                    return res.send(menus);
                } else {
                    return console.log(err);
                }
            });
        }
    },
    show: function (req, res) {
        console.log(req.params)
/*
        return Model.findById(req.params[modelName], function (err, model) {
            if (!err) {
                return res.send(model);
            } else {
                return console.log(err);
            }
        });
*/
    },
    create: function (req, res) {
        var menu = new Menu(req.body);
        menu.open_menu = req.params.openmenu;
        menu.save(function (err, model) {
            if (!err) {
                console.log('menu created');
                return res.send(menu);
            } else {
                return console.log(err);
            }
        });
    }
});
