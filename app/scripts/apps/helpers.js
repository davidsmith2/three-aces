define([
    'backbone',
    'backbone.marionette'
], function (Backbone, Marionette) {
    return {
        showFilteredMenuItems: function () {
            MailApp.emailList.onReset(function(list){
                var filteredMail = list.forCategory(category);
                MailApp.MailBox.showMail(filteredMail);
            });
        }
    };
});