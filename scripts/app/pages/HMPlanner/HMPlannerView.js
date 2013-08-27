define(["ember","text!./HMPlanner.hbs"], function(Ember,Template) {
	var HMPlannerView = Ember.View.extend({
//		templateName: 'HMPlanner',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMPlannerView;
});