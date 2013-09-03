define(["ember","text!./HowManysBigIcons.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysBigIcons"] = compiled;
	
	var HowManysBigIconsView = Ember.View.extend({
		name: 'HowManysBigIconsView',
		templateName: 'HowManysBigIcons'
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManysBigIconsView;
});
