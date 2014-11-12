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
    }
});
