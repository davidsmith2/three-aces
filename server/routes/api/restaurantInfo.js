module.exports = function (app) {
    'use strict';

    var OpenMenu = require('../../models/openMenu');

    var getRestaurantInfo = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            if (!err) {
                return res.send(openMenu.restaurantInfo);
            } else {
                return console.log(err);
            }
        });
    };

    var createRestaurantInfo = function (req, res) {
        OpenMenu.findById(req.params.id, function (err, openMenu) {
            openMenu.restaurantInfo = {
                restaurantName: req.body.restaurantName,
                address1: req.body.address1,
                cityTown: req.body.cityTown,
                stateProvince: req.body.stateProvince,
                postalCode: req.body.postalCode,
                country: req.body.country,
                phone: req.body.phone,
                fax: req.body.fax,
                openMenu: req.body.openMenu
            };
            openMenu.save(function (err) {
                if (!err) {
                    return console.log('restaurant info created');
                } else {
                    return console.log(err);
                }
            });
            return res.send(openMenu.restaurantInfo);
        });
    };

    var updateRestaurantInfo = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            for (var key in req.body) {
                openMenu.restaurantInfo[key] = req.body[key];
            }
            return openMenu.save(function (err) {
                if (!err) {
                    console.log('restaurant info updated');
                } else {
                    console.log(err);
                }
                return res.send(openMenu.restaurantInfo);
            });
        });
    };

    app.get('/api/open-menus/:id/restaurant-info', getRestaurantInfo);
    app.put('/api/open-menus/:id/restaurant-info', createRestaurantInfo);
    app.patch('/api/open-menus/:id/restaurant-info', updateRestaurantInfo);

};