var Model = require('../../models/openMenu');

module.exports = {
    options: {
        name: 'restaurant'
    },
    index: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            if (!err) {
                return res.send(model.get('restaurantInfo'));
            } else {
                return console.log(err);
            }
        });
    },
    create: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            console.log(req.body)
            for (var key in req.body) {
                model.restaurantInfo[key] = req.body[key];
            }
            return model.save(function (err) {
                if (!err) {
                    console.log('restaurant info modified');
                } else {
                    console.log(err);
                }
                return res.send(model.restaurantInfo);
            });
        });
    }
};