define(["ember","text!./HMNavbar.hbs","css!./HMNavbar"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HMNavbar"] = compiled;
	
	var HMNavbarView = Ember.View.extend({
//		name: 'HMNavbarView',
		templateName: 'HMNavbar'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMNavbarView;
});