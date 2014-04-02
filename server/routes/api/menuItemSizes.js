module.exports = function (app) {
    'use strict';

    var MenuItemSize = require('../../models/menuItemSize');

    app.get('/api/menu-item-sizes', function(req, res){
        return MenuItemSize.find(function(err, menuItemSizes){
            if (!err) {
                return res.send(menuItemSizes);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/menu-item-sizes', function(req, res){
        var menuItemSize = new MenuItemSize({
            menuItem: req.body.menuItem,
            menuItemSizeName: req.body.menuItemSizeName,
            menuItemSizePrice: req.body.menuItemSizePrice
        });
        menuItemSize.save(function(err){
            if (!err) {
                return console.log('menu item size created');
            } else {
                return console.log(err);
            }
        });
        return res.send(menuItemSize);
    });

    app.put('/api/menu-item-sizes/:id', function(req, res){
        return MenuItemSize.findById(req.params.id, function(err, menuItemSize){
            menuItemSize.menuItem = req.body.menuItem;
            menuItemSize.menuItemSizeName = req.body.menuItemSizeName;
            menuItemSize.menuItemSizePrice = req.body.menuItemSizePrice;
            return menuItemSize.save(function(err){
                if (!err) {
                    console.log('menu item size updated');
                } else {
                    console.log(err);
                }
                return res.send(menuItemSize);
            });
        });
    });

    app['delete']('/api/menu-item-sizes/:id', function(req, res){
        return MenuItemSize.findById(req.params.id, function(err, menuItemSize){
            return menuItemSize.remove(function(err){
                if (!err) {
                    console.log('menu item size deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });

};