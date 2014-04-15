define([
    'backbone',
    'underscore',
    'backbone-relational',
    'backbone-forms'
], function (Backbone, _) {
    'use strict';

    var SubmitButtonTmpl = _.template('<input class="btn btn-primary" type="submit" value="Done" />');

    var Environment = Backbone.RelationalModel.extend({
        idAttribute: '_id',
        url: function () {
            return '/openmenus/' + this.get('openMenu').get('_id') + '/environment';
        },
        defaults: {
            takeoutAvailable: false
        },
        schema: {
            takeoutAvailable: {
                type: 'Checkbox',
                title: 'Takeout available?'
            },
            submitButton: {
                template: SubmitButtonTmpl
            }
        }
    });
    return Environment;
});