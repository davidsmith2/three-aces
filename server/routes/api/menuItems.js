module.exports = function (app) {
    'use strict';

    var MenuItem = require('../../models/menuItem');

    app.get('/api/menu-items', function(req, res){
        return MenuItem.find(function(err, menuItems){
            if (!err) {
                return res.send(menuItems);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/menu-items', function(req, res){
        var menuItem = new MenuItem({
            menuItemName: req.body.menuItemName,
            menuItemDescription: req.body.menuItemDescription,
            menuItemCategory: req.body.menuItemCategory,
            menuItemPrice: req.body.menuItemPrice,
            menuItemSizes: req.body.menuItemSizes,
            itemUid: req.body.itemUid
        });
        menuItem.save(function(err){
            if (!err) {
                return console.log('menu item created');
            } else {
                return console.log(err);
            }
        });
        return res.send(menuItem);
    });

    app.put('/api/menu-items/:id', function(req, res){
        return MenuItem.findById(req.params.id, function(err, menuItem){
            menuItem.menuItemName = req.body.menuItemName;
            menuItem.menuItemDescription = req.body.menuItemDescription;
            menuItem.menuItemCategory = req.body.menuItemCategory;
            menuItem.menuItemPrice = req.body.menuItemPrice;
            menuItem.menuItemSizes = req.body.menuItemSizes;
            menuItem.itemUid = req.body.itemUid;
            return menuItem.save(function(err){
                if (!err) {
                    console.log('menu item updated');
                } else {
                    console.log(err);
                }
                return res.send(menuItem);
            });
        });
    });

    app['delete']('/api/menu-items/:id', function(req, res){
        return MenuItem.findById(req.params.id, function(err, menuItem){
            return menuItem.remove(function(err){
                if (!err) {
                    console.log('menu item deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });

};