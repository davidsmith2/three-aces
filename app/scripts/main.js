require([
    'jquery',
    'app'
], function ($, App) {
    'use strict';
    $.ajaxSetup({ cache: false });
    $(function () {
        App.start();
    });
});