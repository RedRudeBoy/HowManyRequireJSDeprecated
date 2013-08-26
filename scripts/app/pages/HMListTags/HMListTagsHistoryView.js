define(["ember","text!./HMListTagsHistory.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTagsHistory"] = compiled;
	
	var HMListTagsHistoryView = Ember.View.extend({
		name: 'HMListTagsHistoryView',
		templateName: 'HMListTagsHistory'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMListTagsHistoryView;
});