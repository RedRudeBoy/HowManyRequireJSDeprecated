define(["ember","text!./HMListTags.hbs","css!./HMListTags"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTags"] = compiled;
	
	var HMListTagsView = Ember.View.extend({
		name: 'HMListTagsView',
		templateName: 'HMListTags'
//		defaultTemplate: compiled
	});
//	var HMListTagsView = null;
	return HMListTagsView;
});