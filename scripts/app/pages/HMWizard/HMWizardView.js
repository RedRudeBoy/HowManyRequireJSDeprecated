define(["ember","text!./HMWizard.hbs"], function(Ember,Template) {
	var HMWizardView = Ember.View.extend({
//		templateName: 'HMWizard',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMWizardView;
});