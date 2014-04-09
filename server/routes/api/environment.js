module.exports = function (app) {
    'use strict';

    var Environment = require('../../models/environment');

    app.get('/api/open-menus/:id/environment', function(req, res){
        return Environment.findOne(req.params.id, function(err, environment){
            if (!err) {
                return res.send(environment);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/open-menus/:id/environment', function(req, res){
        var environment = new Environment({
            takeoutAvailable: req.body.takeoutAvailable,
            openMenu: req.body.openMenu
        });
        environment.save(function(err){
            if (!err) {
                return console.log('environment created');
            } else {
                return console.log(err);
            }
        });
        return res.send(environment);
    });

    app.patch('/api/open-menus/:id/environment', function(req, res){
        return Environment.findOne(req.params.id, function(err, environment){
            for (var key in req.body) {
                environment[key] = req.body[key];
            }
            return environment.save(function(err){
                if (!err) {
                    console.log('environment updated');
                } else {
                    console.log(err);
                }
                return res.send(environment);
            });
        });
    });

/*
    app['delete']('/api/open-menus/:id/restaurant', function(req, res){
        return Restaurant.findOneAndRemove(function(err, restaurant){
            return restaurant.remove(function(err){
                if (!err) {
                    console.log('restaurant deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });
*/

};