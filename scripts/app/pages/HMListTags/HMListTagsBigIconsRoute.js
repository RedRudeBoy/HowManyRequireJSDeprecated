define(["ember"], function(Ember){
	var HMListTagsBigIconsRoute = Ember.Route.extend({
		activate: function() {
			console.log('HMListTagsBigIconsRoute activate');
		},
		setupController: function (controller, model) {
			console.log('HMListTagsBigIconsRoute setupController');
		}
	});
	return HMListTagsBigIconsRoute;
});