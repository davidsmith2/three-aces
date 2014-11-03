define([
    'backbone',
    'backbone.marionette'
], function (Backbone, Marionette) {

    var App = new Marionette.Application();

    App.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region',
        dialogRegion: '#dialog-region'
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

    App.on('start', function () {
        console.log('the app has started');
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
