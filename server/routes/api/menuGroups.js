module.exports = function (app) {
    'use strict';

    var MenuGroup = require('../../models/menuGroup');

    app.get('/api/menu-groups', function(req, res){
        return MenuGroup.find(function(err, menuGroups){
            if (!err) {
                return res.send(menuGroups);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/menu-groups', function(req, res){
        var menuGroup = new MenuGroup({
            groupName: req.body.groupName,
            groupUid: req.body.groupUid,
            menuItems: req.body.menuItems
        });
        menuGroup.save(function(err){
            if (!err) {
                return console.log('menu group created');
            } else {
                return console.log(err);
            }
        });
        return res.send(menuGroup);
    });

    app.put('/api/menu-groups/:id', function(req, res){
        return MenuGroup.findById(req.params.id, function(err, menuGroup){
            menuGroup.groupName = req.body.groupName;
            menuGroup.groupUid = req.body.groupUid;
            menuGroup.menuItems = req.body.menuItems;
            return menuGroup.save(function(err){
                if (!err) {
                    console.log('menu group updated');
                } else {
                    console.log(err);
                }
                return res.send(menuGroup);
            });
        });
    });

    app['delete']('/api/menu-groups/:id', function(req, res){
        return MenuGroup.findById(req.params.id, function(err, menuGroup){
            return menuGroup.remove(function(err){
                if (!err) {
                    console.log('menu group deleted');
                    return res.send('');
                } else {
                    return console.log(err);
                }
            });
        });
    });

};