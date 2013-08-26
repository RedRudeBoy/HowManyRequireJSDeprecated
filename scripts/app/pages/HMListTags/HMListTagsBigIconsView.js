define(["ember","text!./HMListTagsBigIcons.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTagsBigIcons"] = compiled;
	
	var HMListTagsBigIconsView = Ember.View.extend({
		name: 'HMListTagsBigIconsView',
		templateName: 'HMListTagsBigIcons'
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMListTagsBigIconsView;
});
