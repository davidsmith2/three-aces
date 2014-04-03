module.exports = function (app) {
    'use strict';

    var Restaurant = require('../../models/restaurant');

    app.get('/api/restaurants', function(req, res){
        return Restaurant.find(function(err, restaurants){
            if (!err) {
                return res.send(restaurants);
            } else {
                return console.log(err);
            }
        });
    });

    app.get('/api/restaurants/:id', function(req, res){
        return Restaurant.findById(req.params.id, function(err, restaurant){
            if (!err) {
                return res.send(restaurant);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/restaurants', function(req, res){
        var restaurant = new Restaurant({
            restaurantName: req.body.restaurantName,
            address1: req.body.address1,
            cityTown: req.body.cityTown,
            stateProvince: req.body.stateProvince,
            postalCode: req.body.postalCode,
            country: req.body.country,
            phone: req.body.phone,
            fax: req.body.fax,
            openMenu: req.body.openMenu
        });
        restaurant.save(function(err){
            if (!err) {
                return console.log('restaurant created');
            } else {
                return console.log(err);
            }
        });
        return res.send(restaurant);
    });

    app.put('/api/restaurants/:id', function(req, res){
        return Restaurant.findById(req.params.id, function(err, restaurant){
            restaurant.restaurantName = req.body.restaurantName;
            restaurant.address1 = req.body.address1;
            restaurant.cityTown = req.body.cityTown;
            restaurant.stateProvince = req.body.stateProvince;
            restaurant.postalCode = req.body.postalCode;
            restaurant.country = req.body.country;
            restaurant.phone = req.body.phone;
            restaurant.fax = req.body.fax;
            restaurant.openMenu = req.body.openMenu;
            return restaurant.save(function(err){
                if (!err) {
                    console.log('restaurant updated');
                } else {
                    console.log(err);
                }
                return res.send(restaurant);
            });
        });
    });

    app.patch('/api/restaurants/:id', function(req, res){
        return Restaurant.findById(req.params.id, function(err, restaurant){
            for (var key in req.body) {
                restaurant[key] = req.body[key];
            }
            return restaurant.save(function(err){
                if (!err) {
                    console.log('restaurant updated');
                } else {
                    console.log(err);
                }
                return res.send(restaurant);
            });
        });
    });

    app['delete']('/api/restaurants/:id', function(req, res){
        return Restaurant.findById(req.params.id, function(err, restaurant){
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

};