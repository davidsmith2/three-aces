define([
    'jquery',
    'underscore',
	'app',
	'apps/private/apps/environment/views/show/header',
    'apps/private/apps/environment/views/show/definitionList'
],
function ($, _, App, HeaderView, DefinitionListView) {
	return function (openMenuId) {
        $.when(App.request('environment:entity', openMenuId)).done(function (environment) {
            var headerView,
                definitionListView;
            _.extend(environment.attributes, {title: 'Environment'});
            headerView = new HeaderView({model: environment});
            definitionListView = new DefinitionListView({model: environment});
            headerView.on('edit', function () {
                var openMenu = environment.get('open_menu');
                App.PrivateApp.EnvironmentApp.trigger('environment:edit', openMenu.get('_id'));
            });
            App.execute('panel:show', {
                region: App.environmentRegion,
                headingView: headerView,
                bodyView: definitionListView,
                callback: function (panel) {
                    panel.ui.heading.addClass('clearfix');
                    App.PrivateApp.EnvironmentApp.on('environment:save', definitionListView.render);
                }
            });
        });
	};
});
