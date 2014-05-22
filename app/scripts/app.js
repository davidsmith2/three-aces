define([
    'backbone',
    'backbone.marionette',
    'apps/config/marionette/regions/dialog'
], function (Backbone, Marionette) {

    var App = new Marionette.Application();

    App.on('initialize:after', function () {
        console.log('the app has started');
    });

    App.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region',
        dialogRegion: Marionette.Region.Dialog.extend({
            el: '#dialog-region'
        })
    });

    App.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function () {
        return Backbone.history.fragment;
    };

    App.startSubApp = function (appName, args) {
        var currentApp = (appName) ? App.module(appName) : null;
        if (App.currentApp === currentApp) {
            return;
        }
        if (App.currentApp) {
            App.currentApp.stop();
        }
        App.currentApp = currentApp;
        if (currentApp) {
            currentApp.start(args);
        }
    };

    App.on('initialize:after', function () {
        if (Backbone.history) {
            require([
                'apps/private/private_app'
            ], function (PrivateApp) {
                Backbone.history.start();
                PrivateApp.start();
            });
        }
    });

    return App;

});