/**
 * Code from:
 *	https://gist.github.com/machty/5723945
 */
define(["ember"], function(Ember){
	var ApplicationRoute = Ember.Route.extend({
		actions: {
			error: function(reason, transition) {
				Ember.Logger.error('ApplicationRoute error received:',reason,transition);
//				this.controllerFor('banner').displayError(reason);
			}
		}
	});
	return ApplicationRoute;
});