define([
	'app',
	'apps/private/apps/open_menus/show/views/layout',
	'apps/private/apps/open_menus/show/views/menus',
	'apps/private/apps/open_menus/show/views/panel',
	'apps/private/apps/open_menus/show/views/panel_button',
	'apps/private/common/views/form'
], function (App, LayoutView, MenusView, PanelView, PanelButtonView, FormView) {

	App.module('PrivateApp.OpenMenusApp.Show', function (Show, App, Backbone, Marionette, $) {

		Show.Controller = {
			show: function (openMenu) {
				$.when(App.request('menu:entities', openMenu)).done(function (menus) {
					var layoutView = new LayoutView();
					var restaurantView = new PanelView({
						model: openMenu.get('restaurant_info'),
						headingCallback: function ($el) {
							var panelButtonView = new PanelButtonView({
								model: this.model
							});
							panelButtonView.render();
							panelButtonView.on('edit', function (a) {
								console.log(a)
							});
							$el.append('<h3 class="panel-title pull-left">Restaurant</h3>');
							$el.addClass('clearfix').append(panelButtonView.el);
						},
						bodyCallback: function ($el, region) {
							var bodyView = new FormView({
				                model: this.model,
				                isReadOnly: true
				            });
				            region.show(bodyView);
						}
					});
					var environmentView = new PanelView({
						model: openMenu.get('environment'),
						triggers: {
							'click .js-edit': 'environment:edit'
						},
						headingCallback: function ($el) {
							var panelButtonView = new PanelButtonView({
								model: this.model
							});
							panelButtonView.render();
							panelButtonView.on('edit', function (a) {
								console.log(a)
							});
							$el.append('<h3 class="panel-title pull-left">Environment</h3>');
							$el.addClass('clearfix').append(panelButtonView.el);
						},
						bodyCallback: function ($el, region) {
				            var bodyView = new FormView({
				                model: this.model,
				                isReadOnly: true
				            });
				            region.show(bodyView);
						}
					});
					var menusView = new PanelView({
						collection: menus,
						headingCallback: function ($el) {
							$el.append('<h3 class="panel-title">Menus</h3>');
						},
						bodyCallback: function ($el, region) {
				            var bodyView = new MenusView({
				                collection: menus
				            });
				            region.show(bodyView);
						}
					});
					layoutView.on('show', function () {
						this.restaurantRegion.show(restaurantView);
						this.environmentRegion.show(environmentView);
						this.menusRegion.show(menusView);
					});
					App.mainRegion.show(layoutView);
				});
			}
		};
	});

	return App.PrivateApp.OpenMenusApp.Show.Controller;

});
