define(["ember","text!./HMListTagsUsers.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMListTagsUsers"] = compiled;
	
	var HMListTagsUsersView = Ember.View.extend({
		name: 'HMListTagsUsersView',
		templateName: 'HMListTagsUsers'
//		defaultTemplate: Ember.Handlebars.compile(Template),
//		layoutName: 'HMListTags'
	});
	return HMListTagsUsersView;
});
