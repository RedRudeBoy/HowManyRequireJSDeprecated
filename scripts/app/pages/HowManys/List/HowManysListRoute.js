define(["ember"], function(Ember){
	var HowManysListRoute = Ember.Route.extend({
//		model: function(params) {
//			Ember.Logger.log('HowManysListRoute model');
//			Ember.Logger.log(params);
//			return Ember.Object.extend({});
//		},
		activate: function() {
			Ember.Logger.log('HowManysListRoute activate');
		},
		setupController: function (controller, model) {
			Ember.Logger.log('HowManysListRoute setupController');
		}
	});
	return HowManysListRoute;
});