define([
    'backbone',
    'backbone.marionette',
    'jquery',
    'underscore'
], function (Backbone, Marionette, $, _) {
    'use strict';
    var AppRouter = Backbone.Marionette.AppRouter.extend();
    return AppRouter;
});
