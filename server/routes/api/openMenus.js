module.exports = function (app) {
    'use strict';

    var OpenMenu = require('../../models/openMenu');

    var getOpenMenus = function (req, res) {
        return OpenMenu.find(function (err, openMenus) {
            if (!err) {
                return res.send(openMenus);
            } else {
                return console.log(err);
            }
        });
    };

    var getOpenMenu = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            if (!err) {
                return res.send(openMenu);
            } else {
                return console.log(err);
            }
        });

    };

    var createOpenMenu = function (req, res) {
        var openMenu = new OpenMenu({
            omfUuid: req.body.omfUuid,
            omfUpdatedTimestamp: req.body.omfUpdatedTimestamp
        });
        openMenu.save(function (err) {
            if (!err) {
                return console.log('open menu created');
            } else {
                return console.log(err);
            }
        });
        return res.send(openMenu);
    };

    var updateOpenMenu = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            for (var key in req.body) {
                openMenu[key] = req.body[key];
            }
            return openMenu.save(function (err) {
                if (!err) {
                    console.log('open menu updated');
                } else {
                    console.log(err);
                }
                return res.send(openMenu);
            });
        });
    };

    var deleteOpenMenu = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            return openMenu.remove(function (err) {
                if (!err) {
                    console.log('open menu deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    };

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
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            for (var key in req.body) {
                openMenu.restaurantInfo[key] = req.body[key];
            }
            return openMenu.save(function (err) {
                if (!err) {
                    console.log('open menu updated');
                } else {
                    console.log(err);
                }
                return res.send(openMenu);
            });
        });
    };

    var updateRestaurantInfo = function (req, res) {
        return createRestaurantInfo(req, res);
    };

    app.get('/api/open-menus', getOpenMenus);
    app.get('/api/open-menus/:id', getOpenMenu);
    app.post('/api/open-menus', createOpenMenu);
    app.put('/api/open-menus/:id', updateOpenMenu);
    app['delete']('/api/open-menus/:id', deleteOpenMenu);
    app.get('/api/open-menus/:id/restaurant-info', getRestaurantInfo);
    app.post('/api/open-menus/:id/restaurant-info', createRestaurantInfo);
    app.patch('/api/open-menus/:id/restaurant-info', updateRestaurantInfo);

};