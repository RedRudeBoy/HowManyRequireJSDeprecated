define(["ember","text!./Planner.hbs"], function(Ember,Template) {
	var PlannerView = Ember.View.extend({
//		templateName: 'Planner',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return PlannerView;
});