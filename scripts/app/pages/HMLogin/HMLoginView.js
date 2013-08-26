define([
	"ember",
	"text!./HMLogin.hbs",
	"css!./HMLogin"
], function(Ember, Template) {
	var HMLoginView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMLoginView;
});

//App.HMLoginRoute = Ember.Route.extend({
//	setupController: function(controller, model) {
//		console.log('setupController LoginRoute');
////		console.log(controller);
////		console.log(model);
//	}
//});
//App.HMLoginController = Ember.ObjectController.extend({
//	soundVolume: 1
//});