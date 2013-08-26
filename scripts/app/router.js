define(["ember"], function(Ember){
//	var Router = Ember.Router.extend({
//	  root: Ember.Route.extend({
//	    index: Ember.Route.extend({
//	      route: '/'
//	    })
//	  })
//	});
var Router = Ember.Router.extend({});
Router.map(function() {
//	this.route('helloWorld', {path: '/'});
	this.resource('HMListTags', function() {
		this.route('default', { path: '/' });
		this.route('bigIcons');
		this.route('windRose');
		this.route('users');
		this.route('history');
	});
	this.route('HMList');
	this.route('HMView');
	this.route('HMCRUD');
	this.route('HMDone');
	this.route('HMLogin');
});

//App.Router.map(function() {
////	this.route('helloWorld', {path: '/'});
//	this.resource('HMListTags', function() {
//		this.route('default', { path: '/' });
//		this.route('bigIcons');
//		this.route('windRose');
//		this.route('users');
//		this.route('history');
//	});
//	this.route('HMList');
//	this.route('HMView');
//	this.route('HMCRUD');
//	this.route('HMDone');
//	this.route('login');
//});

//App.IndexRoute = Ember.Route.extend({
//	redirect: function() {
//		App.log('IndexRoute redirect, authorized?');
////		if(!Ember.isNone(App.gapi) && !Ember.isNone(App.gapi.isAuthorized) && App.gapi.isAuthorized) {
////			App.log(App.gapi.isAuthorized);
////			this.transitionTo('HMList');
////		} else {
////			App.log('goTo login');
//			this.transitionTo('login');
////		}
//	}
////	init: function() {this._super();},			//called when objects are instantiated
////	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
////	setupController: function(controller, model) {},
////	afterModel: function(posts, transition) {},
////	beforeModel: function(transition) {},
////	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
////	deactivate: function() {},
//});

	return Router;
});
