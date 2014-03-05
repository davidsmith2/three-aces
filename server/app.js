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
    var menuItemSchema = new mongoose.Schema({
        name: String,
        description: String,
        category: String,
        price: Number,
        sizeName: String,
        sizePrice: Number
    });

    /* models */
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
            sizeName: req.body.sizeName,
            sizePrice: req.body.sizePrice
        });
        menuItem.save(function(err){
            if (!err) {
                return console.log('post');
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
            menuItem.sizeName = req.body.sizeName;
            menuItem.sizePrice = req.body.sizePrice;
            return menuItem.save(function(err){
                if (!err) {
                    console.log('put');
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
                    console.log('delete');
                    return res.send('');
                } else {
                    console.log(err);
                }
            });
        });
    });

	// start server
	http.createServer(app).listen(app.get('port'), function(){
	    console.log('Express App started!');
	});
});


