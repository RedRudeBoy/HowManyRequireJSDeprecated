define(["ember"], function(Ember){
	var HowManysRoute = Ember.Route.extend({
		redirect: function() {
			console.log('HowManysRoute redirect to List');
			this.transitionTo('HowManys.List');
		}
	});
	return HowManysRoute;
});