define(["ember","text!./HMReport.hbs"], function(Ember,Template) {
	var HMReportView = Ember.View.extend({
//		templateName: 'HMReport',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMReportView;
});