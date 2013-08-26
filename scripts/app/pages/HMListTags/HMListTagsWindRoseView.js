define(["ember","text!./HMListTagsWindRose.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTagsWindRose"] = compiled;
	
	var HMListTagsWindRoseView = Ember.View.extend({
		name: 'HMListTagsWindRoseView',
		templateName: 'HMListTagsWindRose'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMListTagsWindRoseView;
});