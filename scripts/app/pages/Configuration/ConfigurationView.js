define(["ember","text!./Configuration.hbs"], function(Ember,Template) {
	var ConfigurationView = Ember.View.extend({
//		templateName: 'Configuration',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return ConfigurationView;
});