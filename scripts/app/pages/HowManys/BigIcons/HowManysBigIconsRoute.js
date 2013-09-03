define(["ember"], function(Ember){
	var HowManysBigIconsRoute = Ember.Route.extend({
		activate: function() {
			console.log('HowManysBigIconsRoute activate');
		},
		setupController: function (controller, model) {
			console.log('HowManysBigIconsRoute setupController');
		}
	});
	return HowManysBigIconsRoute;
});