define(["ember"], function(Ember){

var IndexRoute = Ember.Route.extend({
	redirect: function() {
		console.log('IndexRoute redirect, authorized?');
//		if(!Ember.isNone(App.gapi) && !Ember.isNone(App.gapi.isAuthorized) && App.gapi.isAuthorized) {
//			App.log(App.gapi.isAuthorized);
//			this.transitionTo('HMList');
//		} else {
//			App.log('goTo login');
			this.transitionTo('HMLogin');
//		}
//		console.log('require HMLogin');
		
//		define('actualRouting',this);
//		require(['actualRouting',"pages/HMLogin/HMLoginView"], function(actRouting,HMLogin){
//			console.log('required HMLogin OK! going to it!');
//			actRouting.transitionTo('HMLogin');
//		});
//		console.log('mec?');
	}
//	https://groups.google.com/forum/#!msg/requirejs/QWkw1GGQMl8/odZk79qE6-IJ
//	init: function() {this._super();},			//called when objects are instantiated
//	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
//	setupController: function(controller, model) {},
//	afterModel: function(posts, transition) {},
//	beforeModel: function(transition) {},
//	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
//	deactivate: function() {},
});

	return IndexRoute;
});
