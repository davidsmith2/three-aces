var Model = require('../../models/openMenu');

module.exports = {
    options: {
        name: 'environment'
    },
    index: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            if (!err) {
                return res.send(model.get('environment'));
            } else {
                return console.log(err);
            }
        });
    },
    create: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            for (var key in req.body) {
                model.environment[key] = req.body[key];
            }
            return model.save(function (err) {
                if (!err) {
                    console.log('environment modified');
                } else {
                    console.log(err);
                }
                return res.send(model.environment);
            });
        });
    }
};