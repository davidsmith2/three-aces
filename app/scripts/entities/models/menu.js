define([
    'backbone',
    'underscore',
    'backbone-relational',
    'backbone-forms'
], function (Backbone, _) {
    'use strict';

    var SubmitButtonTmpl = _.template('<input class="btn btn-primary" type="submit" value="Done" />');

    var Menu = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        defaults: {
            currencySymbol: '',
            menuName: '',
            menuGroups: []
        },
        schema: {
            menuName: {
                type: 'Text',
                title: 'Name'
            },
            currencySymbol: {
                type: 'Text',
                title: 'Currency Symbol'
            },
            submitButton: {
                template: SubmitButtonTmpl
            }
        }
    });
    return Menu;
});