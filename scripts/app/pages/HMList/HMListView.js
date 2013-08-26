define(["ember","text!./HMList.hbs"], function(Ember,Template) {
	var HMListView = Ember.View.extend({
//		templateName: 'HMView'
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMListView;
});

//App.HMListRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMListRoute activate');
//	}
//});
