module.exports = function (app) {
    'use strict';

    var OpenMenu = require('../../models/openMenu');

    app.get('/api/open-menus', function(req, res){
        return OpenMenu.find(function(err, openMenus){
            if (!err) {
                return res.send(openMenus);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/open-menus', function(req, res){
        var openMenu = new OpenMenu({
            omfUuid: req.body.omfUuid,
            omfUpdatedTimestamp: req.body.omfUpdatedTimestamp,
            restaurantInfo: req.body.restaurantInfo,
            environmentInfo: req.body.environmentInfo,
            menus: req.body.menus
        });
        openMenu.save(function(err){
            if (!err) {
                return console.log('open menu created');
            } else {
                return console.log(err);
            }
        });
        return res.send(openMenu);
    });

    app.put('/api/open-menus/:id', function(req, res){
        return OpenMenu.findById(req.params.id, function(err, openMenu){
            openMenu.omfUuid = req.body.omfUuid;
            openMenu.omfUpdatedTimestamp = req.body.omfUpdatedTimestamp;
            openMenu.restaurantInfo = req.body.restaurantInfo;
            openMenu.environmentInfo = req.body.environmentInfo;
            openMenu.menus = req.body.menus;
            return openMenu.save(function(err){
                if (!err) {
                    console.log('open menu updated');
                } else {
                    console.log(err);
                }
                return res.send(openMenu);
            });
        });
    });

    app['delete']('/api/open-menus/:id', function(req, res){
        return OpenMenu.findById(req.params.id, function(err, openMenu){
            return openMenu.remove(function(err){
                if (!err) {
                    console.log('open menu deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });

};