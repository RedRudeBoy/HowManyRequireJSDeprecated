define(["ember","text!./HMNotifications.hbs"], function(Ember,Template) {
	var HMNotificationsView = Ember.View.extend({
//		templateName: 'HMNotifications',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HMNotificationsView;
});