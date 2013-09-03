define(["ember"], function(Ember){
	var HowManysIndexRoute = Ember.Route.extend({
		redirect: function() {
			console.log('HowManysIndexRoute redirect to List');
			this.transitionTo('HowManys.List');
		}
	});
	return HowManysIndexRoute;
});