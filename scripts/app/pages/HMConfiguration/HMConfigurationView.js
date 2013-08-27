define(["ember","text!./HMConfiguration.hbs"], function(Ember,Template) {
	var HMConfigurationView = Ember.View.extend({
//		templateName: 'HMConfiguration',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMConfigurationView;
});