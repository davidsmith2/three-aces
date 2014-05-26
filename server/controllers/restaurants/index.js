var Model = require('../../models/openMenu');

module.exports = {
    options: {
        name: 'restaurant'
    },
    index: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            if (!err) {
                return res.send(model.get('restaurant_info'));
            } else {
                return console.log(err);
            }
        });
    },
    create: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            for (var key in req.body) {
                model.restaurant_info[key] = req.body[key];
            }
            return model.save(function (err) {
                if (!err) {
                    console.log('restaurant info modified');
                } else {
                    console.log(err);
                }
                return res.send(model.restaurant_info);
            });
        });
    }
};