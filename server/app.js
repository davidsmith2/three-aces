'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var mongoose = require('mongoose');
require('express-resource-new');

// start mongoose
mongoose.connect('mongodb://localhost/three-aces');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

	var app = express();

	app.configure(function(){
	    app.set('port', 9000);
	    app.set('view engine', 'handlebars');
	    app.set('views', __dirname + '../app/scripts/views');
        app.set('controllers', __dirname + '/controllers');
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

    app.get('/api', function(req, res){
        res.send('API is running');
    });





    // routes
    app.resource('openmenus', function () {
        this.resource('restaurants');
        this.resource('environments');
        this.resource('menus', function () {
            this.resource('menugroups', function () {
                this.resource('menuitems');
            });
            this.resource('menuitems');
        });
        this.resource('menuitems');
    });
    app.resource('menuitems');





	// start server
	http.createServer(app).listen(app.get('port'), function(){
	    console.log('Express App started!');
	});
});
