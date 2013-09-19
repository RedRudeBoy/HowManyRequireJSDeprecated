define(["ember"], function(Ember){
	var HowManyEditRoute = Ember.Route.extend({
		model: function() {
//			Ember.Logger.log('Recover model:',this.modelFor('HowMany'));
			return this.modelFor('HowMany');
//			Ember.Logger.log('HowManyRoute recover model:',this.store.find('howMany',1));
//			return this.store.find('Tag',24); //Routing params & querys
		}
		,actions: {
			imgChange: function() {
				Ember.Logger.log('Change the image of the user');
//				this.currentModel.toJSON();
			},
			veryEasy: function() {
				this.get('context').set('satisfying',1);
			},
			easy: function() {
				this.get('context').set('satisfying',2);
			},
			medium: function() {
				this.get('context').set('satisfying',3);
			},
			difficult: function() {
				this.get('context').set('satisfying',4);
			},
			veryDifficult: function() {
				this.get('context').set('satisfying',5);
			}
		}
//		afterModel: function(model, transition) {
//			Ember.Logger.log('afterModel',model);
//		},
//		activate: function() {
//			Ember.Logger.log('HowManysBigIconsRoute activate');
//		},
//		setupController: function (controller, model) {
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller, model);
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManyEditRoute;
});