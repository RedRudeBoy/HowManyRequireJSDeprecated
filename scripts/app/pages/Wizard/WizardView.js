define(["ember","text!./Wizard.hbs"], function(Ember,Template) {
	var WizardView = Ember.View.extend({
//		templateName: 'Wizard',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return WizardView;
});