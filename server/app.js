'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');

var mongoose = require('mongoose');


// start mongoose
mongoose.connect('mongodb://localhost/three-aces');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	/* schemas */
    var menuItemSizeSchema = new mongoose.Schema({
        menuItemSizeName: String,
        menuItemSizePrice: Number,
        menuItem: String
    });

    var menuItemSchema = new mongoose.Schema({
        menuItemName: String,
        menuItemDescription: String,
        menuItemCategory: String,
        menuItemPrice: Number,
        menuItemSizes: [menuItemSizeSchema],
        itemUid: ''
    });

    /* models */
    var MenuItemSize = mongoose.model( 'menuItemSize', menuItemSizeSchema );
    var MenuItem = mongoose.model( 'menuItem', menuItemSchema );

	var app = express();

	app.configure(function(){
	    app.set('port', 9000);
	    app.set('view engine', 'handlebars');
	    app.set('views', __dirname + '../app/scripts/views');
        app.use(express.bodyParser());
	});

	// simple log
	app.use(function(req, res, next){
        console.log('%s %s', req.method, req.url);
        next();
	});

	// mount static
	app.use(express.static( path.join( __dirname, '../app') ));
	app.use(express.static( path.join( __dirname, '../.tmp') ));


	// route index.html
	app.get('/', function(req, res){
        res.sendfile( path.join( __dirname, '../app/index.html' ) );
	});

    // api
    app.get('/api', function(req, res){
        res.send( 'api is running' );
    });

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

	// start server
	http.createServer(app).listen(app.get('port'), function(){
	    console.log('Express App started!');
	});
});
