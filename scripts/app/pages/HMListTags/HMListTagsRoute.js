define(["ember"], function(Ember){
	var HMListTagsRoute = Ember.Route.extend({
		activate: function() {
			console.log('HMListTagsRoute activate');
		}
	});
	return HMListTagsRoute;
});