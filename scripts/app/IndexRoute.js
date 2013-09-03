define(["ember",'Gapi/GapiLogin'], function(Ember,GapiLogin){

var IndexRoute = Ember.Route.extend({
	redirect: function() {
//		//Login here?
//		console.log('IndexRoute redirect, authorized?');
//		GapiLogin.auth(true, function(authResult) {
//			console.log('IndexRoute authResult:');
//			console.log(authResult);
//			if (authResult && !authResult.error) {
//				console.log('OK!');
//				this.transitionTo('HowManys.default');
//			} else {
				console.log('KO!');
				this.transitionTo('Login');
//			}
//		});
		
		//Login in HowManys.default
//		this.transitionTo('HowManys.default');
		
//		if(!Ember.isNone(App.gapi) && !Ember.isNone(App.gapi.isAuthorized) && App.gapi.isAuthorized) {
//			App.log(App.gapi.isAuthorized);
//			this.transitionTo('HowManys.default');
//		} else {
//			App.log('goTo login');
//			this.transitionTo('Login');
//		}
//		console.log('require Login');
		
//		define('actualRouting',this);
//		require(['actualRouting',"pages/Login/LoginView"], function(actRouting,Login){
//			console.log('required Login OK! going to it!');
//			actRouting.transitionTo('Login');
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