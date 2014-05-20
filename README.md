# Three Aces

## API

| HTTP verb | URL
| --------- | ---
| GET       | /openmenus
| POST      | /openmenus
| GET       | /openmenus/:open_menu
| PUT       | /openmenus/:open_menu
| DELETE    | /openmenus/:open_menu
| GET       | /openmenus/:open_menu/restaurant
| POST      | /openmenus/:open_menu/restaurant
| GET       | /openmenus/:open_menu/environment
| POST      | /openmenus/:open_menu/environment
| GET       | /openmenus/:open_menu/menus
| POST      | /openmenus/:open_menu/menus
| GET       | /openmenus/:open_menu/menus/:menu
| PATCH     | /openmenus/:open_menu/menus/:menu
| DELETE    | /openmenus/:open_menu/menus/:menu

## Selected dependencies

### Client-side

* backbone - for basic models, views, etc. backbone.marionette builds on this.
* backbone-forms - for generating HTML forms from Backbone models
* backbone.marionette - for modules, controllers, views, etc.
* backbone-relational - for keeping nested client-side models in sync
* handlebars - for templating
* requirejs - for asynchronous loading of client-side JavaScript

### Server-side

* express - for Node.js integration
* express-resource-new - for Rails-like server-side controllers
* mongodb - for data persistence
* mongoose - for server-side object modelling
