module.exports = function (app) {
    'use strict';

    var Omf = require('../../models/omf');

    app.get('/api/omfs', function(req, res){
        return Omf.find(function(err, omfs){
            if (!err) {
                return res.send(omfs);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/omfs', function(req, res){
        var omf = new Omf({
            omfUuid: req.body.omfUuid,
            restaurantInfo: req.body.restaurantInfo,
            environmentInfo: req.body.environmentInfo,
            menus: req.body.menus
        });
        omf.save(function(err){
            if (!err) {
                return console.log('omf created');
            } else {
                return console.log(err);
            }
        });
        return res.send(omf);
    });

    app.put('/api/omfs/:id', function(req, res){
        return Omf.findById(req.params.id, function(err, omf){
            omf.omfUuid = req.body.omfUuid;
            omf.restaurantInfo = req.body.restaurantInfo;
            omf.environmentInfo = req.body.environmentInfo;
            omf.menus = req.body.menus;
            return omf.save(function(err){
                if (!err) {
                    console.log('omf updated');
                } else {
                    console.log(err);
                }
                return res.send(omf);
            });
        });
    });

    app['delete']('/api/omfs/:id', function(req, res){
        return Omf.findById(req.params.id, function(err, omf){
            return omf.remove(function(err){
                if (!err) {
                    console.log('omf deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });

};