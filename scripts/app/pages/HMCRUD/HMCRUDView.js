define(["ember","text!./HMCRUD.hbs"], function(Ember,Template) {
	var HMCRUDView = Ember.View.extend({
//		templateName: 'HMCRUD',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMCRUDView;
});

//App.HMCRUDRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMViewRoute activate');
//	}
//	init: function() {this._super();},			//called when objects are instantiated
//	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
//	setupController: function(controller, model) {},
//	afterModel: function(posts, transition) {},
//	beforeModel: function(transition) {},
//	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
//	deactivate: function() {},
//});