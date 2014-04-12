var Model = require('../../models/openMenu');

module.exports = {
    index: function (req, res) {
        return Model.find(function (err, models) {
            if (!err) {
                return res.send(models);
            } else {
                return console.log(err);
            }
        });
    },
    show: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            if (!err) {
                return res.send(model);
            } else {
                return console.log(err);
            }
        });
    },
    create: function (req, res) {
        var model = new Model(req.body);
        model.save(function (err) {
            if (!err) {
                return console.log('open menu created');
            } else {
                return console.log(err);
            }
        });
        return res.send(model);
    },
    destroy: function (req, res) {
        return Model.findById(req.params.openmenu, function (err, model) {
            return model.remove(function (err) {
                if (!err) {
                    console.log('open menu deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });

    }
};