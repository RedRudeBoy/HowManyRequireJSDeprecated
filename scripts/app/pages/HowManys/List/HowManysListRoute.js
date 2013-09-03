define(["ember"], function(Ember){
	var HowManysListRoute = Ember.Route.extend({
//		model: function(params) {
//			console.log('HowManysListRoute model');
//			console.log(params);
//			return Ember.Object.extend({});
//		},
		activate: function() {
			console.log('HowManysListRoute activate');
		},
		setupController: function (controller, model) {
			console.log('HowManysListRoute setupController');
		}
	});
	return HowManysListRoute;
});