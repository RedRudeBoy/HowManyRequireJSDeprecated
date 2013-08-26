define(["ember","text!./HMListTagsToolbar.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTagsToolbar"] = compiled;
	
	var HMListTagsToolbarView = Ember.View.extend({
//		name: 'HMListTagsToolbarView',
		templateName: 'HMListTagsToolbar'
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMListTagsToolbarView;
});
