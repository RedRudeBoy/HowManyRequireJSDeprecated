define(["ember","text!./HMDone.hbs"], function(Ember,Template) {
	var HMDoneView = Ember.View.extend({
//		templateName: 'HMCRUD',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMDoneView;
});
//App.HMDoneRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMDoneRoute activate');
//	}
//});