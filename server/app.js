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
        size: String,
        price: Number,
        menuItem: String
    });

    var menuItemSchema = new mongoose.Schema({
        name: String,
        description: String,
        category: String,
        price: Number,
        sizes: [menuItemSizeSchema]
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

    app.get('/api/menu-item', function(req, res){
        return MenuItem.find(function(err, menuItems){
            if (!err) {
                return res.send(menuItems);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/menu-item', function(req, res){
        var menuItem = new MenuItem({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            sizes: req.body.sizes
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

    app.put('/api/menu-item/:id', function(req, res){
        return MenuItem.findById(req.params.id, function(err, menuItem){
            menuItem.name = req.body.name;
            menuItem.description = req.body.description;
            menuItem.category = req.body.category;
            menuItem.price = req.body.price;
            menuItem.sizes = req.body.sizes;
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

    app['delete']('/api/menu-item/:id', function(req, res){
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

    app.get('/api/menu-item-size', function(req, res){
        return MenuItemSize.find(function(err, menuItemSizes){
            if (!err) {
                return res.send(menuItemSizes);
            } else {
                return console.log(err);
            }
        });
    });

    app.post('/api/menu-item-size', function(req, res){
        var menuItemSize = new MenuItemSize({
            size: req.body.size,
            price: req.body.price,
            menuItem: req.body.menuItem
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

    app.put('/api/menu-item-size/:id', function(req, res){
        return MenuItemSize.findById(req.params.id, function(err, menuItemSize){
            menuItemSize.size = req.body.size;
            menuItemSize.price = req.body.price;
            menuItemSize.menuItem = req.body.menuItem;
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

    app['delete']('/api/menu-item-size/:id', function(req, res){
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


