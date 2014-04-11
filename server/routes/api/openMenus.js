module.exports = function (app) {
    'use strict';

    var OpenMenu = require('../../models/openMenu');
    var Menu = require('../../models/menu');

    var getItem = function (req, res, key) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            if (!err) {
                if (key) {
                    return res.send(openMenu[key]);
                } else {
                    return res.send(openMenu);
                }
            } else {
                return console.log(err);
            }
        });
    };

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
        return getItem(req, res);
    };

    var createOpenMenu = function (req, res) {
        var openMenu = new OpenMenu(req.body);
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
        return getItem(req, res, 'restaurantInfo');
    };

    var createRestaurantInfo = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            for (var key in req.body) {
                openMenu.restaurantInfo[key] = req.body[key];
            }
            return openMenu.save(function (err) {
                if (!err) {
                    console.log('restaurant info created/updated');
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

    var getEnvironment = function (req, res) {
        return getItem(req, res, 'environment');
    };

    var createEnvironment = function (req, res) {
        return OpenMenu.findById(req.params.id, function (err, openMenu) {
            for (var key in req.body) {
                openMenu.environment[key] = req.body[key];
            }
            return openMenu.save(function (err) {
                if (!err) {
                    console.log('environment created/updated');
                } else {
                    console.log(err);
                }
                return res.send(openMenu);
            });
        });
    };

    var updateEnvironment = function (req, res) {
        return createEnvironment(req, res);
    };

    var getMenus = function (req, res) {
        return Menu.find(function (err, menu) {
            if (!err) {
                return res.send(menu);
            } else {
                return console.log(err);
            }
        });
    };

    var createMenu = function (req, res) {
        var menu = new Menu(req.body);
        menu.save(function (err) {
            if (!err) {
                return console.log('menu created');
            } else {
                return console.log(err);
            }
        });
        return res.send(menu);
    };

    // open menus
    app.get('/api/open-menus', getOpenMenus);
    app.get('/api/open-menus/:id', getOpenMenu);
    app.post('/api/open-menus', createOpenMenu);
    app.put('/api/open-menus/:id', updateOpenMenu);
    app['delete']('/api/open-menus/:id', deleteOpenMenu);

    // open menus > restaurant-info
    app.get('/api/open-menus/:id/restaurant-info', getRestaurantInfo);
    app.post('/api/open-menus/:id/restaurant-info', createRestaurantInfo);
    app.patch('/api/open-menus/:id/restaurant-info', updateRestaurantInfo);

    // open menus > environment
    app.get('/api/open-menus/:id/environment', getEnvironment);
    app.post('/api/open-menus/:id/environment', createEnvironment);
    app.patch('/api/open-menus/:id/environment', updateEnvironment);

    // open menus > menus
    app.get('/api/open-menus/:id/menus', getMenus);
    app.post('/api/open-menus/:id/menus', createMenu);

};