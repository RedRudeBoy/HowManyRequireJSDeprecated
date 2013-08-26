define(["ember","text!./HMView.hbs"], function(Ember,Template) {
	var HMViewView = Ember.View.extend({
//		templateName: 'HMView'
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMViewView;
});

//App.HMViewRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMViewRoute activate');
//	}
//});