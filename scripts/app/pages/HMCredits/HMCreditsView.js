define(["ember","text!./HMCredits.hbs"], function(Ember,Template) {
	var HMCreditsView = Ember.View.extend({
//		templateName: 'HMCredits',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMCreditsView;
});