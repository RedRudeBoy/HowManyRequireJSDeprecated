define(["ember"], function(Ember){
	var HowManyRoute = Ember.Route.extend({
		model: function(params) {
//			Ember.Logger.log('HowManyRoute recover model:',this.store.find('howMany',1));
			return this.store.find('howMany',1);
			/**
			 * @ToDo:
			 *	Routing with id & extra params
			 */
//			return this.store.find('howMany',params.id);
		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManyRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManyRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */