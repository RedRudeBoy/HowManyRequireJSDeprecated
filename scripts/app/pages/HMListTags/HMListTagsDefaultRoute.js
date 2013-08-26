define(["ember"], function(Ember){
	var HMListTagsDefaultRoute = Ember.Route.extend({
		redirect: function() {
			console.log('HMListTagsDefaultRoute redirect to BigIcons');
			this.transitionTo('HMList');
		}
	});
	return HMListTagsDefaultRoute;
});